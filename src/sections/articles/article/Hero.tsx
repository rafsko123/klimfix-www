import {FunctionComponent} from "react";
import {ReactNode}         from "react";
import React               from "react";
import styled              from "styled-components";
import {Wrapper}           from "../../../components/layout/Wrapper";
import {TitleLg}           from "../../../components/typography/TitleLg";


const Container = styled.div`
    position: relative;
    background: linear-gradient(360deg, rgba(0, 201, 255, 0.39) 0%, rgba(0, 51, 112, 0) 100%), linear-gradient(0deg, rgba(0, 45, 112, 0.85), rgba(0, 45, 112, 0.85));
    text-align: center;
`;

const StyledWrapper = styled(Wrapper)`
    max-width: 1000px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        max-width: 800px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        max-width: 700px;
    }
`;

const ImageBox = styled.div`
    width: 100%;
    height: 700px;
    position: relative;

    &:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        background-color: rgba(0, 45, 112, 0.75);
        background-image: linear-gradient(360deg, rgba(0, 201, 255, 0.39) 0%, rgba(0, 51, 112, 0) 100%), linear-gradient(0deg, rgba(0, 45, 112, 0.25), rgba(0, 45, 112, 0.85));

    }

    .gatsby-image-wrapper {
        height: 100%;
        width: 100%;
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        height: 500px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        height: 300px;
    }
`;

interface Props {
  image: ReactNode;
  title: string;
}

const Hero: FunctionComponent<Props> = ({image, title}) => {
  return (
    <Container>
      <ImageBox>
        {image}
      </ImageBox>
      <StyledWrapper>
        <TitleLg as="h1" isWhite>
          {title}
        </TitleLg>
      </StyledWrapper>
    </Container>
  );
};

export default Hero;
