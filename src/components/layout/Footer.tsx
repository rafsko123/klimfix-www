import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { DataSocials } from "../../data/DataSocials";
import { TitleSm } from "../typography/TitleSm";
import { Wrapper } from "./Wrapper";
import { css } from "styled-components";

import PhoneIcon from "../../assets/icons/phone.svg";
import EnvelopeIcon from "../../assets/icons/envelope.svg";
import PinIcon from "../../assets/icons/pin.svg";
import LogoIcon from "../../assets/icons/logo_footer.svg";
import { useServicesData } from "../../hooks/servicesData/useServicesData";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Container = styled.div`
    background-color: ${ ( { theme } ) => theme.colors.secondary };
    padding: 64px 0 0 0;
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptop }) {
        padding: 56px 0 0 0;
    }
`;

const StyledWrapper = styled( Wrapper )`
  padding-bottom: 48px;
`;

const ColumnWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.tabletBig }) {
        flex-direction: column;
        justify-content: flex-start;
    }
`;

const Column = styled.div<{ padding?: boolean }>`
    display: flex;
    position: relative;

    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.tabletBig }) {
        width: 100%;
        justify-content: space-between;
    }
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.tablet }) {
        flex-direction: column;
        padding-bottom: ${ props => props.padding ? '130px' : 0 };
    }
`;

const StyledTitleSm = styled( TitleSm )`
    color: #fff;
    font-size: 36px;
    margin-bottom: 56px;
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptop }) {
        font-size: 28px;
        margin-bottom: 48px;
    }
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.tabletBig }) {
        font-size: 20px;
    }
`;

const ListItem = styled.div`
    color: white;

    &:not(:last-child) {
        margin-right: 48px;
    }

    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptop }) {
        &:not(:last-child) {
            margin-right: 36px;
        }
    }
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.tablet }) {
        &:not(:last-child) {
            margin-right: 0;
            margin-bottom: 36px;
        }
    }
`;

const LogoBox = styled.div`
    img {
        width: 300px;
        @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptop }) {
            width: 200px;
        }
        @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.tabletBig }) {
            width: 140px;
        }
    }

    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.tablet }) {
        padding: 48px 0;
        width: 100%;
    }
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.phoneBig }) {
        text-align: center;
    }
`;

const TitleList = styled.h4`
    color: white;
    font-size: ${ ( { theme } ) => theme.fonts.desktop.sm };
    font-weight: 600;
    margin-bottom: 20px;
    font-family: 'Poppins', sans-serif;
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptop }) {
        font-size: 16px;
    }
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.tabletBig }) {
        font-size: 18px;
    }
`;

const ListContent = styled.div<{ column?: boolean }>`
    display: flex;
    flex-direction: ${ props => props.column ? 'column' : 'row' };
`;

const ListIcon = styled.div`
    img {
        height: 22px;
        width: 22px;
        margin-top: 2px;
        @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptop }) {
            width: 18px;
            height: 18px;
        }
        @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.tabletBig }) {
            width: 24px;
            height: 24px;
        }
    }
`;

const ListLine = styled.div< { left?: boolean }>`
    padding-left: ${ props => props.left ? 0 : '24px' };
    a {
      display: inline-block;
    }
    span {
      line-height: 1;
    }
    &.custom-line {
        .custom-box {
            display: block;
            margin-bottom: 6px;
            transition: .3s color ease;

            &:hover {
                color: #00C9FF;
            }
        }
    }

    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptop }) {
        padding-left: 18px;
    }
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.tabletBig }) {
        padding-left: 12px;
    }
`;

const defaultListStyle = css`
    display: inline-block;
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    font-weight: 300;
    margin-bottom: 4px;
    transition: .3s color ease;

    &:hover {
        color: #00C9FF;
    }

    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptop }) {
        font-size: 14px;
    }

    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.tabletBig }) {
        font-size: 16px;
    }
`;

const ListLink = styled.a`
  ${ defaultListStyle };
`;

const StyledAnchorLink = styled( AnchorLink )`
  ${ defaultListStyle };
`

const ListSpan = styled.span`
    display: inline-block;
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    font-weight: 300;
    margin-bottom: 4px;

    b {
        font-weight: 600;
    }

    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptop }) {
        font-size: 14px;
    }

    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.tabletBig }) {
        font-size: 16px;
    }
