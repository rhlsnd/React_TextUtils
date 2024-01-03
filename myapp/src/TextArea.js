import React, { useState } from 'react'
import Alert from './Alert';


export default function TextArea(props) {
    
    const [text, setText] = useState("")
    const handleUptext = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success")
        
    }
    const handleLowtext = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success")
    }
    const handleCopytext = ()=>{
        let newText = document.getElementById("mybox"
        );
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copied Text To ClipBoard", "success")
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
  return (
    <div>
        <Alert alert={alert}/>
        <div className="my-3 container">
            <h1>Word Manipulator</h1>
            
            <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            <button type="button " onClick={handleUptext} className="btn btn-primary m-2">Uppercase</button>
            <button type="button" onClick={handleLowtext} className="btn btn-primary m-2">LowerCase</button>
            <button type="button" onClick={handleCopytext} className="btn btn-primary m-2">Copy the Text</button>
        </div>
        
     
    </div>
    
  )
}
