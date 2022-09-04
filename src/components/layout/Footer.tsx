import {Link}    from "gatsby";
import React     from "react";
import styled    from "styled-components";
import {Wrapper} from "../layout/Wrapper";
import {TitleSm} from "../typography/TitleSm";

import PhoneIcon    from "../../assets/icons/phone.svg";
import EnvelopeIcon from "../../assets/icons/envelope.svg";
import PinIcon      from "../../assets/icons/pin.svg";
import FBIcon       from "../../assets/icons/fb.svg";
import IGIcon       from "../../assets/icons/insta.svg";
import LogoIcon     from "../../assets/icons/logo_footer.svg";


const Container = styled.div`
    background-color: ${({theme}) => theme.colors.secondary};
    padding: 64px 0 96px 0;
`;

const StyledWrapper = styled(Wrapper)``;

const ColumnWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Column = styled.div`
    display: flex;
`;

const StyledTitleSm = styled(TitleSm)`
    color: #fff;
    font-size: 36px;
    margin-bottom: 56px;
`;

const ListItem = styled.div`
    color: white;

    &:not(:last-child) {
        margin-right: 48px;
    }
`;

const LogoBox = styled.div`
    img {
        width: 300px;
    }
`;

const TitleList = styled.h4`
    color: white;
    font-size: ${({theme}) => theme.fonts.desktop.sm};
    font-weight: 600;
    margin-bottom: 24px;
    font-family: 'Poppins', sans-serif;

`;

const ListContent = styled.div`
    display: flex;
`;

const ListIcon = styled.div`
    img {
        height: 22px;
        width: 22px;
    }
`;

const ListLine = styled.div`
    padding-left: 24px;
`;

const ListLink = styled.a`
    display: inline-block;
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    font-weight: 300;
    margin-bottom: 4px;

    &:hover {
        text-decoration: underline !important;
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
`;

const FooterBottom = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 36px;
    margin-top: 72px;
    border-top: 1px solid rgba(255, 255, 255, 0.3);

    & > * {
        font-family: 'Poppins', sans-serif;
    }
`;

const CopyRights = styled.div`
    color: rgba(255, 255, 255, 0.3);
    margin-right: 48px;
    font-weight: 500;
    font-size: ${({theme}) => theme.fonts.desktop.xs};
    display: inline;
`;

const StyledLink = styled(Link)`
    color: rgba(255, 255, 255, 0.3);
    font-weight: 300;
    font-size: ${({theme}) => theme.fonts.desktop.xs};
    display: inline-block;

    &:hover {
        text-decoration: underline !important;
    }
`;

const Realization = styled.div`
    color: rgba(255, 255, 255, 0.3);
    font-weight: 300;
    font-size: ${({theme}) => theme.fonts.desktop.xs};
`;

const Footer = () => {
  return (
    <Container>
      <StyledWrapper>
        <StyledTitleSm isWhite>ZADBAJ O SWÓJ KOMFORT JAZDY!</StyledTitleSm>
        <ColumnWrapper>
          <Column>
            <ListItem>
              <TitleList>Dane kontaktowe</TitleList>
              <ListContent>
                <ListIcon>
                  <img src={PhoneIcon} alt=""/>
                </ListIcon>
                <ListLine>
                  <ListLink href="tel:+48534520569" title="">+48 534 520 569</ListLink><br/>
                  <ListLink href="tel:+48531086370" title="">+48 531 086 370</ListLink>
                </ListLine>
              </ListContent>
              <br/>
              <ListContent>
                <ListIcon>
                  <img src={EnvelopeIcon} alt=""/>
                </ListIcon>
                <ListLine>
                  <ListLink href="mailto:kontakt@klimfix.pl" title="">kontakt@klimfix.pl</ListLink><br/>
                </ListLine>
              </ListContent>
            </ListItem>
            <ListItem>
              <TitleList>Lokalizacje</TitleList>
              <ListContent>
                <ListIcon>
                  <img src={PinIcon} alt=""/>
                </ListIcon>
                <ListLine>
                  <ListSpan><b>Rzeszów</b> Krakowska 20,</ListSpan><br/>
                  <ListSpan>35-111 Rzeszów</ListSpan>
                  <br/>
                  <br/>
                  <ListSpan><b>Rzeszów</b> Podwisłocze 30,</ListSpan><br/>
                  <ListSpan>35-309 Rzeszów</ListSpan>
                  <br/>
                  <br/>
                  <ListSpan><b>Tyczyn</b> Orkana 1</ListSpan><br/>
                  <ListSpan>36-020 Tyczyn</ListSpan>
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
                  <ListLink href="/" title="Klimfix - facebook" target="_blank" rel="noopener">facebook.com/serwisklimfix</ListLink><br/>
                </ListLine>
              </ListContent>
              <ListContent>
                <ListIcon>
                  <img src={IGIcon} alt=""/>
                </ListIcon>
                <ListLine>
                  <ListLink href="/" title="Klimfix - instagram" target="_blank" rel="noopener">@serwis_klimfix</ListLink>
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
          <div>
            <CopyRights>Klimfix {new Date().getFullYear()}</CopyRights>
            <StyledLink to={"/"}>Polityka Prywatności</StyledLink>
          </div>
          <div>
            <Realization>
              Project by Daria Pyziak Design
            </Realization>
          </div>
        </FooterBottom>
      </StyledWrapper>
    </Container>
  );
};

export default Footer;
