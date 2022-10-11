import {ReactNode}         from "react";
import {FunctionComponent} from "react";
import React               from "react";
import styled              from "styled-components";
import ButtonPrimary       from "../buttons/ButtonPrimary";
import {Description}       from "../typography/Description";
import {TitleMd}           from "../typography/TitleMd";


const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 600px;
    border-radius: 5px;
    position: relative;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        min-height: 500px;
        padding-bottom: 60px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        min-height: 400px;
        padding-bottom: 40px;
    }
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

const BackgroundImage = styled.div`
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #003370;
    background-repeat: no-repeat;
    background-position: left bottom;
    background-size: cover;
    background-image: linear-gradient(180deg, rgba(0, 51, 112, 0) 0%, rgba(60, 191, 240, 0.81) 100%);

    .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
    }
`;

const IconBox = styled.div`
    width: 100px;
    height: 100px;
    transform: translateY(-50px);

    img {
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        width: 80px;
        height: 80px;
        transform: translateY(-40px);
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        width: 72px;
        height: 72px;
        transform: translateY(-36px);
    }
`;

const StyledTitleMd = styled(TitleMd)`
    color: ${({theme}) => theme.colors.primary};
    margin: 60px 0;
    text-align: center;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        margin: 30px 0;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        margin: 24px 0;
    }
`;

const StyledDescription = styled(Description)`
    color: #ffffff;
    text-align: center;
    padding: 0 36px 64px 36px;
    font-size: 14px;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        padding: 0 24px 48px 24px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        max-width: 400px;
        width: 100%;
    }
`;

interface Props {
  element: {
    title: any;
    description: string;
    icon: string;
    image: ReactNode;
    slug: string;
    buttonText: string;
  };
}

const ServicesCard: FunctionComponent<Props> = ({element}) => {
  return (
    <Container>
      <BackgroundImage>
        {element.image}
      </BackgroundImage>
      <Wrapper>
        <IconBox>
          <img src={element.icon} alt=""/>
        </IconBox>
        <StyledTitleMd>{element.title}</StyledTitleMd>
        <StyledDescription>
          {element.description}
        </StyledDescription>
        <ButtonPrimary anchor={element.slug}>{element.buttonText}</ButtonPrimary>
      </Wrapper>
    </Container>
  );
};

export default ServicesCard;
