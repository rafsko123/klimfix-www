import React        from "react";
import styled       from "styled-components";
import {Wrapper}    from "../components/layout/Wrapper";
import Seo          from "../components/Seo";
import ContactBaner from "../sections/about/ContactBaner";
import Content      from "../sections/about/Content";
import Hero         from "../sections/about/Hero";

import Watermark       from "../assets/icons/watermark_about.svg";
import WatermarkBottom from "../assets/icons/watermark_about_bottom.svg";


const Container = styled.div`
    background-color: ${({theme}) => theme.colors.secondary};
    background-image: url(${Watermark}), url(${WatermarkBottom});
    background-repeat: no-repeat;
    background-position: 50% 0, 50% 100%;
    background-size: 850px 400px;
    padding: 240px 0 160px 0;
    position: relative;

    &:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 400px;
        background: linear-gradient(180deg, rgba(0, 51, 112, 0) 0%, rgba(60, 191, 240, 0.51) 100%);
        transform: rotate(-180deg);
    }

    &:after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 430px;
        background: linear-gradient(180deg, rgba(0, 51, 112, 0) 0%, rgba(60, 191, 240, 0.41) 100%);
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        background-size: 550px 350px;
        padding: 200px 0 100px 0;
        &:before {
            height: 300px;
        }

        &:after {
            height: 330px;
        }
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        background-size: 450px 240px;
        padding: 120px 0 100px 0;
    }
`;

const StyledWrapper = styled(Wrapper)`
    max-width: 1200px;
    position: relative;
    z-index: 3;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptopSmall}) {
        max-width: 1000px;
    }
`;


const About = () => {
  return (
    <>
      <Seo title="O nas" description="Jesteśmy polską firmą motoryzacyjną działającą na terenie Podkarpacia. Nasza siedziba znajduje się w Rzeszowie."/>
      <Container>
        <StyledWrapper>
          <Hero/>
        </StyledWrapper>
        <Content/>
        <StyledWrapper>
          <ContactBaner/>
        </StyledWrapper>
      </Container>
    </>
  );
};

export default About;
