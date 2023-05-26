import { useState } from 'react';
import { useAddAnswer } from 'renderer/hooks/use-add-answer';
import { AddAnswerDto, Block } from 'renderer/utils/types';
import {
  NewAnswerAddContainer,
  NewAnswerBlocks,
  NewAnswerBlocksOptions,
  NewAnswerContainer,
  NewAnswerForm,
  NewAnswerFormItem,
} from './new-answer-styles.css';

import Button from 'renderer/components/ui/button/button';
import IconText from 'assets/icons/icon-text';
import IconCode from 'assets/icons/icon-code';
import IconAdd from 'assets/icons/icon-add';
import DynamicBlocksEdit from 'renderer/components/blocks/dynamic-blocks/dynamic-blocks-edit/dynamic-blocks-edit';

interface NewAnswerProps {
  id: number;
  refetch: () => void;
}

interface AddAnswerForm {
  blocks: Block[];
  questionId: number;
}

const NewAnswer = ({ id, refetch }: NewAnswerProps) => {
  const addAnswer = useAddAnswer({
    onSuccess: () => refetch(),
  });

  const [formIsActive, setFormIsActive] = useState(false);
  const [form, setForm] = useState<AddAnswerForm>({
    blocks: [],
    questionId: id,
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
      {
        position: form.blocks.length,
        type: type,
        value: '',
        language: 'javascript',
      },
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
  };

  const onSubmit = (newAnswer: AddAnswerDto) => {
    addAnswer.mutate(newAnswer);
    setFormIsActive(false);
  };

  return (
    <>
      {formIsActive ? (
        <div className={NewAnswerContainer}>
          <Button
            text="Close"
            type={'button'}
            variant={'small'}
            onClick={() => setFormIsActive(!formIsActive)}
          ></Button>
          <form className={NewAnswerForm}>
            <DynamicBlocksEdit
              field="blocks"
              blocks={form.blocks}
              updateFormValue={(field, value) => updateFormValue(field, value)}
              removeBlock={removeBlock}
            />
            <div className={NewAnswerFormItem}>
              <div className={NewAnswerBlocks}>
                <p>
                  The buttons below allow you to add a text or code field to
                  your answer.
                </p>
                <div className={NewAnswerBlocksOptions}>
                  <Button
                    type="button"
                    variant="smallSquare"
                    onClick={() => addBlock('text')}
                  >
                    <IconText variant={'small'} />
                  </Button>
                  <Button
                    type="button"
                    variant="smallSquare"
                    onClick={() => addBlock('code')}
                  >
                    <IconCode variant={'small'} />
                  </Button>
                </div>
              </div>
            </div>
            {form.blocks.length > 0 && (
              <Button
                text="Post"
                type="button"
                variant="defaultDisabled"
                disabled={addAnswer.isLoading}
                onClick={() => onSubmit(form)}
              />
            )}
          </form>
        </div>
      ) : (
        <div className={NewAnswerAddContainer}>
          <Button
            type="button"
            variant="defaultSquare"
            onClick={() => setFormIsActive(!formIsActive)}
          >
            <IconAdd variant="default" />
          </Button>
          <p>New answer</p>
        </div>
      )}
    </>
  );
};

export default NewAnswer;
