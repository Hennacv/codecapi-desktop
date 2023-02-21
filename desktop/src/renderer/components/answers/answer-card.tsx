import dayjs from 'renderer/utils/dayjs';
import { Answer } from "renderer/utils/types";

interface Props {
    answer: Answer;
}

function AnswerCard({ answer }: Props) { 

    const cardStyles = {
        margin: '0rem 0rem 1.5rem 0rem',
        padding: '1.5rem',
        backgroundColor: 'white',
        boxShadow: '0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0px 0 1px rgb(10 10 10 / 2%)',
        display: 'grid'
    };

    const timeStyles = {
        marginBottom: '1rem',
        display: 'flex',
        justifySelf: 'right',
        marginRight: '1.5rem'
    }

    return (
        <div key={answer.id} style={cardStyles}>
            <p style={timeStyles}>{dayjs(answer.createdAt).fromNow()}</p>
            <p>{answer.text}</p>
        </div> 
    )
}

export default AnswerCard;
