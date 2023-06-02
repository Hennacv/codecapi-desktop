import Button from 'renderer/components/ui/button/button';
import { useAcceptAnswer } from 'renderer/hooks/use-accept-answer';
import { useUserContext } from 'renderer/hooks/use-user-context';
import { Answer } from 'renderer/utils/types';
import { AnswerAccepted } from './answer-accepted.css';
import { useEffect } from 'react';
import IconRemove from 'assets/icons/icon-remove';

interface AcceptedAnswerProp {
  userId: number;
  answer: Answer;
  refetch: () => void;
  acceptedCheck: () => void;
  acceptedAnswer: boolean;
}

const AnswerAccept = ({
  userId,
  answer,
  refetch,
  acceptedCheck,
  acceptedAnswer,
}: AcceptedAnswerProp) => {
  const { user } = useUserContext();

  useEffect(() => {
    acceptedCheck();
  }, [answer.accepted]);

  const acceptAnswer = useAcceptAnswer({
    onSuccess: () => refetch(),
    answerId: answer.id,
  });

  const handleAccept = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if (answer.accepted === false) {
      acceptAnswer.mutate({
        accepted: true,
        blocks: answer.blocks,
        questionId: answer.questionId,
      });
    } else {
      acceptAnswer.mutate({
        accepted: false,
        blocks: answer.blocks,
        questionId: answer.questionId,
      });
    }
  };

  if (acceptedAnswer == true) {
    return (
      <div>
        {user.id === userId && answer.accepted == true && (
          <Button
            type="button"
            variant="vote"
            onClick={(event) => handleAccept(event)}
          >
            <p className={AnswerAccepted}> Accepted </p>
            <IconRemove variant="extraSmall" />
          </Button>
        )}
      </div>
    );
  } else {
    return (
      <div>
        {user.id === userId && (
          <Button
            type="button"
            variant="vote"
            onClick={(event) => handleAccept(event)}
          >
            {answer.accepted == false && <p> Accept </p>}
          </Button>
        )}
      </div>
    );
  }
};

export default AnswerAccept;
