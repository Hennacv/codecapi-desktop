import Button from 'renderer/components/ui/button/button';
import { useAcceptAnswer } from 'renderer/hooks/use-accept-answer';
import { useUserContext } from 'renderer/hooks/use-user-context';
import { Answer } from 'renderer/utils/types';
import { AnswerAccepted } from './answer-accepted.css';
import { useEffect } from 'react';
import IconRemove from 'assets/icons/icon-remove';

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

  if (acceptedAnswer) {
    return (
      <div>
        {answer.accepted == true && (
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
        {answer.accepted == false && (
          <Button
            type="button"
            variant="vote"
            onClick={(event) => handleAccept(event)}
          >
            <p> Accept </p>
          </Button>
        )}
      </div>
    );
  }
};

export default AnswerAccept;
