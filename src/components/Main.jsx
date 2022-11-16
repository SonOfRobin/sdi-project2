import cardContext from '../context/cardContext.js';
import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Card from './Card.jsx';
import Toolbar from '@mui/material/Toolbar';
import { GridDiv } from './styledComponents.js';
import './Main.css';

const Main = () => {
  const { cardData, filterText } = useContext(cardContext);
  let { filter } = filterText;
  const filteredArray = cardData.filter((card) => card.name.toLowerCase().includes(filter.toLowerCase()) && card.normal);
  console.log(filteredArray);
  console.log(filter);

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <GridDiv>
        {filteredArray.map((card, index) => <Card key={index} data={card} />)}
      </GridDiv>
    </Box>
  );

};

export default Main;
