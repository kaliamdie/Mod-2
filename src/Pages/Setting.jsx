import React, { useState } from 'react';
import { MenuItem, TextField, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';


export default function Setting({name,setName,fetchQuestions}) {
 
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const navigate = useNavigate();
//displaying te name whenever the user changes their names
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleDiffculty = (event) => {
    setDifficulty(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !category || !difficulty) {
      alert('Please fill out the form');
    } else {
      fetchQuestions(category,difficulty)
      navigate('/multiple');
    }
  };
 

  return (
    <div className='setting-app' style={{ background:`linear-gradient(90deg, rgb(151, 134, 255), rgb(199, 108, 204))`}}>
   {/* <p><Link className=' home p-3' to="/">Home</Link></p> */}
    <div className='container'>
     
      <div className='setting'>
        <h2 style={{fontFamily:'permanent marker',fontSize:"50px"}}>Setting</h2>
        <div className='selects'>
          <TextField label='Enter Your Name' style={{ marginBottom: '25px',backgroundColor:"white" }} onChange={handleName} />

          <TextField
            select
            label="Select Category"
            value={category}
            onChange={handleCategory}
            variant="outlined"
            style={{ marginBottom: 30 ,backgroundColor:"white"}}
            size='normal'
          
          >
           
           <MenuItem value='18'>Computers</MenuItem>
           <MenuItem value='17'>Science and Nature</MenuItem>
              <MenuItem value='12'>Music</MenuItem>
              <MenuItem value='9'>General Knoweledge</MenuItem>
            
            
          </TextField>

          <TextField select label='Select Difficulty' onChange={handleDiffculty} value={difficulty} style={{ backgroundColor:"white",color:"white"}}>
            <MenuItem key='Easy' value='easy'>
              Easy
            </MenuItem>
            <MenuItem key='Medium' value='medium'>
              Medium
            </MenuItem>
            <MenuItem key='Hard' value='hard'>
              Hard
            </MenuItem>
          </TextField>
          <Button size="large"variant='outlined' onClick={handleSubmit}  style={{ marginTop: '40px' ,backgroundColor:"white" }}>
            Play
          </Button>
        
        </div>
      </div>
    </div>
    </div>
  );
}
