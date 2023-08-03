import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [button, setButton] = useState(true);

  return (
    <div className='app' style={{ backgroundImage:`url(https://img.freepik.com/free-vector/gradient-question-mark-pattern-design_23-2149423892.jpg?w=1380&t=st=1690818231~exp=1690818831~hmac=a1cd6518554f9381784441e14b959a0a476fa0faa4a08365adc37ae67e340cee)`}}>
    <div className='d-flex justify-content-center align-items-center flex-column'>
      <img
        className='image'
        src='https://cdn.pixabay.com/photo/2018/08/31/11/17/quiz-3644414_1280.png'
      />
      <div className='d-flex justify-content-center align-items-center flex-column' style={{ margin: '50px' }}>
        <div className='card text-white bg-dark'>
          <h1 className='card-text col p-4'>Welcome!</h1>
        </div>
        <div className='row'>
          {button && (
            <div style={{ margin: '50px' }}>
              <Link className='btn btn-secondary text-decoration-none p-3' to='/setting'>
                Get Started
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}
