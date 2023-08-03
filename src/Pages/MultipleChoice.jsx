import React, { useEffect, useState } from 'react';
import Question from './Question';
import { Link, useNavigate } from 'react-router-dom';
export default function MultipleChoice({ name, score, setScore, questions, setQuestions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [options, setOptions] = useState([]);
  const navigate=useNavigate()
//updating the multiple choice whenever the questions change
  useEffect(() => {
    if (questions && questions.length > 0) {
      const currentQuestionData = questions[currentQuestion];
      if (currentQuestionData) {
        setOptions(handleRandom([currentQuestionData.correct_answer, ...currentQuestionData.incorrect_answers]));
        
      }
    }
    if (navigate === "/setting") {
      setScore(0);
    }
  }, [questions, currentQuestion]);
//used to shuffle the order options randomly
  const handleRandom = (randomOptions) => {
  
    return randomOptions.sort(() => Math.random() - 0.5);
  };
// if there is no question available
  if (!questions || questions.length === 0) {
    
    return (
      <>
        <div className='setting-app' style={{ textAlign: "center", backgroundImage: `rgb(223, 208, 252)` }}>
          {location.pathname === "/setting" && ( 
            <h1>Go Back to the<Link to="/setting">Setting</Link> </h1>
          )}
         
          {questions}
        </div>
      </>
    );
  }



  const currentQuestionData = questions[currentQuestion];


  return (
    <>
      <div className='setting-app' style={{ backgroundImage: `url(https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZCUyMHRleHR1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60)` }}>
        <h1 className='sub'>Hello, {name}</h1>
        <>
          <div className='quizInfo'>
           <div className="quizLeft"><span  style={{fontSize:"20px"}}>{questions[currentQuestion].category}</span></div>
            <div className="quizRight"> <span style={{fontSize:"20px"}}>Score: {score}</span></div>
           
          </div>
          <Question
            question={currentQuestionData}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            questions={questions}
            options={options}
            score={score}
            setScore={setScore}
            correct={questions[currentQuestion]?.correct_answer}
          />
        </>
      </div>
    </>
  );
}