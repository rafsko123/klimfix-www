import {Link}        from "gatsby";
import React         from "react";
import styled        from "styled-components";
import CookieConsent from "react-cookie-consent";
import CookiesImage  from "../../assets/icons/cookies.svg";


const StyledLink = styled(Link)`
    display: inline-block;
`;

export const Box       = styled.div`
    position: fixed;
    bottom: 48px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 1000px;
    width: 100%;
    z-index: 100;
    display: flex;
    align-items: center;

    .CookieConsent {
        flex: auto !important;
        display: flex !important;
        align-items: center !important;
        position: relative !important;
        background-color: ${({theme}) => theme.colors.primary} !important;
        padding: 30px 48px;
        box-shadow: 0px -5px 15px -4px rgba(0, 201, 255, 1) !important;

        .cookies-wrapper {
            max-width: 1410px;
            width: 100%;
            margin: 0 auto !important;
        }

        .center-button {
            button {
                border: 2px solid #fff !important;
                font-size: 16px;
                color: #fff !important;
                white-space: nowrap;
                transition: 0.2s all ease;
                background-color: transparent !important;
                background-repeat: no-repeat;
                background-position: 50% 100%;
                text-align: center !important;
                height: 48px;
                width: 170px;
                padding: 0 !important;

                &:hover {
                    background-color: white !important;
                    color: ${({theme}) => theme.colors.primary} !important;
                }
            }
        }
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        bottom: 0;
        .CookieConsent {
            flex-direction: column !important;
            padding: 24px 24px 24px 24px;

            .cookies-wrapper {
                flex: auto !important;
            }

            .center-button {
                button {
                    width: 120px;
                    height: 36px;
                    font-size: 12px !important;
                    background-size: 12px !important;
                }
            }
        }
    }
`;
export const Container = styled(CookieConsent)``;

export const Wrapper = styled.div`
    max-width: 640px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    color: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    @media screen and (min-width: 1023px) {
        max-width: 1600px;
        flex-direction: row;
    }
`;

export const TextBox = styled.div`
    color: #fff;
    position: relative;
    padding-left: 96px;
    text-align: left;

    &:before {
        content: "";
        display: block;
        position: absolute;
        top: 6px;
        left: 0;
        width: 60px;
        height: 60px;
        background-image: url(${CookiesImage});
        background-repeat: no-repeat;
        background-size: contain;
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        padding-left: 0;
        text-align: center;
        &:before {
            display: none;
        }
    }
`;

export const Text = styled.p`
    font-weight: 300;
    font-size: 14px;
    line-height: 1.4;
    padding-right: 32px;

    a {
        text-decoration: underline !important;
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        font-size: 12px;
        padding-right: 0;
    }
`;

const CookiesBox = () => {
  return (
    <Box>
      <Container
        //@ts-ignore
        buttonWrapperClasses="center-button"
        buttonText="Akceptuję"
        contentClasses="cookies-wrapper"
        style={{
          color:           "#fff",
          fontSize:        "14px",
          position:        "relative",
          width:           "100%",
          backgroundColor: "transparent",
          boxShadow:       "none",
        }}
      >
        <Wrapper>
          <TextBox>
            <Text>
              Serwis wykorzystuje pliki cookies m.in. w celu poprawienia dostępności, personalizacji, aby zbierać dane, dotyczące ruchu na stronie. Każdy może sam decydować o tym czy dopuszcza pliki cookie, ustawiając odpowiednio swoją przeglądarkę. Więcej nformacji znajdziesz&nbsp;<StyledLink to={"/polityka-prywatnosci"}>tutaj.</StyledLink>
            </Text>
          </TextBox>
        </Wrapper>
      </Container>
    </Box>

  );
};

export default CookiesBox;
