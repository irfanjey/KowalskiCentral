import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Analysis from './Pages/Analysis';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path = '/' element={<Analysis/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
