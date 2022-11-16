import React from 'react';
import styled from 'styled-components';
import { Timeline } from 'react-twitter-widgets';


const GridDiv = styled.div`
  display: flex;
  width: 80%;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
  margins: auto;
  padding: 25px;
  margin-left: 220px;
`;

// const H1 = styled.div`
//   text-align: center;
//   content-align:center;
//   color: black;
//   margin:auto;
//   border-raidus: 25px;
//   font-size: 60px;
//   inline-size: min-content;

// `;

const GridPadding = styled.div`
padding: 10px;
`;

const HomePage = () => {
  return (
    <>
      <GridDiv>
        <GridPadding>
          <Timeline
            dataSource={{
              sourceType: 'profile',
              screenName: 'playMTG'
            }}
            options={{
              height: '400px',
              width: 'auto',
              theme: 'dark',
            }}

          />
        </GridPadding>
        <GridPadding>
          <Timeline
            dataSource={{
              sourceType: 'profile',
              screenName: 'MTG_Arena'
            }}
            options={{
              height: '400px',
              width: 'auto',
              theme: 'dark',
            }}
          />
        </GridPadding>
        <GridPadding>

          <Timeline
            dataSource={{
              sourceType: 'profile',
              screenName: 'MTGSecretLair'
            }}
            options={{
              height: '400px',
              width: 'auto',
              theme: 'dark',
            }}
          />
        </GridPadding>
        <GridPadding>
          <Timeline
            dataSource={{
              sourceType: 'profile',
              screenName: 'wizards_magic'
            }}
            options={{
              height: '400px',
              width: 'auto',
              theme: 'dark',
            }}
          />
        </GridPadding>
      </GridDiv>

    </>
  );
};

export default HomePage;