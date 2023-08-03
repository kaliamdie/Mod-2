
import './App.css';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import Setting from './Pages/Setting';
import MultipleChoice from './Pages/MultipleChoice';
import { useState } from 'react';
import { fetchQuestions } from './Api'; 
import Result from './Pages/Result';

function App() {
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
 const [name,setName]=useState("")
 //comes from the api file
  const handleFetchQuestions = async (category,difficulty) => {

    const data = await fetchQuestions(category,difficulty);
    setQuestions(data);
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/setting"
          element={<Setting name={name} setName={setName} fetchQuestions={handleFetchQuestions} setQuestions={setQuestions} />} // Pass the function as props
        />
        <Route
          path="/multiple"
          element={
            <MultipleChoice
            name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          }
        />
        <Route path='/result' element={<Result 
        score={score}
        name={name}
        
        />}/>
      </Routes>
    </div>
  );
}

export default App;
