import React from "react";
import ButtonPrimary from "../../../components/buttons/ButtonPrimary";
import styled from "styled-components";


const BanerWrapper = styled.div`
  margin-bottom: 100px;
  margin-top: 70px;
  background-color: rgba(0, 51, 112, 0.07);
  padding: 24px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-weight: 500;
    font-size: 36px;
    color: #003370;
    line-height: 1.2;
    display: block;
    text-transform: uppercase;
  }
  a {
    height: 76px;
    width: 256px;
  }
  @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptop }) {
    margin-bottom: 70px;
    margin-top:50px;
    padding: 18px 36px;
    p {
      font-size: 28px;
    }
    a {
      height: 60px;
      width: 230px;
    }
  }
  @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.tabletSmall }) {
    flex-direction: column;
    text-align: center;
    padding: 24px;
    margin-bottom: 48px;
    margin-top: 36px;
    p {
      font-size: 26px;
      margin-bottom: 18px;
    }
  }
`

export const Baner = () => (
  <BanerWrapper>
    <p>Zarezerwuj wizytę<br /> u specjalisty!</p>
    <ButtonPrimary href="tel:+48534520569" title="Zarezerwuj wizytę">
      Zarezerwuj wizytę
    </ButtonPrimary>
  </BanerWrapper>
)