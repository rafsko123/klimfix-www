import React                 from "react";
import styled                from "styled-components";
import {useLocalisationData} from "../../hooks/localisationsData/useLocalisationData";

import PinBigIcon from "../../assets/icons/pin_big.svg";


const LocalisationItemsWrapper = styled.div``;

const LocalisationItem = styled.div`
    margin: 64px 0 72px 0;
    width: 100%;
    height: 340px;
    display: flex;

    &:not(:last-child) {
        margin-bottom: 34px;
    }
`;

const MediaBox   = styled.div`
    width: calc(100% - 330px);
    display: flex;
`;
const AddressBox = styled.div`
    display: flex;
    width: 330px;
    flex-shrink: 0;
    padding-top: 40px;
`;

const IconBox = styled.div`
    width: 50px;
    margin-right: 30px;

    img {
        width: 30px;
        height: 46px;
    }
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const Line = styled.div`
    color: ${({theme}) => theme.colors.secondary};
    font-size: 12px;
    font-weight: 300;
`;

const BoldedLine = styled(Line)`
    font-size: 20px;
    font-weight: 600;
`;

const LineDescription = styled(Line)`
    margin: 8px 0 18px 0;
    font-size: 16px;
`;

const HoursLine = styled(Line)`
    margin: 2px 0;
    font-family: 'Poppins', sans-serif;
    max-width: 140px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const Iframe = styled.iframe`
    width: 50%;
    height: 100%;
    background-color: #E4E7EA;
`;

const ImageBox = styled.div`
    width: 50%;

    .gatsby-image-wrapper {
        height: 100%;
    }
`;

const Localisations = () => {

  const data = useLocalisationData();

  return (
    <LocalisationItemsWrapper>
      {
        data.map((element, i) => (
          <LocalisationItem key={i}>
            <AddressBox>
              <IconBox>
                <img src={PinBigIcon} alt=""/>
              </IconBox>
              <TextBox>
                <BoldedLine>
                  {element.city}
                </BoldedLine>
                <BoldedLine>
                  {element.street}
                </BoldedLine>
                <LineDescription>
                  {element.description}
                </LineDescription>
                <Line>Godziny otwarcia:</Line>
                <HoursLine>
                  <span>{element.days}</span>
                  <span>{element.hours}</span>
                </HoursLine>
                <HoursLine>
                  <span>niedziela</span>
                  <span>nieczynne</span>
                </HoursLine>
              </TextBox>
            </AddressBox>
            <MediaBox>
              <Iframe src={element.iframe} frameBorder="0" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
              <ImageBox>
                {element.image}
              </ImageBox>
            </MediaBox>
          </LocalisationItem>
        ))
      }
    </LocalisationItemsWrapper>
  );
};

export default Localisations;
