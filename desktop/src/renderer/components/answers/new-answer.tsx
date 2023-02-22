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

    const contrainerStyle = {
        margin: '1.5rem 0rem 1.5rem 0rem',
        padding: '1.5rem',
        backgroundColor: 'white',
        boxShadow: '0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0px 0 1px rgb(10 10 10 / 2%)',
    };

    const headerStyle = {
        fontWeight: '600',
        marginBottom: '1rem'
    };

    const inputContainerStyle = {
        display: 'grid'
    };

    const inputStyle = {
        marginTop: '1rem',
        border: '1px solid',
        borderColor: 'hsl(0deg, 0%, 86%)',
        borderRadius: '4px',
        padding: '1rem 1rem 1rem 1rem',
        width: '100%',
        height: '5rem'
    };

    const buttonStyle = {
        marginTop: '2rem',
        border: 'none',
        backgroundColor: 'hsl(229deg, 53%, 53%)',
        borderRadius: '4px',
        color: 'white',
        fontWeight: '400',
        fontSize: '1em',
        padding: '0.5rem 1rem 0.5rem 1rem'
    };

    return (
        <div style={contrainerStyle}>
            <form>
                <header style={headerStyle}>Nieuw antwoord</header>
                <div style={inputContainerStyle}>
                    <label>Antwoord</label>
                    <textarea style={inputStyle} onChange={(e) => updateFormValue('text', e.target.value)}/>
                </div>

                <button style={buttonStyle} onClick={() => onSubmit(form)}>Post</button>
            </form>
        </div>
    )
}

export default NewAnswer;