`;

const FooterBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 36px;
    margin-top: 72px;
    border-top: 1px solid rgba(255, 255, 255, 0.3);

    & > * {
        font-family: 'Poppins', sans-serif;
    }

    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptop }) {
        padding-top: 36px;
        margin-top: 64px;
    }
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.phoneBig }) {
        flex-direction: column;
        margin-top: 0;
    }
`;

const CopyRights = styled.div`
    color: rgba(255, 255, 255, 0.3);
    margin-right: 48px;
    font-weight: 300;
    display: inline;
    font-size: 14px;
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptop }) {
        margin-right: 36px;
        font-size: 12px;
    }
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.phoneBig }) {
        margin: 4px 0 4px 0;
        font-size: 14px;
    }
`;

const FooterBox = styled.div`
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.phoneBig }) {
        display: flex;
        flex-direction: column;
        text-align: center;
        margin: 4px 0;
    }
`;

const StyledLink = styled( Link )`
    color: rgba(255, 255, 255, 0.3);
    font-weight: 300;
    font-size: 14px;
    display: inline-block;
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptop }) {
        font-size: 12px;
    }
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.phoneBig }) {
        font-size: 14px;
    }

    &:hover {
        text-decoration: underline !important;
    }
`;

const Realization = styled( Link )`
    display: inline-block;
    color: rgba(255, 255, 255, 0.3);
    font-weight: 300;
    font-size: 14px;
    transition: .3s color ease;

    &:hover {
        color: ${ ( { theme } ) => theme.colors.primary };
    }

    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptop }) {
        font-size: 12px;
    }
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.phoneBig }) {
        font-size: 14px;
    }
`;

const SocialsBox = styled.div`
    margin-top: 36px;
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.tablet }) {
      position: absolute;
      bottom: 0;
      left: 0;
    }
`

const SocialsIcons = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    svg {
      width: 30px;
      height: 30px;
    }
    &:hover {
      color: ${ ( { theme } ) => theme.colors.primary };
      transition: .3s color ease;
    }
    &:not(:last-child) {
      margin-right: 20px;
    }
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.phoneBig }) {
      svg {
        width: 36px;
        height: 36px;
      }
    }
`

const FooterKeyWords = styled.div`
  background-color: #00152F;
  padding-top: 24px;
  padding-bottom: 16px;
  @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.tabletBig }) {
    display: none;
  }
`

const FKWWrapper = styled( Wrapper )`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  span {
    display: inline-block;
    color: #4D546E;
    font-size: 15px;
    font-weight: 300;
    position: relative;
    margin-bottom: 8px;
    &:not(:last-child) {
      padding-right: 16px;
      margin-right: 16px;
      &:after {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        width: 1px;
        height: 9px;
        background-color: #4D546E;
      }
    }
  }
  @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptop }) {
    span {
      font-size: 13px;
      &:not(:last-child) {
        padding-right: 12px;
        margin-right: 12px;
        &:after {
          content: '';
          width: 1px;
          height: 7px;
        }
      }
    }
  }
