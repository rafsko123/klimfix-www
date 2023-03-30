import {Link}        from "gatsby";
import React         from "react";
import styled        from "styled-components";
import {DataSocials} from "../../data/DataSocials";
import {TitleSm}     from "../typography/TitleSm";
import {Wrapper}     from "./Wrapper";

import PhoneIcon    from "../../assets/icons/phone.svg";
import EnvelopeIcon from "../../assets/icons/envelope.svg";
import PinIcon      from "../../assets/icons/pin.svg";
import FBIcon       from "../../assets/icons/fb.svg";
import IGIcon       from "../../assets/icons/insta.svg";
import LogoIcon     from "../../assets/icons/logo_footer.svg";


const Container = styled.div`
    background-color: ${({theme}) => theme.colors.secondary};
    padding: 64px 0 48px 0;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        padding: 56px 0 72px 0;
    }
`;

const StyledWrapper = styled(Wrapper)``;

const ColumnWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        flex-direction: column;
        justify-content: flex-start;
    }
`;

const Column = styled.div`
    display: flex;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        width: 100%;
        justify-content: space-between;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        flex-direction: column;
    }
`;

const StyledTitleSm = styled(TitleSm)`
    color: #fff;
    font-size: 36px;
    margin-bottom: 56px;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        font-size: 28px;
        margin-bottom: 48px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        font-size: 20px;
    }
`;

const ListItem = styled.div`
    color: white;

    &:not(:last-child) {
        margin-right: 48px;
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        &:not(:last-child) {
            margin-right: 36px;
        }
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        &:not(:last-child) {
            margin-right: 0;
            margin-bottom: 36px;
        }
    }
`;

const LogoBox = styled.div`
    img {
        width: 300px;
        @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
            width: 200px;
        }
        @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
            width: 140px;
        }
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        padding: 48px 0;
        width: 100%;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        text-align: center;
    }
`;

const TitleList = styled.h4`
    color: white;
    font-size: ${({theme}) => theme.fonts.desktop.sm};
    font-weight: 600;
    margin-bottom: 24px;
    font-family: 'Poppins', sans-serif;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        font-size: 16px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        font-size: 18px;
    }
`;

const ListContent = styled.div`
    display: flex;
`;

const ListIcon = styled.div`
    img {
        height: 22px;
        width: 22px;
        margin-top: 2px;
        @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
            width: 18px;
            height: 18px;
        }
        @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
            width: 24px;
            height: 24px;
        }
    }
`;

const ListLine = styled.div`
    padding-left: 24px;

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

    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        padding-left: 18px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        padding-left: 12px;
    }
`;

const ListLink = styled.a`
    display: inline-block;
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    font-weight: 300;
    margin-bottom: 4px;
    transition: .3s color ease;

    &:hover {
        color: #00C9FF;
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        font-size: 14px;
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        font-size: 16px;
    }
`;

const ListSpan = styled.span`
    display: inline-block;
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    font-weight: 300;
    margin-bottom: 4px;

    b {
        font-weight: 500;
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        font-size: 14px;
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
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

    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        padding-top: 36px;
        margin-top: 64px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        flex-direction: column;
    }
`;

const CopyRights = styled.div`
    color: rgba(255, 255, 255, 0.3);
    margin-right: 48px;
    font-weight: 300;
    display: inline;
    font-size: 14px;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        margin-right: 36px;
        font-size: 12px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        margin: 4px 0 4px 0;
        font-size: 14px;
    }
`;

const FooterBox = styled.div`
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        display: flex;
        flex-direction: column;
        text-align: center;
        margin: 4px 0;
    }
`;

const StyledLink = styled(Link)`
    color: rgba(255, 255, 255, 0.3);
    font-weight: 300;
    font-size: 14px;
    display: inline-block;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        font-size: 12px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        font-size: 14px;
    }

    &:hover {
        text-decoration: underline !important;
    }
`;

const Realization = styled(Link)`
    display: inline-block;
    color: rgba(255, 255, 255, 0.3);
    font-weight: 300;
    font-size: 14px;
    transition: .3s color ease;

    &:hover {
        color: ${({theme}) => theme.colors.primary};
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        font-size: 12px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        font-size: 14px;
    }
`;

const Footer = () => {
  return (
    <Container>
      <StyledWrapper>
        <StyledTitleSm isWhite as="h3">ZADBAJ O SWÓJ KOMFORT JAZDY!</StyledTitleSm>
        <ColumnWrapper>
          <Column>
            <ListItem>
              <TitleList>Dane kontaktowe</TitleList>
              <ListContent>
                <ListIcon>
                  <img src={PhoneIcon} alt=""/>
                </ListIcon>
                <ListLine>
                  <ListLink href="tel:+48534520569" title="Telefon kontaktowy KLIMFIX">+48 534 520 569</ListLink><br/>
                  <ListLink href="tel:+48531086370" title="Telefon kontaktowy KLIMFIX">+48 531 086 370</ListLink>
                </ListLine>
              </ListContent>
              <br/>
              <ListContent>
                <ListIcon>
                  <img src={EnvelopeIcon} alt=""/>
                </ListIcon>
                <ListLine>
                  <ListLink href="mailto:kontakt@klimfix.pl" title="Kontaktowy adres email">kontakt@klimfix.pl</ListLink><br/>
                </ListLine>
              </ListContent>
            </ListItem>
            <ListItem>
              <TitleList>Lokalizacje</TitleList>
              <ListContent>
                <ListIcon>
                  <img src={PinIcon} alt=""/>
                </ListIcon>
                <ListLine className="custom-line">
                  <a href="https://goo.gl/maps/TKQu14gUWnQQ5kdj8" target="_blank" rel="noopener" className="custom-box">
                    <ListSpan><b>Rzeszów</b> Krakowska 20,</ListSpan><br/>
                    <ListSpan>35-111 Rzeszów</ListSpan>
                  </a>
                  <a href="https://goo.gl/maps/QkxjwD9eEyM9W5Fk7" target="_blank" rel="noopener" className="custom-box">
                    <ListSpan><b>Rzeszów</b> Podwisłocze 30,</ListSpan><br/>
                    <ListSpan>35-309 Rzeszów</ListSpan>
                  </a>
                  <a href="https://goo.gl/maps/JhPMmZWxrhouc63D6" target="_blank" rel="noopener" className="custom-box">
                    <ListSpan><b>Tyczyn</b> Orkana 1</ListSpan><br/>
                    <ListSpan>36-020 Tyczyn</ListSpan>
                  </a>
                </ListLine>
              </ListContent>
            </ListItem>
            <ListItem>
              <TitleList>Social Media</TitleList>
              <ListContent>
                <ListIcon>
                  <img src={FBIcon} alt=""/>
                </ListIcon>
                <ListLine>
                  <ListLink href={DataSocials.facebook} title="Klimfix - facebook" target="_blank" rel="noopener">facebook.com/serwisklimfix</ListLink><br/>
                </ListLine>
              </ListContent>
              <ListContent>
                <ListIcon>
                  <img src={IGIcon} alt=""/>
                </ListIcon>
                <ListLine>
                  <ListLink href={DataSocials.instagram} title="Klimfix - instagram" target="_blank" rel="noopener">@serwis_klimfix</ListLink>
                </ListLine>
              </ListContent>
            </ListItem>
          </Column>
          <Column>
            <LogoBox>
              <img src={LogoIcon} alt=""/>
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
    </Container>
  );
};

export default Footer;
