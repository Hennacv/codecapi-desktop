import { useNavigate, useParams } from 'react-router-dom';
import { useGetQuestion } from 'renderer/hooks/use-get-question';
import {
  QuestionDetailsAnswerContainer,
  QuestionDetailsButtonContainer,
  QuestionDetailsContainer,
  QuestionDetailsIconContainer,
} from './question-details-styles.css';

import QuestionCard from '../question-card/question-card';
import AnswerList from '../../answers/answer-list/answer-list';
import NewAnswer from '../../answers/new-answer/new-answer';
import Button from '../../ui/button/button';
import IconQuestionsGrey from 'assets/icons/icon-question-grey';
import IconEdit from 'assets/icons/icon-edit';
import IconDelete from 'assets/icons/icon-delete';
import { useDeletePost } from 'renderer/hooks/use-delete-question';
import { useUserContext } from 'renderer/hooks/use-user-context';

const QuestionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useUserContext();
  const { data: question, refetch } = useGetQuestion(Number(id));
  const { mutate } = useDeletePost();

  if (!question) {
    return null;
  }

  const deleteQuestion = (id: string | undefined) => {
    mutate(id)
  }

  return (
    <div className={QuestionDetailsContainer}>
      <div className={QuestionDetailsButtonContainer.main}>
        <Button
          text="Back"
          type="button"
          variant="small"
          onClick={() => navigate('/questions')}
          />

        {question?.user.uid === user?.uid && (
        <div className={QuestionDetailsButtonContainer.side}>
          <Button
            type="button"
            variant="smallSquare"
            onClick={() => navigate(`/questions/edit/${id}`)}
          >
            <IconEdit variant="default"/>
          </Button>
          <Button
            type="button"
            variant="smallSquare"
            onClick={() => deleteQuestion(id)}
          >
            <IconDelete variant="default"/>
          </Button>
        </div>
          ) }
      </div>
      <QuestionCard question={question} showText refetch={refetch} />
      <div className={QuestionDetailsAnswerContainer}>
        <p>Number of answers:</p>
        <div className={QuestionDetailsIconContainer}>
          <IconQuestionsGrey variant="small" />
          {question.answer.length}
        </div>
      </div>
      {!!question.answer.length &&
        <AnswerList answers={question.answer} refetch={refetch} />
      }
      <NewAnswer id={question.id} refetch={refetch} />
    </div>
  );
};

export default QuestionDetail;
