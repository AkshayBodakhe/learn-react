import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ThemeContext from './context/ThemeContext';
import ThemedButton from './components/ThemedButton';
import { Appp } from './components/HOC';
import Routing from './components/Routing';
import Hooks from './hooks/Hooks';
import UseReducer from './hooks/UseReducer';
import ForwardRefEx from './components/ForwardRef';


function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {/* <Toolbar /> */}
      {/* <Appp/> */}
      {/* <Routing/> */}
      {/* <Hooks/> */}
      {/* <UseReducer/> */}
    </ThemeContext.Provider>
  );
}

export default App;

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}



