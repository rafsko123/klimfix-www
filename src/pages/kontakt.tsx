import React from "react";
import styled from "styled-components";
import { Wrapper } from "../components/layout/Wrapper";
import Seo from "../components/Seo";
import { TitleLg } from "../components/typography/TitleLg";
import { TitleSm } from "../components/typography/TitleSm";

import PhoneIcon from "../assets/icons/phone.svg";
import EnvelopeIcon from "../assets/icons/envelope.svg";
import ContactBg from "../assets/images/contact/contact-bg.png";
import MobileBg from "../assets/images/contact/mobile-bg.png";
import Watermark from "../assets/icons/watermark_contact.svg";

const Container = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.secondary};
  min-height: 635px;
  height: 100vh;
  background-image: url(${ContactBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.laptopSmall}) {
    height: 600px;
    min-height: 0;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tabletBig}) {
    min-height: 320px;
    padding-right: 0;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.phoneBig}) {
    background-image: url(${MobileBg});
    background-position: bottom;
    background-size: 100% auto;
  }
`;

const StyledWrapper = styled(Wrapper)`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  position: relative;
  z-index: 3;
  background-image: url(${Watermark});
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: 50%;
`;

const Column = styled.div`
  width: 50%;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

const TextBox = styled.div`
  max-width: 500px;
  padding-left: 100px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tabletBig}) {
    padding-left: 56px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-left: 0;
  }
`;

const StyledTitleSm = styled(TitleSm)`
  margin-bottom: 18px;
  text-transform: inherit;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    margin-bottom: 12px;
  }
`;

const ContactBox = styled.div`
  margin-top: 64px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptopBig}) {
    margin-top: 56px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    margin-top: 36px;
  }
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.laptopSmall}) {
    margin-top: 24px;
  }
`;

const ContactBoxItem = styled.div`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 36px;
    @media screen and (max-width: ${({ theme }) =>
        theme.breakpoints.laptopBig}) {
      margin-bottom: 24px;
    }
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
      margin-bottom: 18px;
    }
  }
`;

const ContactBoxIcon = styled.div`
  flex-shrink: 0;
  margin-right: 42px;
  padding-top: 4px;

  img {
    width: 42px;
    height: 42px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptopBig}) {
    margin-right: 36px;
    img {
      width: 36px;
      height: 36px;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    margin-right: 24px;
    img {
      width: 24px;
      height: 24px;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    img {
      width: 20px;
      height: 20px;
    }
  }
`;

const ContactBoxDetail = styled.div``;

const ContactBoxLink = styled.a`
  color: #fff;
  font-size: 32px;
  font-weight: 300;
  font-family: "Poppins", sans-serif;
  display: inline-block;
  transition: 0.3s color ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptopBig}) {
    font-size: 24px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: 18px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 14px;
  }
`;

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
                Masz pytania?
              </StyledTitleSm>
              <TitleLg isWhite as="h2">
                SKONTAKTUJ SIĘ <br />Z NAMI
              </TitleLg>
              <ContactBox>
                <ContactBoxItem>
                  <ContactBoxIcon>
                    <img src={PhoneIcon} alt="" />
                  </ContactBoxIcon>
                  <ContactBoxDetail>
                    <ContactBoxLink
                      href="tel:+48534520569"
                      title="Telefon kontaktowy"
                    >
                      +48 534 520 569
                    </ContactBoxLink>
                    <br />
                    <ContactBoxLink
                      href="tel:+48531086370"
                      title="Telefon kontaktowy"
                    >
                      +48 531 086 370
                    </ContactBoxLink>
                  </ContactBoxDetail>
                </ContactBoxItem>
                <ContactBoxItem>
                  <ContactBoxIcon>
                    <img src={EnvelopeIcon} alt="" />
                  </ContactBoxIcon>
                  <ContactBoxDetail>
                    <ContactBoxLink
                      href="mailto:kontakt@klimfix.pl"
                      title="Adres email - klimfix"
                    >
                      kontakt@klimfix.pl
                    </ContactBoxLink>
                  </ContactBoxDetail>
                </ContactBoxItem>
              </ContactBox>
            </TextBox>
          </Column>
        </StyledWrapper>
      </Container>
    </>
  );
};

export default Contact;
