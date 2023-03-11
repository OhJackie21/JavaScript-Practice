import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Param from './components/Param';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
            <Route element={<Home />} path="/home" />

            <Route element={<Param />} path="/:word" />

            <Route element={<Param />} path="/:word/:color/:bgColor" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
