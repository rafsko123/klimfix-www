import * as React     from "react";
import {Link, HeadFC} from "gatsby";
import styled         from "styled-components";
import ButtonPrimary  from "../components/buttons/ButtonPrimary";
import {TitleLg}      from "../components/typography/TitleLg";
import {TitleMd}      from "../components/typography/TitleMd";
import {TitleSm}      from "../components/typography/TitleSm";


const pageStyles    = {
  color:      "#232129",
  padding:    "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop:    0,
  marginBottom: 64,
  maxWidth:     320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles      = {
  color:           "#8A6534",
  padding:         4,
  backgroundColor: "#FFF4DB",
  fontSize:        "1.25rem",
  borderRadius:    4,
};

const Container = styled.div`
    min-height: 100vh;
    max-width: 100vw;
    width: 100%;
    background-color: ${({theme}) => theme.colors.secondary};
    padding: 80px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
`;

const Code = styled.div`
    font-size: 180px;
    font-family: "Poppins", sans-serif;
    font-weight: 800;
    color: ${({theme}) => theme.colors.primary};
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        font-size: 120px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        font-size: 100px;
    }
`;

const StyledTitleLg = styled.div`
    font-size: 24px;
    margin: 0 0 36px 0;
    color: #fff;
    text-transform: inherit;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        font-size: 20px
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        font-size: 18px;
    }
`;

const NotFoundPage = () => {
  return (
    <Container>
      <Code>404</Code>
      <StyledTitleLg>Strona której szukasz nie istnieje!</StyledTitleLg>
      <ButtonPrimary to="/">Strona głowna</ButtonPrimary>
    </Container>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
