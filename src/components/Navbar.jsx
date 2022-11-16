import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import StyleTwoToneIcon from '@mui/icons-material/StyleTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import GavelTwoToneIcon from '@mui/icons-material/GavelTwoTone';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import cardContext from '../context/cardContext.js';
import SearchBar from './SearchBar.js';
import saveDecks from '../saveDecks.js';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import './Main.css';



const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { setFilterText, decks, setDecks } = useContext(cardContext);

  const createNewDeck = () => {
    const newDeckList = [...decks, { cards: [] }];
    setDecks(newDeckList);
    saveDecks(newDeckList);
  };

  const removeDeck = (index) => {
    const filtered = [...decks];
    console.log('Filtered: ', filtered);
    console.log('State: ', decks);
    filtered.splice(index, 1);
    setDecks(filtered);
    console.log('Filtered: ', filtered);
    setTimeout((() => console.log('State: ', decks)), 5000);
    saveDecks(filtered);


  };

  const list = () => (
    <Box sx={{
      overflow: 'auto',
    }}>
      <List>
        <ListItem><img src='/EdgyLogo.png' alt='Logo' height={100} /></ListItem>
        <ListItem key='home' disablePadding>
          <ListItemButton onClick={() => {
            setFilterText('default');
            navigate('/');
          }}>
            <ListItemIcon>
              <HomeTwoToneIcon color='secondary' />
            </ListItemIcon>
            <ListItemText primary='Home' />
          </ListItemButton>
        </ListItem>
        <ListItem key='decks' disablePadding>
          <ListItemButton onClick={() => {
            setFilterText('default');
            navigate('/deck-list/0');
          }}>
            <ListItemIcon>
              <SportsMartialArtsIcon color='secondary' />
            </ListItemIcon>
            <ListItemText primary='Decks' />
          </ListItemButton>
        </ListItem>
        <ListItem key='rules' disablePadding>
          <ListItemButton onClick={() => {
            setFilterText('default');
            navigate('/rules');
          }}>
            <ListItemIcon>
              <GavelTwoToneIcon color='secondary' />
            </ListItemIcon>
            <ListItemText primary='Rules' />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <button onClick={() => createNewDeck()}>Create Deck</button>

      <List>
        <ListItem key='user-decks' disablePadding>
          <ListItemButton onClick={() => setOpen(!open)}>
            <ListItemIcon>
              <StyleTwoToneIcon color='secondary' />
            </ListItemIcon>
            <ListItemText primary='My Decks' />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            {decks.map((deck, index) => (
              <ListItem key={index} disablePadding>
                <button onClick={() => removeDeck(index)}>Remove Deck</button>
                <ListItemButton sx={{ pl: 4 }} onClick={() => navigate(`/deck-list/${index}`)}>
                  <ListItemIcon>
                    <SportsMartialArtsIcon color='secondary' />
                  </ListItemIcon>
                  <ListItemText primary={`Deck #${index + 1}`} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>
    </Box>
  );

  const drawerWidth = 200;

  return (
    <Box sx={{
      display: 'flex',
    }}>
      <AppBar
        color='primary'
        position='fixed'
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography>
            Galvanize Deck Builder and Database
          </Typography>
          <SearchBar filter={setFilterText} />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          ['& .MuiDrawer-paper']: {
            width: drawerWidth,
            boxSizing: 'border-box'
          },
        }}
        variant='permanent'
        anchor='left'
      >
        <Toolbar />
        <Divider />
        {list()}
      </Drawer >
    </Box>
  );
};

export default Navbar;