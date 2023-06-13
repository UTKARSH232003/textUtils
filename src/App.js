// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  const [mode, setmode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = 'black';
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white';
    }
  } 
  return (
    <>
      {/* <Navbar abouttext="this is TextUtil"/>  */}
      <Navbar text="TextUtils" abouttext="this is TextUtil" mode={mode} toggleMode = {toggleMode}/>
      <div className="container my-3">
        <TextForm/>
        <About/>
      </div> 
    </>
  );
}

export default App;
