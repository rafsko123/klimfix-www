import {Link}            from "gatsby";
import React             from "react";
import styled            from "styled-components";
import {Wrapper}         from "../../../components/layout/Wrapper";
import {TitleLg}         from "../../../components/typography/TitleLg";
import {TitleSm}         from "../../../components/typography/TitleSm";
import {useArticlesData} from "../../../hooks/articlesData/useArticlesData";

import WatermarkBlogIcon from "../../../assets/icons/watermark_blog.svg";


const Container = styled.div`
    background-color: ${({theme}) => theme.colors.secondary};
    position: relative;

    &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 500px;
        background-image: linear-gradient(180deg, rgba(0, 51, 112, 0) 0%, rgba(60, 191, 240, 0.71) 100%);
        transform: rotate(-180deg);
    }
`;

const StyledWrapper = styled(Wrapper)`
    background-image: url(${WatermarkBlogIcon});
    background-position: 100% -200px;
    background-repeat: no-repeat;
    padding-top: 100px;
    padding-bottom: 20px;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        padding-top: 80px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptopSmall}) {
        padding-top: 60px;
    }
`;

const ArticlesListing = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
`;

const ArticleCardContent = styled.div``;

const ImageBox = styled(Link)`
    display: inline-block;
    width: 100%;
    position: relative;
`;

const Mask = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    font-weight: 500;
    background: linear-gradient(0deg, rgba(0, 201, 255, 0.2) 0%, rgba(0, 0, 0, 0) 100%), rgba(0, 51, 112, 0.57);
    transition: .3s all ease;
    opacity: 0;
    text-transform: uppercase;

    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        font-size: 40px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptopSmall}) {
        font-size: 30px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        display: none;
    }
`;

const ArticleCardTitle = styled(Link)`
    display: inline-block;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    line-height: 1.5;
    font-weight: 500;
    margin-top: 18px;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        margin-top: 18px;
        font-size: 18px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        font-size: 16px;
        margin-top: 12px;
    }
`;

const ArticleCard = styled.div`
    display: flex;
    width: calc(50% - 50px);
    margin-bottom: 80px;

    &:hover {

        ${Mask} {
            opacity: 1;
        }
    }

    &:not(:nth-child(2n)) {
        margin-right: 100px;
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        width: calc(50% - 30px);
        margin-bottom: 60px;

        &:not(:nth-child(2n)) {
            margin-right: 60px;
        }
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptopSmall}) {
        width: calc(50% - 20px);
        margin-bottom: 40px;

        &:not(:nth-child(2n)) {
            margin-right: 40px;
        }
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        width: 100%;
        margin-right: 0 !important;
        margin-bottom: 36px;
    }
`;

const ArticleNumber = styled.div`
    color: #fff;
    font-size: 50px;
    line-height: 1;
    padding: 0 40px 0 0;
    font-weight: 300;
    transform: translateY(-10px);
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        font-size: 40px;
        transform: translateY(-4px);

    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        display: none;
    }
`;


const TextBox = styled.div`
    margin-bottom: 96px;
    position: relative;
    z-index: 2;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        margin-bottom: 64px;
    }
`;

const ArticlesList = () => {
  const data = Object.values(useArticlesData());

  return (
    <Container>
      <StyledWrapper>
        <TextBox>
          <TitleSm isWhite>Blog</TitleSm>
          <TitleLg as="h2" isWhite>
            solidna dawka wiedzy <br/>w artyku??ach
          </TitleLg>
        </TextBox>
        <ArticlesListing>
          {
            data.map((element, i) => (
              <ArticleCard>
                <ArticleNumber>{`0${i + 1}`}</ArticleNumber>
                <ArticleCardContent>
                  <ImageBox to={`/strefa-wiedzy/${element.slug}`}>
                    {element.list}
                    <Mask>Czytaj</Mask>
                  </ImageBox>
                  <ArticleCardTitle to={`/strefa-wiedzy/${element.slug}`}>
                    {element.title}
                  </ArticleCardTitle>
                </ArticleCardContent>
              </ArticleCard>
            ))
          }
        </ArticlesListing>
      </StyledWrapper>
    </Container>
  );
};

export default ArticlesList;
