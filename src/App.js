// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  const [mode, setmode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = '#343a40';
      showAlert("Dark Mode has been enabled", "success")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success")
    }
  } 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null)
    }, 3000)
  }
  return (
    <>
      {/* <Navbar abouttext="this is TextUtil"/>  */}
      <Navbar text="TextUtils" abouttext="this is TextUtil" mode={mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/> 
      <div className="container my-3">
        <TextForm mode={mode} showAlert={showAlert}/>
        {/* <About/> */}
      </div> 
    </>
  );
}

export default App;
