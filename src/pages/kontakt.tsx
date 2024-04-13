import React from "react";
import styled from "styled-components";
import { Wrapper } from "../components/layout/Wrapper";
import Seo from "../components/Seo";
import { TitleLg } from "../components/typography/TitleLg";
import { TitleSm } from "../components/typography/TitleSm";
import ContactBg from "../assets/images/contact/contact-bg.png";
import MobileBg from "../assets/images/contact/mobile-bg.png";
import Watermark from "../assets/icons/watermark_contact.svg";

const Container = styled.div`
  position: relative;
  background-color: ${ ( { theme } ) => theme.colors.secondary };
  min-height: 635px;
  height: 100vh;
  background-image: url(${ ContactBg });
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptopSmall }) {
  }
  @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.tabletBig }) {
    padding-right: 0;
  }
  @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.phoneBig }) {
    min-height: 0;
    height: auto;
    background-image: url(${ MobileBg });
    background-position: bottom;
    background-size: 100% auto;
    padding-top: 100px;
    padding-bottom: 100px;
  }
`;

const StyledWrapper = styled( Wrapper )`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  position: relative;
  z-index: 3;
  background-image: url(${ Watermark });
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: 50%;
`;

const Column = styled.div`
  width: 50%;
  @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.tablet }) {
    width: 100%;
  }
`;

const TextBox = styled.div`
  max-width: 600px;
`;

const StyledTitleSm = styled( TitleSm )`
  margin-bottom: 18px;
  text-transform: inherit;
  @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptop }) {
    margin-bottom: 12px;
  }
`;

const ContactBox = styled.div`
  margin-top: 64px;
  @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptopBig }) {
    margin-top: 56px;
  }
  @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptop }) {
    margin-top: 36px;
  }
  @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptopSmall }) {
    margin-top: 24px;
  }
`;

const ContactBoxItem = styled.div`
  padding-left: 24px;
  margin-bottom: 52px;
  position: relative;
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 1px;
    background-color: #00C9FF;
  }
  @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptop }) {
    margin-bottom: 36px;
  }
  @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.phoneBig }) {
    padding-left: 16px;
  }
`;

const CBITitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 16px;
  color: #fff;
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.phoneBig }) {
    font-size: 15px;
    margin-bottom: 13px;
  }
`

const CTALine = styled.div`
  font-weight: 300;
  font-size: 15px;
  color: #fff;
  font-family: "Poppins", sans-serif;
  a {
    font-weight: 300;
    display: inline-block;
    transition: .3s color ease;
    &:hover {
      color: #00C9FF;
    }
  }
  &:not(:last-child) {
      margin-bottom: 13px;
  }
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptop }) {
      font-size: 14px;
        &:not(:last-child) {
        margin-bottom: 10px;
    }
      @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.phoneBig }) {
        font-size: 13px;
      }
  }
`

const ContactAddress = styled.div`
  padding-top: 36px;
  display: flex;
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptop }) {
    padding-top: 12px;
  }
  @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.phoneBig }) {
    flex-direction: column;
  }
`

const CAItem = styled.div`
  font-size: 13px;
  color: #fff;
  &:not(:last-child) {
    margin-right: 46px;
  }
  span {
    display: block;
    font-weight: 300;
    b {
      font-weight: 500
    }
  }
  @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.phoneBig }) {
  &:not(:last-child) {
    margin-right: 0;
    margin-bottom: 18px;
  }
  }
`


const Contact = () => {
  return (
    <>
      <Seo
        title="Kontakt"
        description="Oferujemy serwis klimatyzacji samochodowej pielęgnację samochodową, auto detailing oraz car wrapping w Rzeszowie, Łańcucie i Tyczynie"
      />
      <Container>
        <StyledWrapper>
          <Column>
            <TextBox>
              <StyledTitleSm isWhite as="h1">
                Zarezerwuj wizytę już dziś!
              </StyledTitleSm>
              <TitleLg isWhite as="h2">
                SKONTAKTUJ SIĘ Z NAMI
              </TitleLg>
              <ContactBox>
                <ContactBoxItem>
                  <CBITitle>Obsługa klienta Rzeszów i Tyczyn</CBITitle>
                  <div className="cta-wrapper">
                    <CTALine>
                      <a href="tel:+48534520569" title="Telefon kontaktowy do obsługi klienta Rzeszów i Tyczyn">+48 534 520 569</a>
                      &nbsp;&nbsp;/&nbsp;&nbsp;
                      <a href="tel:+48531086370" title="Telefon kontaktowy do obsługi klienta Rzeszów i Tyczyn">+48 531 086 370</a>
                    </CTALine>
                    <CTALine>
                      <a href="mailto:kontakt@klimfix.pl" title="Adres email kontaktowy do obsługi klienta">kontakt@klimfix.pl</a>
                    </CTALine>
                  </div>
                </ContactBoxItem>
                <ContactBoxItem>
                  <CBITitle>Obsługa klienta Łańcut</CBITitle>
                  <div className="cta-wrapper">
                    <CTALine>
                      <a href="tel:+48662646311" title="Telefon kontaktowy do obsługi klienta Łańcut">+48 662 646 311</a>
                    </CTALine>
                    <CTALine>
                      <a href="mailto:kontakt@klimfix.pl" title="Adres email kontaktowy do obsługi klienta">kontakt@klimfix.pl</a>
                    </CTALine>
                  </div>
                </ContactBoxItem>
                <ContactAddress>
                  <CAItem>
                    <span><b>KLIMFIX Sp. z o.o.</b></span>
                    <span>ul. J i J Śniadeckich 20D/7,</span>
                    <span>35-006 Rzeszów</span>
                  </CAItem>
                  <CAItem>
                    <span>NIP: 5170444690</span>
                    <span>REGON: 527812419</span>
                    <span>KRS: 0001088782</span>
                  </CAItem>
                </ContactAddress>
              </ContactBox>
            </TextBox>
          </Column>
        </StyledWrapper>
      </Container>
    </>
  );
};

export default Contact;
