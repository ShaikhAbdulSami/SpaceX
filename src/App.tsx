import  React from 'react';
import './App.css';
import './index.css'
import LaunchContainer from './components/Launches/index';
import LaunchDetailsContainer from './components/LaunchDetails/index';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom'
import Footer from './Footer';
function App() {
  return (
    <Router>
      <div className='main'>
        <h1><strong> Welcome to Space X Application</strong> </h1>
        <Routes>
          {/* main root path */}
          <Route path='/' element={<LaunchContainer />} />
          {/* indiviual connection  to launches*/}
          <Route path='launch/:id' element={<LaunchDetailsContainer />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
