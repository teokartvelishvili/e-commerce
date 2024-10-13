// src/App.tsx
import React from 'react';
import './App.css';
import Layout from './Layouts/Layout';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import { ThemeProvider } from './Hooks/ThemeContext';
import { LanguageProvider } from './Hooks/LanguageContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider>
        <LanguageProvider>
          <div className="App" id="app">
            <Routes>
              <Route path="/" element={<Layout><Home /></Layout>} />
              <Route path="/about" element={<Layout><About /></Layout>} />
              <Route path="/contact" element={<Layout><Contact /></Layout>} />
            </Routes>
          </div>
        </LanguageProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
