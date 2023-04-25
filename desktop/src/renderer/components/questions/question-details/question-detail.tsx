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
import { useGetQuestions } from 'renderer/hooks/use-get-questions';
import { useDeletePost } from 'renderer/hooks/use-delete-question';

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

  const isAuthor = (): boolean => {

    let userId
    if(user) {
      userId = user.uid
    }

    if(question?.user.uid == userId){
      return true;
    }
    return false
  }

  const deleteQuestion = (id) => {
    mutate(id)
  }
  // const deleteQuestionMutation = useMutation((id) => {
  //   return axios.delete(`/questions/${id}`);
  // }, {
  //   onSuccess: (newQuestions, id) => {
  //     queryClient.setQueryData('questions', (questions) => {
  //       return questions.filter((question) => question.id !== id);
  //     })
  //   },
  // })

  // const deleteQuestion = (id) => {
  //   deleteQuestionMutation.mutate(id);
  // }




  return (
    <div className={QuestionDetailsContainer}>
      <div className={QuestionDetailsButtonContainer}>
        <Button
          text="Back"
          type="button"
          variant="small"
          onClick={() => navigate('/questions')}
          />

        {isAuthor() ? (
          <Button
            type="button"
            variant="smallSquare"
            onClick={() => deleteQuestion(id)}
          >
            <IconRemove variant="default"/>
            {/* change to trash can icon */}
          </Button>
          ) : null}
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
