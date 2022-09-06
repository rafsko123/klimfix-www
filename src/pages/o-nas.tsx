import React         from "react";
import styled        from "styled-components";
import {Wrapper}     from "../components/layout/Wrapper";

import Watermark    from "../assets/icons/watermark_about.svg";
import WatermarkBottom   from "../assets/icons/watermark_about_bottom.svg";

import ContactBaner from "../sections/about/ContactBaner";
import Content      from "../sections/about/Content";
import Hero         from "../sections/about/hero";


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
`;

const StyledWrapper = styled(Wrapper)`
    max-width: 1200px;
    position: relative;
    z-index: 3;
`;


const About = () => {
  return (
    <Container>
      <StyledWrapper>
        <Hero/>
        <Content/>
        <ContactBaner/>
      </StyledWrapper>
    </Container>
  );
};

export default About;
