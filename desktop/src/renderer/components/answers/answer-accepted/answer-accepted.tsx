import Button from 'renderer/components/ui/button/button';
import { useAcceptAnswer } from 'renderer/hooks/use-accept-answer';
import { Answer } from 'renderer/utils/types';
import { AnswerAccepted } from './answer-accepted.css';
import IconRemove from 'assets/icons/icon-remove';
import { useTranslation } from 'react-i18next';

interface AcceptedAnswerProp {
  answer: Answer;
  refetch: () => void;
  acceptedAnswer: Answer | undefined;
}

const AnswerAccept = ({
  answer,
  refetch,
  acceptedAnswer,
}: AcceptedAnswerProp) => {

  const {t} = useTranslation();

  const acceptAnswer = useAcceptAnswer({
    onSuccess: () => refetch(),
    answerId: answer.id,
  });

  const handleAccept = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    acceptAnswer.mutate({
      accepted: !answer.accepted,
      blocks: answer.blocks,
      questionId: answer.questionId,
    });
  };

  if (!acceptedAnswer) {
    return (
      <div>
          <Button
            type="button"
            variant="vote"
            onClick={(event) => handleAccept(event)}
          >
            <p>{t('answer.title.accepted')}</p>
          </Button>
      </div>
    );
  }
  if(answer.accepted == true) {
    return (
      <div>
          <Button
            type="button"
            variant="vote"
            onClick={(event) => handleAccept(event)}
          >
            <p className={AnswerAccepted}>{t('answer.title.accepted')}</p>
            <IconRemove variant="small" isActive={true} />
          </Button>
      </div>
    );
  }
  return null
};

export default AnswerAccept;
