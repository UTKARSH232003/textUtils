// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
      {/* <Navbar abouttext="this is TextUtil"/>  */}
      <Navbar text="TextUtils"/>
      <div className="container">
        <TextForm/>
        <About/>
      </div>
      
    </>
  );
}

export default App;
