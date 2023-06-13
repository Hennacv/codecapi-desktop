import Modal from 'renderer/components/ui/modal/modal';
import { AddQuestionForm, QuestionDto } from 'renderer/utils/types';
import dayjs from 'dayjs';
import {
  QuestionCardContent,
  QuestionCardHeader,
  QuestionCardHeaderInfo,
  QuestionCardIconContainer,
  QuestionCardTitle,
} from '../question-card/question-card-styles.css';
import IconQuestions from 'assets/icons/icon-questions';
import TagCard from 'renderer/components/tags/tag-card/tag-card';
import DynamicBlocksRead from 'renderer/components/blocks/dynamic-blocks/dynamic-blocks-read/dynamic-blocks-read';
import Button from 'renderer/components/ui/button/button';
import { useUserContext } from 'renderer/hooks/use-user-context';
import { useAddQuestion } from 'renderer/hooks/use-add-questions';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

interface QuestionPreview {
  question: AddQuestionForm;
  isShown: boolean;
  onClose: (arg0: boolean) => void;
}

const QuestionPreview = ({ question, isShown, onClose }: QuestionPreview) => {
  const { user } = useUserContext();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const addQuestion = useAddQuestion({
    onSuccess: () => navigate('/questions'),
  });

  useEffect(() => {
    const scrollableElement = document.getElementById('main');

    if (scrollableElement) {
      scrollableElement.scrollTo({ top: 0, behavior: 'smooth' });
      scrollableElement.style.overflowY = isShown ? 'hidden' : 'visible';
    }
  }, [isShown]);

  const onSubmit = (newQuestion: QuestionDto) => {
    addQuestion.mutate(newQuestion);
  };

  return (
    <Modal isShown={isShown} onClose={() => onClose(false)}>
      <span>Question Preview:</span>
      <div className={QuestionCardHeader}>
        <div className={QuestionCardHeaderInfo}>
          {user.name}
          <span>-</span>
          {dayjs(question.createdAt).fromNow()}
          <>
            <span>-</span>
            <div className={QuestionCardIconContainer}>
              <IconQuestions variant="small" />0
            </div>
          </>
          {!!question.tags.length && (
            <>
              <span>-</span>
              {question.tags.map((tag) => (
                <TagCard
                  key={tag.id}
                  title={tag.title}
                  color={tag.color}
                  variant="small"
                />
              ))}
            </>
          )}
        </div>
      </div>
      <div className={QuestionCardContent}>
        <span className={QuestionCardTitle}>{question.title}</span>
        <DynamicBlocksRead blocks={question.blocks} />
      </div>
      <div>
        <Button
          text={t('question.new.button.submit')}
          type="button"
          variant="defaultDisabled"
          onClick={() => onSubmit(question)}
        />
      </div>
    </Modal>
  );
};

export default QuestionPreview;
