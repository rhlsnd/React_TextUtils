import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
    const Navigate = useNavigate();
    const goToHome = ()=>{
        Navigate("/");

    }
  return (
    <div>

       <h1>About page</h1>
       <button onClick={()=>goToHome()}>Go to Home Page</button>
    </div>
  )
}
