import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import People from './components/People';
import Form from './components/Form';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Form />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
