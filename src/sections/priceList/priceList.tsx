import React           from "react";
import styled          from "styled-components";
import {TitleSm}       from "../../components/typography/TitleSm";
import {DataPriceList} from "../../data/DataPriceList";
import SkewLeft        from "../../assets/icons/skew-left-small.svg";
import SkewRight       from "../../assets/icons/skew-right-small.svg";


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
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
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
    color: #152D6D;

    b {
        font-weight: 600;
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        margin-top: 8px;
        font-size: 14px;
    }
`;

const ServicePrice = styled.div`
    font-size: 16px;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    white-space: nowrap;
    color: #152D6D;
    text-transform: uppercase;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        font-size: 18px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        margin-top: 18px;
        font-size: 16px;
    }
`;

const ProductListCategory = styled.div`
    &:not(:last-child) {
        margin-bottom: 50px;
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        &:not(:last-child) {
            margin-bottom: 36px;
        }
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        &:not(:last-child) {
            margin-bottom: 24px;
        }
    }
`;

const PriceListCategoryTitle = styled.h3`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.4;
    color: #00C9FF;
    margin-bottom: 48px;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        margin-bottom: 36px;
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

    ul {
        li {
            position: relative;
            padding-left: 10px;

            &:not(:last-child) {
                margin-bottom: 4px;
            }

            &:before {
                content: ""; /* FontAwesome Unicode */
                display: inline-block;
                width: 3px;
                height: 3px;
                border-radius: 50%;
                background-color: #152D6D;
                position: absolute;
                left: 0;
                top: 9px;
            }
        }
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        font-size: 14px;
    }
`;

const Baner = styled.div`
    max-width: 940px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    border: 2px solid #00C9FF;
    background: rgba(0, 51, 112, 0.06);
    padding: 24px 32px;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.4;
    text-align: center;
    color: #003370;
    border-radius: 10px;
    position: relative;

    &:after, &:before {
        content: '';
        display: block;
        position: absolute;
        width: 42px;
        height: 30px;
        background-repeat: no-repeat;
        background-size: 100%;
    }

    &:before {
        bottom: -2px;
        left: -2px;
        background-image: url(${SkewLeft});
        background-position: bottom left;
    }

    &:after {
        top: -2px;
        right: -2px;
        background-image: url(${SkewRight});
        background-position: right top;
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        font-size: 14px;
    }
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
                  <ProductListCategory key={`service_${i}`}>
                    {item.title && <PriceListCategoryTitle>{item.title}</PriceListCategoryTitle>}
                    {
                      item.list.map((list, index) => (
                        <PriceListContentItem key={`list_${index}`}>
                          <ServiceBox>
                            <ServiceTitle bolded={list.bolded}>{list.title}</ServiceTitle>
                            {
                              list.description && <ServiceDescription>{list.description}</ServiceDescription>
                            }
                          </ServiceBox>
                          <ServicePrice>{list.price}</ServicePrice>
                        </PriceListContentItem>
                      ))
                    }
                    {item.description && (
                      <PriceListDescription>
                        {item.description}
                      </PriceListDescription>
                    )}
                  </ProductListCategory>
                ))
              }
            </PriceListContent>
          </PriceListItem>
        ))
      }

      <Baner>
        Podane ceny sa cenami netto, jednak u nas VAT wynosi 0%, więc netto=brutto.
      </Baner>

    </Container>
  );
};

export default PriceList;
