import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddAnswer } from "renderer/hooks/use-add-answer";
import { AddAnswerDto } from "renderer/utils/types";

interface NewAnswerProps {
    id: number 
}

function NewAnswer({id}: NewAnswerProps) {
    
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
        <div className="bg-white shadow-cards border border-gray-100 rounded-xl">
            <form className="flex flex-col p-6 gap-6">
            <header className="is-6 text-lg font-semibold">Nieuw antwoord</header>
                <textarea className="rounded-xl border border-gray-300 shadow-input p-4" onChange={(e) => updateFormValue('text', e.target.value)}/>
                <button className="w-fit py-2 px-6 bg-gray-600 text-white rounded-xl hover:bg-gray-500 cursor-pointer" onClick={() => onSubmit(form)}>Post</button>
            </form>
        </div>
    )
}

export default NewAnswer;
