import React           from "react";
import styled          from "styled-components";
import {TitleSm}       from "../../components/typography/TitleSm";
import {DataPriceList} from "../../data/DataPriceList";


const Container = styled.div`
    margin: 56px 0 72px 0;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        margin: 48px 0 64px 0;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        margin: 36px 0;
    }
`;

const PriceListItem = styled.div`
    &:not(:last-child) {
        margin-bottom: 64px;
        @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
            margin-bottom: 48px;
        }
    }
`;

const PriceListHeader = styled.div`
    height: 80px;
    position: relative;
    border-radius: 5px;
    display: flex;
    align-items: center;
    overflow: hidden;

    &:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, #002F68 35.42%, rgba(21, 45, 109, 0) 100%);
        z-index: 2;
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        height: 70px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        height: 60px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        height: auto;
        padding: 12px;
    }
`;

const ImageBox = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    text-align: right;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: right;
    }
`;

const IconBox = styled.div`
    width: 44px;
    height: 44px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        width: 36px;
        height: 36px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        width: 32px;
        height: 32px;
        flex-shrink: 0;
    }
`;

const HeaderTextWrapper = styled.div`
    position: relative;
    z-index: 3;
    width: 100%;
    height: 100%;
    padding: 0 48px;
    display: flex;
    align-items: center;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        padding: 0 36px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        padding: 0 24px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        padding: 0 6px;
    }
`;

const StyledTitleSm = styled(TitleSm)`
    color: ${({theme}) => theme.colors.primary};
    margin-left: 24px;
    font-size: 32px;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        font-size: 24px;
        margin-left: 18px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        width: 100%;
        line-height: 1.2;
        margin-left: 18px;
        font-size: 20px;
        padding-right: 24px;
    }
`;

const PriceListContent = styled.div`
    padding: 36px 0;
    max-width: 940px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        padding: 24px 0;
    }
`;

const PriceListContentItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid #C6C6C5;
    position: relative;

`;

const ServiceBox = styled.div`
    max-width: 700px;
    margin-right: 64px;

    & > * {
        font-family: 'Poppins', sans-serif;
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        margin-right: 24px;
    }
`;

const ServiceTitle = styled.div<{ bolded: boolean }>`
    color: ${(p) => p.bolded ? p.theme.colors.primary : "#003370"};
    font-weight: 600;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        padding-right: 48px;
        line-height: 1.2;
    }
`;

const ServiceDescription = styled.div`
    font-size: 12px;
    margin-top: 4px;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        margin-top: 8px;
    }
`;

const ServicePrice = styled.div`
    font-size: 20px;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    white-space: nowrap;
    color: #152D6D;
    text-transform: uppercase;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        font-size: 18px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 16px;
    }
`;

const PriceListDescription = styled.div`
    max-width: 940px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    font-size: 12px;
    line-height: 1.8;
    font-family: 'Poppins', sans-serif;
    color: #152D6D;
`;


const PriceList = () => {
  return (
    <Container>
      {
        DataPriceList.map((element, i) => (
          <PriceListItem key={i} id={element.id}>
            <PriceListHeader>
              <ImageBox>
                <img src={element.image} alt=""/>
              </ImageBox>
              <HeaderTextWrapper>
                <IconBox>
                  <img src={element.icon} alt=""/>
                </IconBox>
                <StyledTitleSm>
                  {element.title}
                </StyledTitleSm>
              </HeaderTextWrapper>
            </PriceListHeader>
            <PriceListContent>
              {
                element.content.map((item, i) => (
                  <PriceListContentItem key={`service_${i}`}>
                    <ServiceBox>
                      <ServiceTitle bolded={item.bolded}>{item.title}</ServiceTitle>
                      {
                        item.description && <ServiceDescription>{item.description}</ServiceDescription>
                      }
                    </ServiceBox>
                    <ServicePrice>{item.price}</ServicePrice>
                  </PriceListContentItem>
                ))
              }
            </PriceListContent>
            <PriceListDescription>
              {element.description}
            </PriceListDescription>
          </PriceListItem>
        ))
      }
    </Container>
  );
};

export default PriceList;
