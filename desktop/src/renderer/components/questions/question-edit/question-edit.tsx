import { useNavigate, useParams } from "react-router-dom";
import Button from "renderer/components/ui/button/button";
import { useGetQuestion } from "renderer/hooks/use-get-question";
import QuestionForm from "../question-form/question-form";
import { QuestionFormContainer, QuestionFormDescription, QuestionFormHeader, QuestionFormTitle } from "../question-form/question-form-styles.css";

const QuestionEdit = () => {
  const { id } = useParams();
  let { data,  isLoading } = useGetQuestion(+id!);
  const navigate = useNavigate();
  if(!data){ return null}

  return (
    <div>
      <Button
        text="Back"
        type="button"
        variant="small" 
        onClick={() => navigate(`/questions/${id}`)}
      />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={QuestionFormContainer}>
          <header className={QuestionFormHeader.spacing}>
            <h1 className={QuestionFormTitle}>Edit question</h1>
            <p className={QuestionFormDescription}>
              Use the form below to edit your question.
            </p>
          </header>
          <QuestionForm title={data.title} blocks={data.blocks} tags={data.tags} id={data.id} isEditing={true}/>
        </div>
      )}
    </div>
  )

};

export default QuestionEdit;