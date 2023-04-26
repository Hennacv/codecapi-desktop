import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import api from "renderer/utils/api";

export const useEditQuestion = (id, setError) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation(
    (questionData) => {
      return api.put(`http://localhost:3000/questions/${id}`, questionData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["questions"]);
        navigate("/");
      },
      // onError: ({ message }) => {
      //   setError(message);
      // },
    }
  );
};