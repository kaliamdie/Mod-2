import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Question({
  currentQuestion,
  setCurrentQuestion,
  questions,
  options,
  setScore,
  correct,
}) {
  const [select, setSelect] = useState('');
  //timer for the questions
  const [timer, setTimer] = useState(60); 
   // Track if the timer is running
  const [timerRunning, setTimerRunning] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let interval;
    if (timerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      handleNext(); }
    // Clean up the interval on component unmount or when the timer stops
    return () => clearInterval(interval);
  }, [timer, timerRunning]);

  const handleCheck = (answer) => {
    if (answer === correct) {
      setScore((prevScore) => prevScore + 1);
    }
    setSelect(answer);
    setTimerRunning(false); // Stop the timer when an option is selected
  };

  const handleNext = () => {
    if (currentQuestion >= questions.length - 1) {
      navigate('/result');
    } else {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setSelect('');
      setTimer(60); // Reset the timer when moving to the next question
      setTimerRunning(true); // Start the timer again
    }
  };

  const handleQuit = () => {
    navigate('/setting');
  };

  const correctClassName = 'right';
  const wrongClassName = 'wrong';

  const renderCorrectAnswer = () => {
    if (select !== correct && select !== '') {
      return (
        <div className="correct-answer">
          Correct answer: {correct}
        </div>
      );
    }
    return null;
  };

  return (
    <div className='question'>
      <h1 style={{ marginBottom: "20px" }}>Question: {currentQuestion + 1}</h1>
      <div className='singleQuestion'>
        <h2>{questions[currentQuestion].question}</h2>
        <div className='options'>
          {options.map((answer) => (
            <button
              onClick={() => handleCheck(answer)}
              className={`singleOption ${select === answer ? (answer === correct ? correctClassName : wrongClassName) : ''}`}
              key={answer}
              disabled={select}
            >
              {answer}
            </button>
          ))}
        </div>
        {renderCorrectAnswer()}
        <div className='controls'>
          {/* Button to end the game */}
          <Button variant='contained' color='primary' href='/setting' onClick={handleQuit}>
            Quit
          </Button>
          {/* Button for the next question */}
          <Button size="large" variant='contained' color='secondary' onClick={handleNext}>
            Next Question
          </Button>
        </div>
        {/* Timer display */}
        <div style={{fontSize:20}}>
          Time Remaining: {timer}
        </div>
      </div>
    </div>
  );
}
