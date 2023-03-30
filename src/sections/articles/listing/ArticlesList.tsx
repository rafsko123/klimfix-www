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

const ImageBox = styled(Link)`
    display: inline-block;
    width: 100%;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid transparent;
    transition: .3s border ease;
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
    font-size: 26px;
    font-weight: 500;
    background: linear-gradient(0deg, rgba(0, 201, 255, 0.3) 0%, rgba(0, 0, 0, 0) 100%), rgba(0, 51, 112, 0.57);
    transition: .3s all ease;
    opacity: 0;
    text-transform: uppercase;

    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        font-size: 20px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptopSmall}) {
        font-size: 18px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        display: none;
    }
`;

const ArticleCardTitle = styled(Link)`
    display: inline-block;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 500;
    margin-top: 16px;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        margin-top: 14px;
        font-size: 14px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        margin-top: 12px;
    }
`;

const ArticleCard = styled.div`
    width: calc(33.33% - 36px);
    margin-bottom: 80px;

    &:hover {
        ${ImageBox} {
            border-color: rgba(0, 201, 255, 1);
        }

        ${Mask} {
            opacity: 1;
        }
    }

    &:not(:nth-child(3n)) {
        margin-right: 54px;
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        width: calc(33.33% - 24px);
        margin-bottom: 60px;

        &:not(:nth-child(3n)) {
            margin-right: 36px;
        }
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptopSmall}) {
        width: calc(50% - 16px);
        margin-bottom: 40px;

        &:not(:nth-child(3n)) {
            margin-right: 0;
        }

        &:not(:nth-child(2n)) {
            margin-right: 32px;
        }
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        width: 100%;
        margin-right: 0 !important;
        margin-bottom: 36px;
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
          <TitleSm isWhite as="h2">Blog</TitleSm>
          <TitleLg as="h3" isWhite>
            solidna dawka wiedzy <br/>w artykułach
          </TitleLg>
        </TextBox>
        <ArticlesListing>
          {
            data.map((element, index) => (
              <ArticleCard key={index}>
                <ImageBox to={element.slug} title={element.title}>
                  {element.list}
                  <Mask>Czytaj</Mask>
                </ImageBox>
                <ArticleCardTitle to={element.slug} title={element.title}>
                  {element.title}
                </ArticleCardTitle>
              </ArticleCard>
            ))
          }
        </ArticlesListing>
      </StyledWrapper>
    </Container>
  );
};

export default ArticlesList;
