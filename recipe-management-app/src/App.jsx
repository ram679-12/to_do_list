import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { RecipeProvider } from './context/RecipieContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import AddRecipie from './pages/AddRecipie';
import ReceipieDetails from './pages/ReceipieDetails';
import './App.css';

export default function App() {
  return (
    <RecipeProvider>
      <BrowserRouter>
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recipes" element={<Home />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/add-recipe" element={<AddRecipie />} />
              <Route path="/add" element={<Navigate to="/add-recipe" replace />} />
              <Route path="/recipe/:id" element={<ReceipieDetails />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <footer className="footer">
            <div className="footer-container">
              <div className="footer-brand">
                <span className="brand-text">
                  recipe<span>book</span>
                </span>
                <p>Your everyday kitchen companion for discovering and collecting meals.</p>
              </div>
              <p className="footer-copy">
                &copy; {new Date().getFullYear()} RecipeBook. Crafted with care.
              </p>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    </RecipeProvider>
  );
}
