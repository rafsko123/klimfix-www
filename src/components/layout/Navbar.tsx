import {Link}              from "gatsby";
import {FunctionComponent} from "react";
import {useState}          from "react";
import {useEffect}         from "react";
import React               from "react";
import styled              from "styled-components";
import {dataMenu}          from "../../data/DataMenu";

import LogoIcon     from "../../assets/icons/logo.svg";
import LogoDarkIcon from "../../assets/icons/logo_dark.svg";
import PhoneIcon    from "../../assets/icons/phone.svg";


const Container = styled.div<{ background?: boolean }>`
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    max-width: 2560px;
    width: 100%;
    z-index: 100;
    background-color: ${p => p.background ? "#fff" : "transparent"};
`;

const Wrapper = styled.div`
    max-width: 2560px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    height: 80px;
    padding-left: 64px;
    padding-right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        padding-left: 24px;
        height: 60px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        padding-right: 36px;
    }
`;

const LogoBox = styled(Link)`
    display: inline-block;
    width: 120px;

    img {
        width: 100%;
        height: auto;
    }
}
`;

const NavbarMenuBox = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        position: fixed;
        top: 0;
        left: 0;
        max-width: 100vw;
        width: 100%;
        height: 100vh;
        background: rgba(255, 255, 255, 0.17);
        backdrop-filter: blur(0px);
        -webkit-backdrop-filter: blur(0px);
        display: flex;
        justify-content: flex-end;
        opacity: 0;
        visibility: hidden;
        transition: .3s all ease;
    }

    &.menu-active {
        opacity: 1;
        visibility: visible;
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);

    }
`;

const NavbarList = styled.ul`
    display: flex;
    margin-right: 64px;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        margin-right: 48px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        width: 300px;
        height: 100%;
        flex-direction: column;
        background-color: ${({theme}) => theme.colors.secondary};
        background-image: linear-gradient(180deg, rgba(0, 51, 112, 0) 40%, rgba(60, 191, 240, 0.81) 100%);
        margin-right: 0;
        padding: 100px 36px 0 36px;
    }
`;


const NavbarListItem = styled.li`
    &:not(:last-child) {
        margin-right: 78px;
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        &:not(:last-child) {
            margin-right: 48px;
        }
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        text-align: right;
        &:not(:last-child) {
            margin-right: 0;
            margin-bottom: 48px;
        }
    }
`;

const NavbarLink = styled(Link)<{ dark: boolean | undefined }>`
    color: ${(p) => p.dark ? p.theme.colors.secondary : "#ffffff"};
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: 0.045em;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        font-size: 14px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        font-size: 16px;
    }
`;

const NavbarShowOnMobile = styled.div`
    display: none;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        display: flex;
        align-items: center;
        position: fixed;
        top: 12px;
        right: 36px;
        z-index: 1000;
    }
`;

const NavbarCTA = styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.primary};
    padding: 4px 64px;
    letter-spacing: 0.045em;
    height: 100%;
    text-transform: uppercase;
    font-family: 'Mitr', sans-serif;
    color: ${({theme}) => theme.colors.white};
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        padding: 4px 48px;
        font-size: 14px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        display: none;
    }
`;

const NavbarMobileCTA = styled.a`
    width: 32px;
    height: 32px;
    background-image: url(${PhoneIcon});
    display: inline-block;
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: 16px;
`;

const Hamburger = styled.div`
    width: 32px;
    height: 12px;
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-end;
    justify-content: space-between;
    transition: .3s all ease;

    span {
        transition: .3s all ease;
        border-radius: 5px;
        width: 100%;
        height: 2px;
        background-color: #fff;
        display: inline-block;

        &:nth-child(2) {
            width: 18px;
        }
    }

    &.menu-active {
        transform: rotate(-45deg);

        span {
            background-color: ${({theme}) => theme.colors.primary};

            &:nth-child(1) {
                transform: rotate(90deg);
            }

            &:nth-child(2) {
                width: 100%;
                transform: translateY(10px);
            }
        }
    }
`;

const Navbar: FunctionComponent<{ path: string }> = ({path}) => {
  const [whiteBackground, setWhiteBackground] = useState<boolean>(false);
  const [menuActive, setMenuActive]           = useState<boolean>(false);

  useEffect(() => {
    if (path === "/uslugi-i-cennik/" || path === "/nasze-lokalizacje/" || path === "/strefa-wiedzy/") {
      setWhiteBackground(true);
    } else {
      setWhiteBackground(false);
    }
  }, [location.pathname]);

  return (
    <Container background={whiteBackground}>
      <Wrapper>
        <LogoBox to={"/"} title="Klimfix- Strona główna">
          {
            whiteBackground ? (
              <img src={LogoDarkIcon} alt=""/>
            ) : (
              <img src={LogoIcon} alt=""/>
            )
          }
        </LogoBox>
        <NavbarMenuBox className={menuActive ? "menu-active" : ""}>
          <NavbarList className={menuActive ? "menu-active" : ""}>
            {
              dataMenu.map((element, i) => (
                <NavbarListItem key={i}>
                  <NavbarLink to={element.slug} title={element.title} dark={whiteBackground ? whiteBackground : undefined}>
                    {element.title}
                  </NavbarLink>
                </NavbarListItem>
              ))
            }
          </NavbarList>
          <NavbarCTA to={"/"}>Zadzwoń!</NavbarCTA>
        </NavbarMenuBox>
        <NavbarShowOnMobile>
          <NavbarMobileCTA href="/"/>
          <Hamburger className={menuActive ? "menu-active" : ""} onClick={() => setMenuActive(!menuActive)}>
            <span/>
            <span/>
          </Hamburger>
        </NavbarShowOnMobile>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
