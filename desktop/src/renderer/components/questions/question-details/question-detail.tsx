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
import IconRemove from 'assets/icons/icon-remove';
import { useContext, useState } from 'react';
import { AuthContext } from 'renderer/root';
import { useDeletePost } from 'renderer/hooks/use-delete-question';
import IconText from 'assets/icons/icon-text';

const QuestionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  let { data: question, refetch } = useGetQuestion(+id!);
  // const [deletionError, setDeletionError] = useState(null);
  const { mutate } = useDeletePost();

  if (!question) {
    return null;
  }

  const deleteQuestion = (id) => {
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

        {question?.user.uid == user?.uid && (
        <div className={QuestionDetailsButtonContainer.side}>
          <Button
            type="button"
            variant="smallSquare"
            onClick={() => navigate(`/questions/edit/${id}`)}
          >
            <IconText variant="default"/>
            {/* Change to pencil icon */}
          </Button>
          <Button
            type="button"
            variant="smallSquare"
            onClick={() => deleteQuestion(id)}
          >
            <IconRemove variant="default"/>
            {/* change to trash can icon */}
          </Button>
        </div>
          ) }
      </div>
      <QuestionCard question={question} showText />
      <div className={QuestionDetailsAnswerContainer}>
        <p>Number of answers:</p>
        <div className={QuestionDetailsIconContainer}>
          <IconQuestionsGrey variant="small" />
          {question.answer.length}
        </div>
      </div>
      {!!question.answer.length &&
        <AnswerList answers={question.answer} />
      }
      <NewAnswer id={question.id} refetch={refetch} />
    </div>
  );
};

export default QuestionDetail;
