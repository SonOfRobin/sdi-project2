import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import cardContext from '../context/cardContext';
import saveDecks from '../saveDecks.js';
import { CardImage } from './styledComponents.js';
import './Main.css';



const StyledDiv = styled.div`
width: 20%;
min-width: fit-content;
`;

const Card = ({ data }) => {
  const [contextMenu, setContextMenu] = useState(null);
  const { decks, setDecks } = useContext(cardContext);
  // console.log('card call', data);

  const handleContextMenu = (event) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
          mouseX: event.clientX + 2,
          mouseY: event.clientY + 10,
        }
        : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
        // Other native context menus might behave different.
        // With this behavior we prevent contextmenu from the backdrop to re-locate existing context menus.
        null,
    );
  };

  const handleClose = (data, cards, index) => {
    const newDeckList = [...decks];
    newDeckList[index].cards = [...cards, data];
    setDecks(newDeckList);
    saveDecks(newDeckList);
    console.log('Handle Close call: ', newDeckList);
    console.log('Handle Close state call: ', decks);
    setContextMenu(null);
  };

  return (
    <>
      <StyledDiv className='card-div'>
        <Link
          to={`/card-details/${data.id}`}
        >
          <div onContextMenu={handleContextMenu} style={{ cursor: 'context-menu' }}>
            <CardImage src={data.normal} />
          </div>
          <br />
        </Link>
        <br />
        <Menu
          open={contextMenu !== null}
          disableScrollLock={true}
          onBlur={() => setContextMenu(null)}
          anchorReference="anchorPosition"
          anchorPosition={
            contextMenu !== null
              ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
              : undefined
          }
        >
          <div className='cardStyleSearch'>
            {decks.map(({ cards }, index) => {
              return <MenuItem onClick={() => { handleClose(data, cards, index); }} key={index}>{`Add to deck #${index + 1}`}</MenuItem>;
            })}
          </div>
        </Menu>

      </StyledDiv>
    </>
  );

};

Card.propTypes = {
  data: PropTypes.object.isRequired
};

export default Card;