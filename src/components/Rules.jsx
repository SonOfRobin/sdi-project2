import './Main.css';
import React from 'react';
import styled from 'styled-components';


const GridDiv = styled.div`
//   display: flex;
  width: 100%;
  flex-wrap: wrap;
//   justify-content: space-around;
  text-align: center;
  content-align:center;
  color: white;
  background-color: gray;
  border-radius: 25px;
  inline-size:min-content;
  margin:auto;
  margin-left: 760px;
`;

const Rules = () => {

  return (
    <>


      <GridDiv>
        <h1>
          Learn how to play Magic: The Gathering in as little as 15 minutes! {'\n \n \n \n \n '}
        </h1>
        <h2><iframe width="560" height="315" src="https://www.youtube.com/embed/wif9ppH5JpI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></h2>
        <h3>For additional rules and more information, visit the official Magic: The Gathering Rules Page:
          <a href='https://magic.wizards.com/en/how-to-play'>
            Click Here!
          </a>
        </h3>

      </GridDiv>

    </>
  );

};

export default Rules;