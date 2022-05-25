import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Landing from './views/landing/component';
import Wheel from './views/wheel/component';
import Home from './views/home/component';

function App() {
  return (
    <Router>
        <main>
          <Routes>
            <Route
              path="/rikiuotchi"
              element={<Landing />}
            />
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/wheel"
              element={<Wheel />}
            />
          </Routes>
        </main>
    </Router>
  );
}

export default App;
