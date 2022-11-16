import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CardImage, DetailsBox, TableBody, StyledLinks, TableInfo, BuyInfo, TheadStyle } from '../components/styledComponents';
import Box from '@mui/material/Box';

export default function CardDetails() {
  const { id } = useParams();
  const [cardData, setCardData] = useState({});


  useEffect(() => {
    const fetchCards = async (id) => {
      const response = await fetch(
        `https://api.scryfall.com/cards/${id}`
      );
      const cardFetch = await response.json();
      console.log('use effect call: ', cardFetch);
      return cardFetch;
    };
    fetchCards(id).then((card) => {
      console.log('id check', card);
      setCardData(card);
    });
  }, [id]);

  const { released_at, prices, purchase_uris, image_uris, legalities } = cardData;
  // const { cardhoarder, cardmarket } = purchase_uris;
  // const { commander, modern, pioneer, standard } = legalities;


  //<ScrollImage src='/images/Scroll.jpg' />

  return (
    <Box
      sx={{
        mt: 15,
        ml: 30,
        display: 'inline',
      }}>
      {
        cardData.length === 0 ? <div>Loading</div> : <>


          <CardImage src={image_uris?.normal} />
          <DetailsBox>
            <BuyInfo>{`Date of initial release: ${released_at}`}</BuyInfo>
            <BuyInfo>{`Price: $${prices?.usd}`}</BuyInfo>
            <TableBody>
              <thead>
                <tr>




                </tr>

                <tbody>
                  <tr>
                    <TheadStyle>Pioneer:
                      <TableInfo legal={legalities?.pioneer}>{legalities?.pioneer}</TableInfo>
                    </TheadStyle>
                    <TheadStyle>Commander:
                      <TableInfo legal={legalities?.commander}>{legalities?.commander}</TableInfo>
                    </TheadStyle>
                    <TheadStyle>Modern:
                      <TableInfo legal={legalities?.modern}>{legalities?.modern}</TableInfo></TheadStyle>
                    <TheadStyle>Modern Standard:
                      <TableInfo legal={legalities?.standard}>{legalities?.standard}</TableInfo></TheadStyle>


                  </tr>
                  <BuyInfo>CARDHOARDER:<StyledLinks href={purchase_uris?.cardhoarder}>Buy here</StyledLinks></BuyInfo>
                  <BuyInfo>CARDMARKET:<StyledLinks href={purchase_uris?.cardmarket}>Buy here</StyledLinks></BuyInfo>

                </tbody>

              </thead>

            </TableBody>

          </DetailsBox>

          <div></div>
        </>
      }

    </Box >


  );
}

