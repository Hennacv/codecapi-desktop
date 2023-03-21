import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddAnswer } from "renderer/hooks/use-add-answer";
import { AddAnswerDto } from "renderer/utils/types";

interface NewAnswerProps {
    id: number 
}

const NewAnswer = ({id}: NewAnswerProps) => {
	
	const navigate = useNavigate();
	const addAnswer = useAddAnswer({
			onSuccess: () => navigate('/questions/' + id)
	});

	function onSubmit(newAnswer: AddAnswerDto) {
		addAnswer.mutate(newAnswer);
	}

	const [form, setForm] = useState({
		text: '',
		questionId: id,
	});

	function updateFormValue(field: string, value: string) {
		setForm({
			...form,
			[field]: value,
		});
	}

	return (
		<div>
			<form>
			<header>New answer</header>
				<textarea onChange={(e) => updateFormValue('text', e.target.value)}/>
				<button onClick={() => onSubmit(form)}>Post</button>
			</form>
		</div>
	)
}

export default NewAnswer;
