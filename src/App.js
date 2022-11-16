
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import cardContext from './context/cardContext.js';
import Main from './components/Main.jsx';
import CardDetails from './views/CardDetails.jsx';
import HomePage from './views/HomePage.js';
import data from './config/all-cards.json';
import Rules from './components/Rules.jsx';
import DeckList from './views/DeckList.js';
import Header from './components/Header.js';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/theme.js';

export default function App() {
  const [filterText, setFilterText] = useState({ filter: 'default' });
  const [cardData, setCardData] = useState([...data]);
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('decks')) {
      const deck = JSON.parse(localStorage.getItem('decks'));
      setDecks(deck);
    }
  }, []);

  return (
    <>
      <cardContext.Provider value={{ cardData, setCardData, filterText, setFilterText, decks, setDecks }}>
        <Router>
          <ThemeProvider theme={theme}>
            <Navbar />
            <Header />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/search/' element={<Main />} />
              <Route path='/card-details/:id' element={<CardDetails />} />
              <Route path='/rules' element={<Rules />} />
              <Route path='/deck-list/:deckIndex' element={<DeckList />} />
            </Routes>
          </ThemeProvider>
        </Router>
      </cardContext.Provider>
    </>
  );
}
