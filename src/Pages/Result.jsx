import { Button } from '@mui/material'
import React, { useEffect } from 'react'

export default function Result({name,score}) {
  useEffect(()=>{
    localStorage.setItem("Quiz score",name,score)
  },[score])
  return (
    <div className='results' style={{backgroundColor:'black'}}>
    <p style={{fontSize:"60px"}}>Final Score:{score}/15</p>
    <Button
     variant="contained"
     color="primary"
     href="/setting"
  size='large'
    
    >
      Play again
    </Button>
   
    </div>
  )
}
