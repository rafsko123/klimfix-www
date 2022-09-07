import {graphql}        from "gatsby";
import {useStaticQuery} from "gatsby";
import Img              from "gatsby-image";
import React            from "react";
import styled           from "styled-components";
import {Wrapper}        from "../components/layout/Wrapper";
import {TitleLg}        from "../components/typography/TitleLg";
import {TitleSm}        from "../components/typography/TitleSm";

import PhoneIcon    from "../assets/icons/phone.svg";
import EnvelopeIcon from "../assets/icons/envelope.svg";
import CarBg        from "../assets/images/contact/car.png";


const Container = styled.div`
    position: relative;
    background-color: ${({theme}) => theme.colors.secondary};
    padding: 300px 0;
    background-image: linear-gradient(180deg, rgba(0, 51, 112, 0) 0%, rgba(60, 191, 240, 0.81) 100%);
`;

const BackgroundImage = styled.div`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 100%;
    height: 100%;
    background-image: url(${CarBg});
    background-size: auto 100%;
    background-position: right;
    background-repeat: no-repeat;
    z-index: 2;
`;

const StyledWrapper = styled(Wrapper)`
    display: flex;
    position: relative;
    z-index: 3;
`;

const Column = styled.div`
    width: 50%;
`;

const TextBox = styled.div`
    max-width: 500px;
    padding-left: 100px;
`;

const StyledTitleSm = styled(TitleSm)`
    margin-bottom: 18px;
`;

const ContactBox = styled.div`
    margin-top: 64px;
`;

const ContactBoxItem = styled.div`
    display: flex;

    &:not(:last-child) {
        margin-bottom: 36px;
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
`;

const ContactBoxDetail = styled.div``;

const ContactBoxLink = styled.a`
    color: #fff;
    font-size: 32px;
    font-weight: 300;
    font-family: 'Poppins', sans-serif;
    display: inline-block;

    &:not(:last-child) {
        margin-bottom: 8px;
    }
`;

const Contact = () => {
  return (
    <Container>
      <BackgroundImage/>
      <StyledWrapper>
        <Column>
          <TextBox>
            <StyledTitleSm isWhite>Masz pytania?</StyledTitleSm>
            <TitleLg isWhite as="h1">
              SKONTAKTUJ SIĘ <br/>
              Z NAMI
            </TitleLg>
            <ContactBox>
              <ContactBoxItem>
                <ContactBoxIcon>
                  <img src={PhoneIcon} alt=""/>
                </ContactBoxIcon>
                <ContactBoxDetail>
                  <ContactBoxLink href="tel:+48534520569" title="Telefon kontaktowy">
                    +48 534 520 569
                  </ContactBoxLink>
                  <ContactBoxLink href="tel:+48531086370" title="Telefon kontaktowy">
                    +48 531 086 370
                  </ContactBoxLink>
                </ContactBoxDetail>
              </ContactBoxItem>
              <ContactBoxItem>
                <ContactBoxIcon>
                  <img src={EnvelopeIcon} alt=""/>
                </ContactBoxIcon>
                <ContactBoxDetail>
                  <ContactBoxLink href="mailto:kontakt@klimfix.pl" title="Adres email - klimfix">
                    kontakt@klimfix.pl
                  </ContactBoxLink>
                </ContactBoxDetail>
              </ContactBoxItem>
            </ContactBox>
          </TextBox>
        </Column>
      </StyledWrapper>
    </Container>
  );
};


export const image = () => {
  return useStaticQuery(graphql`
    query {
      contact: file(relativePath: { eq: "images/contact/car.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
};

export default Contact;
