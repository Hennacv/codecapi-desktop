import { useMutation } from "react-query";
import api from "renderer/utils/api";
import { AddCommentDto } from "renderer/utils/types";

interface AddCommentProps {
    onSuccess: () => void;
}

export function useAddComment({ onSuccess }: AddCommentProps) {
	return useMutation(
		(data: AddCommentDto) => {
				return api.post('/comment', data);
		},
		{ onSuccess }
	);
}