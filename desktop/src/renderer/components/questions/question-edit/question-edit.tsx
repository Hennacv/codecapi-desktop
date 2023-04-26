import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "renderer/components/ui/button/button";
import { useEditQuestion } from "renderer/hooks/use-edit-question";
import { useGetQuestion } from "renderer/hooks/use-get-question";
import QuestionEditForm from "./question-edit-form";

const QuestionEdit = () => {
  const { id } = useParams();
  let { data,  isLoading } = useGetQuestion(+id!);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { mutate } = useEditQuestion(id, setError);

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
        <QuestionEditForm questionData={data}/>
      )}
    </div>
    )

};

export default QuestionEdit;