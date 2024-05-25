import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import Alert from './components/Alert';
// import ContactPage from './components/ContactPage'; // Corrected import
import TextForm from './components/TextForm';


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
     {/* <Router> */}
        <Navbar title="Textutiles" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">
        {/* <Switch> */}
          {/* <Route path="/About">
            <About /> 
          </Route> */}
           <TextForm showAlert={showAlert} heading="Enter the text" mode={mode}  />
          {/* <Route path="/">
          <TextForm showAlert={showAlert} heading="Enter the text" mode={mode}  />
          </Route> */}
          {/* <Route path="/ContactPage">
            <ContactPage /> 
          </Route> */}
        
        {/* </Switch> */}
        </div>
        {/* </Router> */}
    
    </>
  );
}

export default App;
