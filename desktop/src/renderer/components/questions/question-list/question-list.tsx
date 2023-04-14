import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Question, Tag } from "renderer/utils/types";
import { useGetQuestions } from "renderer/hooks/use-get-questions";
import { SFContainer } from "renderer/components/ui/search/search-styles.css";
import { NewQuestionButtonPosition } from "../new-question/new-question-styles.css";
import QuestionCard from "../question-card/question-card";
import Button from "renderer/components/ui/button/button";
import Filter from "renderer/components/ui/filter/filter";
import Search from "renderer/components/ui/search/search";

const QuestionList = () => {
  const navigate = useNavigate();
  const { data = [] } = useGetQuestions();
  const [questions,setQuestions]=useState(data);
  const [searchTerm,setSearchTerm]=useState('');
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(()=>{
    setQuestions(data)
  },[data])

  useEffect(()=> {
    let result = data.filter((question) => question.title.toLowerCase().includes(searchTerm));

    if(!!tags.length){
      result = result.filter((question) => {
        return question.tags.some((questionTag)=>{
          return tags.some((tag)=>tag.id === questionTag.id)
        })
      })
    }

    setQuestions(result)
  },[tags,searchTerm])


  const onNewQuestion = () => {
    navigate("/questions/new");
  }

  return (
    <div>
      <div className={SFContainer}>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Filter tags={tags} setTags={setTags} />
      </div>
      <div className={NewQuestionButtonPosition}>
        <Button
          text="+ New Question"
          type="button"
          variant="smallSquare"
          onClick={() => onNewQuestion()}
        />
      </div>
      {questions.map((question: Question) => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </div>
  );
}

export default QuestionList;
