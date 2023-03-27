import { useNavigate, useParams } from 'react-router-dom';
import { useGetQuestion } from 'renderer/hooks/use-get-question';
import {
  QuestionDetailsAnswerContainer,
  QuestionDetailsContainer,
  QuestionDetailsIconContainer,
} from './question-details-styles.css';

import QuestionCard from '../question-card/question-card';
import AnswerList from '../../answers/answer-list/answer-list';
import NewAnswer from '../../answers/new-answer';
import Button from '../../ui/button/button';
import IconQuestionsGrey from 'assets/icons/icon-question-grey';

const QuestionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: question } = useGetQuestion(+id!);

  if (!question) {
    return null;
  }

  return (
    <div className={QuestionDetailsContainer}>
      <Button
        text="Back"
        type="button"
        variant="small"
        onClick={() => navigate('/questions')}
      />
      <QuestionCard question={question} showText />
      <div className={QuestionDetailsAnswerContainer}>
        <p>Number of answers:</p>
        <div className={QuestionDetailsIconContainer}>
          <IconQuestionsGrey variant="small" />
          {question.answer.length}
        </div>

      </div>
      <AnswerList answers={question.answer} />
      <NewAnswer id={question.id} />
    </div>
  );
};

export default QuestionDetail;
