import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Alert from '../Alert';
export default function Header(props) {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 10000000);
  }
  const toggleMode = ()=>{
    if(mode==="light"){
      setMode("dark");
      showAlert("Dark MOde Enabled", "success")
      document.body.style.backgroundColor = '#000000';
      document.body.style.color = '#ffffff';
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#000000';

    }

  }
  return (
    <div>
      <header>
     <nav className="navbar bg-dark border-bottom border-body navbar-expand-lg sticky-top" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Vision Enterprise</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

      <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/Contact">Contact</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/textarea">TextUtils</NavLink></li>


        
      </ul>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" onClick={toggleMode} role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Gark Mode</label>
      </div>
      
    </div>
  </div>
</nav>
      </header>
      <Alert alert={alert}/>
      
    </div>
  )
}

