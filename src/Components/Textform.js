import React, {useState} from 'react'


export default function Textform(props) {

    const handleUpClick = () => {

        // console.log("uppercase was clicked " + text);
        let newText= text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {

        // console.log("lowercase was clicked " + text);
        let newText= text.toLowerCase();
        setText(newText)
    }
    const handleclClick = () => {

      // console.log("lowercase was clicked " + text);
      let newText= ''
      setText(newText)
  }

    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }
    
    

    const handleOnChange = (event) => {

        // console.log("On Change")
        setText(event.target.value)

    }

    const [text, setText] = useState('');

  return (
    <>
           <div className="container">
           <h1>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value= {text} onChange= {handleOnChange} id="mybox" rows="8"></textarea>
            </div>
           <button className="btn btn-primary mx-1" onClick= {handleUpClick} >Convert to uppercase </button>
           <button className="btn btn-primary mx-1" onClick= {handleLoClick} >Convert to lovercase </button>
           <button className="btn btn-primary mx-1" onClick= {handleclClick} >Clear text </button>

           <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>

            </div>
         
         <div className="container my-3"></div>

         <h2>Your Text Summary</h2>
         <p> {text.split(" ").length} Word and {text.length} Characters</p>
         <p> { 0.008 * text.split(" ").length } Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    
    </>
  )
}
