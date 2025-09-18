import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { 
  Home, 
  Support, 
  ApiStatus, 
  Guides, 
  Documentation,
  Agricultural,
  Residential,
  Commercial,
  UtilityScale
} from './pages';
import './styles/tailwind.css';

function App() {
  return (
    <Router>
      <div className="App font-sans bg-white text-gray-800">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/support" element={<Support />} />
          <Route path="/api-status" element={<ApiStatus />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/agricultural" element={<Agricultural />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/utility-scale" element={<UtilityScale />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;