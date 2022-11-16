import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import cardContext from '../context/cardContext';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(20),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '60ch',
      '&:focus': {
        width: '100ch',
      },
    },
  },
}));

const SearchBar = (() => {
  const { setFilterText } = useContext(cardContext);
  const navigate = useNavigate();

  const handleKeyUp = React.useCallback(
    (e) => {
      if (e.charCode === 13 || e.key === 'Enter') {
        navigate('/search');
        console.log('I pressed enter', e.target.value);
        setFilterText({ filter: e.target.value });


      }
      // if (inputProps.onKeyUp) {
      //   inputProps.onKeyUp(e);
      // }
    },
    // [handleRequestSearch, cancelOnEscape, handleCancel, inputProps.onKeyUp]
  );


  return (

    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        onKeyUp={handleKeyUp}
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  );
});

export default SearchBar;