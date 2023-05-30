import Button from "renderer/components/ui/button/button";
import { useAcceptAnswer } from "renderer/hooks/use-accept-answer";
import { useUserContext } from "renderer/hooks/use-user-context";
import { Answer } from "renderer/utils/types";
import { AnswerAccepted } from "./answer-accepted.css";

interface AcceptedAnswerProp {
  userId: number;
  answer: Answer;
  refetch: () => void;
}

const AnswerAccept = ({ userId, answer, refetch }: AcceptedAnswerProp) => {
  const { user } = useUserContext();

  const acceptAnswer = useAcceptAnswer({
    onSuccess: () => refetch(),
    answerId: answer.id
  })

  const handleAccept = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if(answer.accepted === false) {
      acceptAnswer.mutate({ accepted: true , blocks: answer.blocks, questionId: answer.questionId })
    } else {
      acceptAnswer.mutate({ accepted: false,  blocks: answer.blocks, questionId: answer.questionId })
    }
  }

  return(
    <div >
    {user.id === userId && (
      <Button
      type="button"
      variant="vote"
      onClick={(event) => handleAccept(event)}
      >
        {(answer.accepted == false) ?
        <p> Accept </p> : <p className={AnswerAccepted}> Accepted </p>}
      </Button>
      )}
    </div>
    )


}

export default AnswerAccept;