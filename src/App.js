
import { useState } from 'react';
import Navbar from './compnents/Navbar';
import Textform from './compnents/Textform';
import Alert from './compnents/Alert';
import About from './compnents/About';

import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = "white"
      showAlert('Dark mode enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
       document.body.style.color = "#042743"
      showAlert('Light mode enabled', 'success');
    }
  };
    const changeColor = (color) => {
  document.body.style.backgroundColor = color;
  setMode('custom');
  showAlert('Background color changed!', 'success');
};

  return (
    <HashRouter>
      <Navbar
        title="TextUtils"
        About="About Us"
        mode={mode}
        toggleMode={toggleMode}
     />
  
 

      <Alert alert={alert} />

<div className="container my-3">
  <h4 style={{ color: mode === 'dark' ? 'white' : 'black' }}>
    Choose Your Colour
  </h4>

  <button
    onClick={() => changeColor('#ffadad')}
    style={{ backgroundColor: '#ffadad', margin: '5px' }}
  >
    Pink
  </button>

  <button
    onClick={() => changeColor('#caffbf')}
    style={{ backgroundColor: '#caffbf', margin: '5px' }}
  >
    Green
  </button>

  <button
    onClick={() => changeColor('#9bf6ff')}
    style={{ backgroundColor: '#9bf6ff', margin: '5px' }}
  >
    Blue
  </button>

  <button
    onClick={() => changeColor('#bdb2ff')}
    style={{ backgroundColor: '#bdb2ff', margin: '5px' }}
  >
    Purple
  </button>

  <button
    onClick={() => changeColor('#fdffb6')}
    style={{ backgroundColor: '#fdffb6', margin: '5px' }}
  >
    Yellow
  </button>
</div>

      <div className="container my-3">
       
<Routes>
  <Route
    exact path="/"
    element={
      <Textform
        showAlert={showAlert}
        heading="Enter the text to analyze"
        mode={mode}
      />
    }
  />

  <Route
    exact path="/about"
    element={<About />}
  />
</Routes>

      </div>
    </HashRouter>
  );
}

export default App;
