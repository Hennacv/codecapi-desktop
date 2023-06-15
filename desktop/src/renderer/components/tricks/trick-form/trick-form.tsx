import IconText from 'assets/icons/icon-text';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import DynamicBlocksEdit from 'renderer/components/blocks/dynamic-blocks/dynamic-blocks-edit/dynamic-blocks-edit';
import Button from 'renderer/components/ui/button/button';
import InputText from 'renderer/components/ui/input-text/input-text';
import { useAddTrick } from 'renderer/hooks/use-add-trick';
import { Block, TrickDto } from 'renderer/utils/types';
import {
  TrickFormBlocks,
  TrickFormItem,
  TrickFormLabel,
  TrickFormSection,
} from './trick-form-styles.css';

interface AddTrickForm {
  title: string;
  blocks: Block[];
  id?: number;
}

const TrickForm = ({ title, blocks, id }: AddTrickForm) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const addTrick = useAddTrick({
    onSuccess: () => navigate('/tricks'),
  });

  let [form, setForm] = useState<AddTrickForm>({
    title,
    blocks: [{ position: 0, type: 'text', value: '', contents: '' }],
    id,
  });

  const updateFormValue = (field: string, value: any) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const addBlock = (type: 'text' | 'code') => {
    updateFormValue('blocks', [
      ...form.blocks,
      { position: form.blocks.length, type: type, value: '' },
    ]);
  };

  const removeBlock = (position: number) => {
    const newBlocks = form.blocks.filter(
      (block) => block.position !== position
    );

    newBlocks.forEach((block, index) => {
      block.position = index;
    });
    updateFormValue('blocks', [...newBlocks]);
    blocks = form.blocks;
  };

  const onSubmit = (newTrick: TrickDto) => {
    addTrick.mutate(newTrick);
  };

  return (
    <form className={TrickFormSection}>
      <div className={TrickFormItem}>
        <label className={TrickFormLabel} htmlFor="title">
          {t('common.title')} *
        </label>
        <InputText
          type="text"
          id="title"
          defaultValue={form.title}
          variant={!form.title ? 'default' : 'defaultValidated'}
          onChange={(e) => updateFormValue('title', e.target.value)}
        />
      </div>
      <DynamicBlocksEdit
        field="blocks"
        blocks={form.blocks}
        updateFormValue={(field, value) => updateFormValue(field, value)}
        removeBlock={removeBlock}
      />
      <div className={TrickFormItem}>
        <p className={TrickFormBlocks}>{t('instruction.blocks')}</p>
        <div>
          <Button
            type={'button'}
            variant={'smallSquare'}
            onClick={() => addBlock('text')}
          >
            <IconText variant={'small'} />
          </Button>
        </div>
      </div>
      <div className={TrickFormItem}>
        <Button
          text={t('trick.new.button.submit')}
          type="button"
          variant="defaultDisabled"
          disabled={addTrick.isLoading || !form.title}
          onClick={() => onSubmit(form)}
        />
      </div>
    </form>
  );
};

export default TrickForm;
