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
import { useUserContext } from 'renderer/hooks/use-user-context';
import { useState } from 'react';
import QuestionDelete from '../question-delete/question-delete';
import { useTranslation } from 'react-i18next';

const QuestionDetail = () => {
  const {t} = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useUserContext();
  const { data: question, refetch } = useGetQuestion(Number(id));
  const [isShown, setIsShown] = useState(false);
  const acceptedAnswer = question?.answer.find(answer => answer.accepted)

  if (!question) {
    return null;
  }

  return (
    <div className={QuestionDetailsContainer}>
      <div className={QuestionDetailsButtonContainer.main}>
        <Button
          text={t('generalButton.back')}
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
              <IconEdit variant="default" />
            </Button>
            <Button
              type="button"
              variant="smallSquare"
              onClick={() => setIsShown(true)}
            >
              <IconDelete variant="default" />
            </Button>
            <QuestionDelete
              id={id}
              isShown={isShown}
              onClose={() => setIsShown(false)}
            />
          </div>
        )}
      </div>
      <QuestionCard question={question} showText refetch={refetch} />
      <div className={QuestionDetailsAnswerContainer}>
        <p>{t('answerList.numberOfAnswers')}:</p>
        <span className={QuestionDetailsIconContainer}>
          <IconQuestionsGrey variant="small" />
          {question.answer.length}
        </span>
      </div>
      {!!question.answer.length && (
        <AnswerList
          answers={question.answer}
          refetch={refetch}
          questionUserId={question.user.id}
          acceptedAnswer={acceptedAnswer}
        />
      )}
      <NewAnswer id={question.id} refetch={refetch} />
    </div>
  );
};

export default QuestionDetail;
