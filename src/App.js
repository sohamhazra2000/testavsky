import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Search from './Search';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/serch" element={<Search/>} />
  
   </Routes>
   </Router>
  );
}

export default App;
