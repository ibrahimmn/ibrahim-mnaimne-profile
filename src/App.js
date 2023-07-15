
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './components/navbar';
import HomePage from './pages/homepage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navibar />
      <div id="page-body">
        <Routes>
          <Route path="/" element={<HomePage />} />
          
        </Routes>
      </div>
    </div>
  </BrowserRouter>
   
  );
}

export default App;
