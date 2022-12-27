import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, {useState} from 'react';
function App() {
const [mode,setmode] = useState ('blue');
    
    return ( 
       <>
       
       <Navbar title= "STE" home = "Home" mode={mode} />
       
       <div className="container my-3">
       <Textform heading= "Enter The Text"/>

       </div>
</>
    );
}

export default App;