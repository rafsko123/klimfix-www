import React           from "react";
import styled          from "styled-components";
import {TitleSm}       from "../../components/typography/TitleSm";
import {DataPriceList} from "../../data/DataPriceList";


const Container = styled.div`
    margin: 56px 0 72px 0;
`;

const PriceListItem = styled.div`
    &:not(:last-child) {
        margin-bottom: 64px;
    }
`;

const PriceListHeader = styled.div`
    height: 80px;
    position: relative;
    border-radius: 5px;
    display: flex;
    align-items: center;

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
`;

const ImageBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: auto;
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
`;

const HeaderTextWrapper = styled.div`
    position: relative;
    z-index: 3;
    width: 100%;
    height: 100%;
    padding: 0 48px;
    display: flex;
    align-items: center;
`;

const StyledTitleSm = styled(TitleSm)`
    color: ${({theme}) => theme.colors.primary};
    margin-left: 24px;
    font-size: 32px;
`;

const PriceListContent = styled.div`
    padding: 36px 0;
    max-width: 940px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;

const PriceListContentItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid #C6C6C5;
`;

const ServiceBox = styled.div`
    max-width: 700px;
    margin-right: 64px;

    & > * {
        font-family: 'Poppins', sans-serif;
    }
`;

const ServiceTitle = styled.div<{ bolded: boolean }>`
    color: ${(p) => p.bolded ? p.theme.colors.primary : "#003370"};
    font-weight: 600;
`;

const ServiceDescription = styled.div`
    font-size: 12px;
    margin-top: 4px;
`;

const ServicePrice = styled.div`
    font-size: 20px;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
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
          <PriceListItem key={i}>
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
                      <ServiceDescription>{item.description}</ServiceDescription>
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
