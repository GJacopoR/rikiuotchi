import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Wheel from './views/wheel/component';
import Home from './views/home/component';
import Navbar from './components/navbar/component';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/wheel"
            element={<Wheel />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
