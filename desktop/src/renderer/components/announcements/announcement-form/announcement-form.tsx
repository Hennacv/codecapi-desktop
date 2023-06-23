import IconText from 'assets/icons/icon-text';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import DynamicBlocksEdit from 'renderer/components/blocks/dynamic-blocks/dynamic-blocks-edit/dynamic-blocks-edit';
import Button from 'renderer/components/ui/button/button';
import InputText from 'renderer/components/ui/input-text/input-text';
import IconCode from 'assets/icons/icon-code';
import { AnnouncementDto, Block } from 'renderer/utils/types';
import { useAddAnnouncement } from 'renderer/hooks/use-add-announcement';
import {
  AnnouncementFormBlocks,
  AnnouncementFormBlocksOptions,
  AnnouncementFormItem,
  AnnouncementFormLabel,
  AnnouncementFormSection,
} from './announcement-form-styles.css';
import { useEditAnnouncement } from 'renderer/hooks/use-edit-announcement';
import { toastSuccess } from 'renderer/notifications/toast/show-toast-notification';

interface AddAnnouncementForm {
  title: string;
  blocks: Block[];
  id?: number;
  isEditing?: boolean;
}

const AnnouncementForm = ({
  title,
  blocks,
  id,
  isEditing,
}: AddAnnouncementForm) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const addAnnouncement = useAddAnnouncement({
    onSuccess: () => {
      toastSuccess(t('toast.success.announcement.add'));
      navigate('/announcements');
    },
  });
  const editAnnouncement = useEditAnnouncement(id);

  if (!blocks.length) {
    blocks = [{ position: 0, type: 'text', value: '', contents: '' }];
  }

  const [form, setForm] = useState<AddAnnouncementForm>({
    title,
    blocks,
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

  const onSubmit = (newAnnouncement: AnnouncementDto) => {
    addAnnouncement.mutate(newAnnouncement);
  };

  const onEdit = (
    form: AnnouncementDto,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (editAnnouncement) {
      editAnnouncement.mutate(form);
    }
  };

  return (
    <form className={AnnouncementFormSection}>
      <div className={AnnouncementFormItem}>
        <label className={AnnouncementFormLabel} htmlFor="title">
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
      <div className={AnnouncementFormItem}>
        <p className={AnnouncementFormBlocks}>{t('instruction.blocks')}</p>
        <div className={AnnouncementFormBlocksOptions}>
          <Button
            type={'button'}
            variant={'smallSquare'}
            onClick={() => addBlock('text')}
          >
            <IconText variant={'small'} />
          </Button>
          <Button
            type={'button'}
            variant={'smallSquare'}
            onClick={() => addBlock('code')}
          >
            <IconCode variant={'small'} />
          </Button>
        </div>
      </div>
      {!isEditing ? (
        <div className={AnnouncementFormItem}>
          <Button
            text={t('announcement.new.button.submit')}
            type="button"
            variant="defaultDisabled"
            disabled={addAnnouncement.isLoading || !form.title}
            onClick={() => onSubmit(form)}
          />
        </div>
      ) : (
        <div className={AnnouncementFormItem}>
          <Button
            text={t('button.save')}
            type="submit"
            variant="defaultDisabled"
            onClick={(event) => onEdit(form, event)}
          />
        </div>
      )}
    </form>
  );
};

export default AnnouncementForm;
