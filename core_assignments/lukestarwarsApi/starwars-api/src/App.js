import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import People from './components/People';

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
     <Routes>
        <Route path='/' element={<Home />}/>
     </Routes>

    </div>
  );
}

export default App;