`

const Footer = () => {
  const services = useServicesData();

  const footer_key_words = [
    "Serwis klimatyzacji samochodowej Rzeszów",
    "Serwis klimatyzacji samochodowej Łańcut",
    "Serwis klimatyzacji samochodowej Tyczyn",
    "Auto Detailing Rzeszów",
    "Car Wrapping Rzeszów",
    "Ozonowanie Rzeszów",
    "Ozonowanie Tyczyn",
    "Ozonowanie Łańcut",
    "Pranie tapicerki Rzeszów",
    "Pranie tapicerki Łańcut",
  ]

  return (
    <Container>
      <StyledWrapper>
        <StyledTitleSm isWhite as="h3">ZADBAJ O SWÓJ KOMFORT JAZDY!</StyledTitleSm>
        <ColumnWrapper>
          <Column padding>
            <ListItem>
              <TitleList>Dane kontaktowe</TitleList>
              <ListContent>
                <ListIcon>
                  <img src={PhoneIcon} alt="" />
                </ListIcon>
                <ListLine>
                  <ListLink href="tel:+48534520569" title="Telefon kontaktowy KLIMFIX">+48 534 520 569</ListLink><br />
                  <ListLink href="tel:+48531086370" title="Telefon kontaktowy KLIMFIX">+48 531 086 370</ListLink>
                </ListLine>
              </ListContent>
              <br />
              <ListContent>
                <ListIcon>
                  <img src={EnvelopeIcon} alt="" />
                </ListIcon>
                <ListLine>
                  <ListLink href="mailto:kontakt@klimfix.pl" title="Kontaktowy adres email">kontakt@klimfix.pl</ListLink><br />
                </ListLine>
              </ListContent>
              <SocialsBox>
                <TitleList>Social Media</TitleList>
                <SocialsIcons>
                  <SocialIcon>
                    <ListLink href={DataSocials.facebook} title="Klimfix - facebook" target="_blank" rel="noopener">
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M30 6.59416V24.8483C30 26.2146 29.4588 27.525 28.4954 28.4911C27.532 29.4572 26.2254 30 24.863 30H6.62677C6.17487 30.0004 5.72737 29.911 5.31005 29.7371C4.89274 29.5632 4.51384 29.3082 4.19525 28.9868L1.01035 25.7928C0.687802 25.4712 0.432338 25.0885 0.258881 24.6669C0.0854247 24.2453 -0.00256979 23.7932 5.7127e-05 23.3371V5.15169C5.7127e-05 3.78538 0.541269 2.47502 1.50464 1.50889C2.46801 0.542766 3.77462 1.07831e-06 5.13703 1.07831e-06H23.3391C23.791 -0.000358028 24.2385 0.0889799 24.6558 0.262868C25.0731 0.436756 25.452 0.691756 25.7706 1.01317L28.9555 4.20721C29.6029 4.83429 29.9781 5.69177 30 6.59416Z"
                          fill="currentColor" />
                        <path
                          d="M16.4058 29.9998V19.8898H19.7821L20.284 15.9314H16.4058V13.4101C16.4058 12.2678 16.7209 11.4858 18.3437 11.4858H20.4V7.95667C19.3995 7.84836 18.3938 7.79606 17.3876 7.80001C14.4033 7.80001 12.3543 9.64044 12.3543 13.0191V15.924H9V19.8824H12.3616V29.9998H16.4058Z"
                          fill="#003370" />
                      </svg>
                    </ListLink>
                  </SocialIcon>
                  <SocialIcon>
                    <ListLink href={DataSocials.instagram} title="Klimfix - instagram" target="_blank" rel="noopener">
                      <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M30.3999 6.59416V24.8483C30.3999 26.2146 29.8587 27.525 28.8953 28.4911C27.9319 29.4572 26.6253 30 25.2629 30H7.02668C6.57477 30.0004 6.12727 29.911 5.70995 29.7371C5.29264 29.5632 4.91374 29.3082 4.59515 28.9868L1.41025 25.7928C1.0877 25.4712 0.83224 25.0885 0.658784 24.6669C0.485327 24.2453 0.397333 23.7932 0.399959 23.3371V5.15169C0.399959 3.78538 0.941171 2.47502 1.90454 1.50889C2.86791 0.542766 4.17452 1.07831e-06 5.53693 1.07831e-06H23.739C24.1909 -0.000358028 24.6384 0.0889799 25.0557 0.262868C25.473 0.436756 25.8519 0.691756 26.1705 1.01317L29.3554 4.20721C30.0028 4.83429 30.378 5.69177 30.3999 6.59416Z"
                          fill="currentColor" />
                        <mask id="path-2-inside-1_2939_2076" fill="currentColor">
                          <path
                            d="M14.8323 7.21631C12.5357 7.21631 10.3331 8.12864 8.70915 9.75261C7.08519 11.3766 6.17285 13.5791 6.17285 15.8758C6.17285 18.1724 7.08519 20.375 8.70915 21.9989C10.3331 23.6229 12.5357 24.5352 14.8323 24.5352C17.1289 24.5352 19.3315 23.6229 20.9555 21.9989C22.5794 20.375 23.4918 18.1724 23.4918 15.8758C23.4918 13.5791 22.5794 11.3766 20.9555 9.75261C19.3315 8.12864 17.1289 7.21631 14.8323 7.21631ZM14.8323 21.4995C13.3403 21.4995 11.9094 20.9068 10.8544 19.8518C9.79936 18.7968 9.20666 17.3659 9.20666 15.8739C9.20666 14.3819 9.79936 12.951 10.8544 11.896C11.9094 10.8409 13.3403 10.2482 14.8323 10.2482C16.3243 10.2482 17.7552 10.8409 18.8102 11.896C19.8653 12.951 20.458 14.3819 20.458 15.8739C20.458 17.3659 19.8653 18.7968 18.8102 19.8518C17.7552 20.9068 16.3243 21.4995 14.8323 21.4995Z" />
                        </mask>
                        <path
                          d="M14.8323 7.21631C12.5357 7.21631 10.3331 8.12864 8.70915 9.75261C7.08519 11.3766 6.17285 13.5791 6.17285 15.8758C6.17285 18.1724 7.08519 20.375 8.70915 21.9989C10.3331 23.6229 12.5357 24.5352 14.8323 24.5352C17.1289 24.5352 19.3315 23.6229 20.9555 21.9989C22.5794 20.375 23.4918 18.1724 23.4918 15.8758C23.4918 13.5791 22.5794 11.3766 20.9555 9.75261C19.3315 8.12864 17.1289 7.21631 14.8323 7.21631ZM14.8323 21.4995C13.3403 21.4995 11.9094 20.9068 10.8544 19.8518C9.79936 18.7968 9.20666 17.3659 9.20666 15.8739C9.20666 14.3819 9.79936 12.951 10.8544 11.896C11.9094 10.8409 13.3403 10.2482 14.8323 10.2482C16.3243 10.2482 17.7552 10.8409 18.8102 11.896C19.8653 12.951 20.458 14.3819 20.458 15.8739C20.458 17.3659 19.8653 18.7968 18.8102 19.8518C17.7552 20.9068 16.3243 21.4995 14.8323 21.4995Z"
                          fill="#003370" />
                        <path
                          d="M14.8323 7.21631V3.21631V7.21631ZM6.17285 15.8758H2.17285H6.17285ZM14.8323 24.5352V20.5352V24.5352ZM14.8323 21.4995V17.4995V21.4995ZM14.8323 3.21631C11.4748 3.21631 8.25483 4.55007 5.88072 6.92418L11.5376 12.581C12.4114 11.7072 13.5965 11.2163 14.8323 11.2163V3.21631ZM5.88072 6.92418C3.50661 9.29829 2.17285 12.5183 2.17285 15.8758H10.1729C10.1729 14.64 10.6638 13.4549 11.5376 12.581L5.88072 6.92418ZM2.17285 15.8758C2.17285 19.2333 3.50661 22.4532 5.88072 24.8274L11.5376 19.1705C10.6638 18.2967 10.1729 17.1115 10.1729 15.8758H2.17285ZM5.88072 24.8274C8.25483 27.2015 11.4748 28.5352 14.8323 28.5352V20.5352C13.5965 20.5352 12.4114 20.0443 11.5376 19.1705L5.88072 24.8274ZM14.8323 28.5352C18.1898 28.5352 21.4098 27.2015 23.7839 24.8274L18.127 19.1705C17.2532 20.0443 16.0681 20.5352 14.8323 20.5352V28.5352ZM23.7839 24.8274C26.158 22.4532 27.4918 19.2333 27.4918 15.8758H19.4918C19.4918 17.1115 19.0009 18.2967 18.127 19.1705L23.7839 24.8274ZM27.4918 15.8758C27.4918 12.5183 26.158 9.29829 23.7839 6.92418L18.127 12.581C19.0009 13.4548 19.4918 14.64 19.4918 15.8758H27.4918ZM23.7839 6.92418C21.4098 4.55007 18.1898 3.21631 14.8323 3.21631V11.2163C16.0681 11.2163 17.2532 11.7072 18.127 12.581L23.7839 6.92418ZM14.8323 17.4995C14.4012 17.4995 13.9877 17.3283 13.6828 17.0234L8.02595 22.6803C9.83111 24.4854 12.2794 25.4995 14.8323 25.4995V17.4995ZM13.6828 17.0234C13.3779 16.7185 13.2067 16.305 13.2067 15.8739H5.20666C5.20666 18.4268 6.22079 20.8751 8.02595 22.6803L13.6828 17.0234ZM13.2067 15.8739C13.2067 15.4427 13.3779 15.0293 13.6828 14.7244L8.02595 9.06753C6.22079 10.8727 5.20666 13.321 5.20666 15.8739H13.2067ZM13.6828 14.7244C13.9877 14.4195 14.4012 14.2482 14.8323 14.2482V6.24824C12.2794 6.24824 9.83111 7.26237 8.02595 9.06753L13.6828 14.7244ZM14.8323 14.2482C15.2635 14.2482 15.677 14.4195 15.9818 14.7244L21.6387 9.06753C19.8335 7.26237 17.3852 6.24824 14.8323 6.24824V14.2482ZM15.9818 14.7244C16.2867 15.0293 16.458 15.4427 16.458 15.8739H24.458C24.458 13.321 23.4438 10.8727 21.6387 9.06753L15.9818 14.7244ZM16.458 15.8739C16.458 16.305 16.2867 16.7185 15.9818 17.0234L21.6387 22.6803C23.4438 20.8751 24.458 18.4268 24.458 15.8739H16.458ZM15.9818 17.0234C15.677 17.3283 15.2635 17.4995 14.8323 17.4995V25.4995C17.3852 25.4995 19.8335 24.4854 21.6387 22.6803L15.9818 17.0234Z"
                          fill="#003370" mask="url(#path-2-inside-1_2939_2076)" />
                        <path
                          d="M24.2137 8.65956C25.4093 8.65956 26.3786 7.69032 26.3786 6.4947C26.3786 5.29908 25.4093 4.32983 24.2137 4.32983C23.0181 4.32983 22.0488 5.29908 22.0488 6.4947C22.0488 7.69032 23.0181 8.65956 24.2137 8.65956Z"
                          fill="#003370" />
                      </svg>
                    </ListLink>
                  </SocialIcon>
                </SocialsIcons>
              </SocialsBox>
            </ListItem>
            <ListItem>
              <TitleList>Lokalizacje</TitleList>
              <ListContent>
                <ListIcon>
                  <img src={PinIcon} alt="" />
                </ListIcon>
                <ListLine className="custom-line">
                  <a href="https://goo.gl/maps/TKQu14gUWnQQ5kdj8" target="_blank" rel="noopener" className="custom-box">
                    <ListSpan><b>Rzeszów</b> Krakowska 20,</ListSpan><br />
                    <ListSpan>35-111 Rzeszów</ListSpan>
                  </a>
                  <a href="https://goo.gl/maps/QkxjwD9eEyM9W5Fk7" target="_blank" rel="noopener" className="custom-box">
                    <ListSpan><b>Rzeszów</b> Podwisłocze 30,</ListSpan><br />
                    <ListSpan>35-309 Rzeszów</ListSpan>
                  </a>
                  <a href="https://goo.gl/maps/5tsLzK5Qhc3iEMkj9" target="_blank" rel="noopener" className="custom-box">
                    <ListSpan><b>Rzeszów</b> Pasterczyka 1a,</ListSpan><br />
                    <ListSpan>35-330 Rzeszów</ListSpan>
                  </a>
                  <a href="https://goo.gl/maps/JhPMmZWxrhouc63D6" target="_blank" rel="noopener" className="custom-box">
                    <ListSpan><b>Tyczyn</b> Orkana 1</ListSpan><br />
                    <ListSpan>36-020 Tyczyn</ListSpan>
                  </a>
                  <a href="https://goo.gl/maps/AwmYCXZJecaoMS3q8" target="_blank" rel="noopener" className="custom-box">
                    <ListSpan><b>Łańcut</b> ul. Podzwierzyniec 74</ListSpan><br />
                    <ListSpan>37-100 Łańcut</ListSpan>
                  </a>
                </ListLine>
              </ListContent>
            </ListItem>
            <ListItem>
              <TitleList>Usługi</TitleList>
              <ListContent column>
                {
                  services.map( ( service, index ) => (
                    <ListLine left key={index}>
                      <StyledAnchorLink to={service.slug} title={service.title}>{service.title}</StyledAnchorLink>
                    </ListLine>
                  ) )
                }
              </ListContent>
            </ListItem>
          </Column>
          <Column>
            <LogoBox>
              <img src={LogoIcon} alt="" />
            </LogoBox>
          </Column>
        </ColumnWrapper>
        <FooterBottom>
          <FooterBox>
            <CopyRights>Klimfix {new Date().getFullYear()}</CopyRights>
            <StyledLink to={"/polityka-prywatnosci"} title="Polityka prywatności KLIMFIX">Polityka Prywatności</StyledLink>
          </FooterBox>
          <div>
            <Realization to={DataSocials.designer}>
              Project by Daria Pyziak Design
            </Realization>
          </div>
        </FooterBottom>
      </StyledWrapper>
      <FooterKeyWords>
        <FKWWrapper className="wrapper">
          {
            footer_key_words.map( ( word, index ) => (
              <span key={index}>{word}</span>
            ) )
          }
        </FKWWrapper>
      </FooterKeyWords>
    </Container>
  );
};

export default Footer;
