import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Forms from "./components/Forms";
import { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  BrowserRouter
} from "react-router-dom"; 
import About from "./components/About";

let name = "Doorstep";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    console.log('showAlert');
    setAlert({
      msg:message, type:type
    });
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      showAlert('Dark Mode has been activated', 'success');
    } else {
      setMode('light');
      showAlert('Light Mode has been activated', 'success');
      }
  }

  return (
    <>
    {/* <Navbar /> */}
      <Navbar title={name} mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      {/* <Router>
        <Routes>
          <Route exact path="/" element={<Forms />} />
          <Route exact path="about" element={<About />} />
        </Routes>
      </Router> */}
      <div className="container my-10">
        <Forms></Forms>
      </div>  
    </>
  );
}

export default App;
