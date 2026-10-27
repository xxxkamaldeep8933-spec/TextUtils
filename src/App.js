
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
      showAlert('Dark mode enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode enabled', 'success');
    }
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
