
import './App.css';
import './Form';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import  { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import Navigation from './pages/Navigation';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
      <Navigation/>
    </div>
  );
}

export default App;
