import  React from 'react';
import './App.css';
import LaunchContainer from './components/Launches/index';
import LaunchDetailsContainer from './components/LaunchDetails/index';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className='main'>
        <h1>Welcome to Space X Application</h1>
        <Routes>
          {/* main root path */}
          <Route path='/' element={<LaunchContainer />} />
          {/* indiviual connection  to launches*/}
          <Route path='launch/:id' element={<LaunchDetailsContainer />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
