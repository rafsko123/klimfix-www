import React from "react";
import styled from "styled-components";
import SkewLeft from "../../assets/icons/skew-left.svg";
import SkewRight from "../../assets/icons/skew-right.svg";
import ButtonPrimary from "../buttons/ButtonPrimary";


const Card = styled.div`
    border: 2px solid #00C9FF;
    border-radius: 20px;
    padding: 48px;
    position: relative;
    background-color: rgba(0, 51, 112, 0.06);
    height: 340px;
    width: 100%;

    &:after,
    &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 3;
        width: 100px;
        height: 100px;
        background-repeat: no-repeat;
    }

    &:before {
        top: -2px;
        right: -2px;
        background-position: top right;
        background-image: url(${ SkewRight });
    }

    &:after {
        bottom: -2px;
        left: -2px;
        background-position: bottom left;
        background-image: url(${ SkewLeft });
    }

    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptop }) {
      height: 300px;
    }
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.tablet }) {
      width: 100%;
      margin-right: 0 !important;
      transform: none !important;
      margin-bottom: 36px;
      min-height: 280px;
      padding: 36px 24px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    z-index: 4;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TextBox = styled.div`
  h3,p,a {
    color: #003370;
  }
  h3 {    
    font-size: 48px;
    line-height: 1.1;
    font-weight: 500;
  }
  p {
    font-size: 20px;
    margin: 30px 0;
  }
  @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptop }) {
    h3 {
        font-size: 40px;
    }
    p {
      font-size: 16px;
      margin: 24px 0;
    }
  }
  @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptop }) {
    h3 {
        font-size: 40px;
    }
    p {
      font-size: 16px;
    }
  }
  @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptopSmall }) {
    h3 {
        font-size: 32px;
    }
  }
  @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.phoneBig }) {
    text-align: center;
    h3 {
      font-size: 24px;
    }
    p {
      font-size: 14px;
    }
  }
`;
const ContactSkew = () => {
  return (
    <Card>
      <Wrapper>
        <TextBox>
          <h3>ZADZWOŃ DO NAS</h3>
          <p>Zarezerwuj wizytę lub dopytaj o szczegóły usługi!</p>
          <ButtonPrimary href="tel:+48534520569">SKONTAKTUJ SIĘ Z NAMI</ButtonPrimary>
        </TextBox>
      </Wrapper>
    </Card>
  );
};

export default ContactSkew;
