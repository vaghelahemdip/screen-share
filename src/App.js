import React from 'react';
import ScreenShareComponent from './ScreenShareComponent.tsx';
import { Router, Route, Routes } from 'react-router';


function App() {
  return (
    // <div className="App">
    //   <h1>Screen Sharing Demo</h1>
    //   <ScreenShareComponent />
    // </div>
    <Router>
    <Routes>
        <Route exact path="/" element={<ScreenShareComponent />}></Route> 
    </Routes>
 {/* <Footer /> */}
  </Router>
  );
}

export default App;
