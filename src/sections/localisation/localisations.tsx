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

    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        margin: 44px 0 42px 0;
        height: 240px;
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptopSmall}) {
        height: 200px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        height: auto;
        flex-wrap: wrap;
        margin: 36px 0;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        &:not(:last-child) {
            padding-bottom: 48px;
            margin-top: 48px;
            border-bottom: 1px solid #f2f2f2;
        }
    }
`;

const MediaBox = styled.div`
    width: calc(100% - 330px);
    display: flex;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        width: calc(100% - 300px);
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        width: 100%;
        margin-top: 24px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        justify-content: flex-start;
        flex-direction: column;
    }
`;

const AddressBox = styled.div`
    display: flex;
    width: 330px;
    flex-shrink: 0;
    padding-top: 40px;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        width: 300px;
        padding-top: 24px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        padding-top: 0;
        width: 100%;
    }
`;

const IconBox = styled.div`
    width: 50px;
    margin-right: 30px;

    img {
        width: 30px;
        height: 46px;
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        margin-right: 18px;
        width: 40px;
        img {
            width: 24px;
            height: 36px;
        }
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        width: auto;
        img {
            width: 30px;
            height: 40px;
        }
    }
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const Line = styled.div`
    color: ${({theme}) => theme.colors.secondary};
    font-size: 12px;
    font-weight: 400;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
      font-size: 14px;
    }
`;

const BoldedLine = styled(Line)`
    font-size: 20px;
    font-weight: 600;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        font-size: 16px;
        line-height: 1.4;
    }
`;

const LineDescription = styled(Line)`
    margin: 8px 0 18px 0;
    font-size: 16px;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        font-size: 14px;
        margin: 6px 0 12px 0;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        font-size: 14px;
        margin: 4px 0 12px 0;
    }
`;

const HoursLine = styled(Line)`
    margin: 2px 0;
    font-family: 'Poppins', sans-serif;
    max-width: 140px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        margin: 0;
    }
`;

const Iframe = styled.iframe`
    width: 50%;
    height: 100%;
    background-color: #E4E7EA;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        width: 100%;
        height: 240px;
    }

`;

const ImageBox = styled.div`
    width: 50%;

    .gatsby-image-wrapper {
        height: 100%;
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        width: 100%;
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
