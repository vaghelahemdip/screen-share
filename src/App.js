import React from 'react';
import ScreenShareComponent from './ScreenShareComponent.tsx';
import 'bootstrap/dist/css/bootstrap.css';
import demo from './demo.js';


function App() {
  return (
    <div className="App">
      <demo />
      <ScreenShareComponent />
    </div>
  );
}

export default App;
