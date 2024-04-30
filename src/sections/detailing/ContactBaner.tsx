import React from "react";
import styled from "styled-components";
import { Wrapper } from "../../components/layout/Wrapper";
import ContactSkew from "../../components/detailing/ContactSkew";
import { Link } from "gatsby";

const StyledWrapper = styled( Wrapper )`
  margin-top: 200px;
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptop }) {
    margin-top: 100px;
  }
  @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.tablet }) {
    flex-direction: column;
    align-items: flex-start;
    max-width: 600px;
    width: 100%;
    padding-left: 0;
    padding-right: 0;
    margin-bottom: 48px;
  }
  @media screen and (max-width: 648px) {
    padding-left: 24px;
    padding-right: 24px;
    margin-top: 48px;
    margin-bottom: 12px;
  }
`

const Column = styled.div`
  width: 50%;
  @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.tablet }) {
    width: 100%;
  }
`

const Text = styled.div`
  max-width: 560px;
  color: #003370;
  h3 {
    font-size: 48px;
    font-weight: 500;
    line-height: 1.2;
    text-transform: uppercase
  }
  p {
    font-size: 20px;
    display: block;
    margin: 24px 0;
  }
  a {
    text-transform: uppercase;
    display: inline-flex;
    align-items: center;
    border-bottom: 2px solid #003370;
    transition: .3s all ease;
    padding-bottom: 8px;
    span {
      display: inline-block;
      margin-right: 18px;
    }
    &:hover {
      color: #00C9FF;
      border-color: #00C9FF;
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
  @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.tablet }) {
    max-width: 600px;
    width: 100%;
    margin-bottom: 48px;
  }
  @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.phoneBig }) {
    h3 {
      font-size: 24px;
    }
    p {
      font-size: 14px;
    }
  }
`

const Contact = () => {
  return (
    <StyledWrapper>
      <Column>
        <Text>
          <h3>Sprawdź<br /> Wszystkie usługi</h3>
          <p>Zobacz wszystko co możemy dla Ciebie zrobić.<br />Stale poszerzamy swoją ofertę i osiągamy perfekcję.</p>
          <Link to="/uslugi-i-cennik" title="Sprawdź wszsytkie usługi Klimfix">
            <span>SPRAWDŹ Wszystkie usługi</span>
            <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.67584 9.75L12.7499 5.5L8.67584 1.25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M1.75006 5.5L11.9352 5.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
          </Link>
        </Text>
      </Column>
      <Column>
        <ContactSkew />
      </Column>
    </StyledWrapper>
  );
};


export default Contact;