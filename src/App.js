import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Calculator from './pages/Calculator';
import Tracking from './pages/Tracking';
import Advisor from './pages/Advisor';
import AdvisorDetail from './pages/AdvisorDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/calculator' element={<Calculator/>}/>
          <Route path='/tracking' element={<Tracking/>}/>
          <Route path='/advisor' element={<Advisor/>}/>
          <Route path='/detail' element={<AdvisorDetail/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/advisordetail' element={<AdvisorDetail/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
