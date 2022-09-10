import {Link}              from "gatsby";
import {FunctionComponent} from "react";
import {useState}          from "react";
import {useEffect}         from "react";
import React               from "react";
import styled              from "styled-components";
import {dataMenu}          from "../../data/DataMenu";
import classNames          from "classnames";
import {useLocation}       from "@reach/router";

import LogoIcon     from "../../assets/icons/logo.svg";
import LogoDarkIcon from "../../assets/icons/logo_dark.svg";
import PhoneIcon    from "../../assets/icons/phone.svg";


const Container = styled.div`
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    max-width: 2560px;
    width: 100%;
    z-index: 100;

    &.menu-scrolled,
    &.white-background {
        background-color: #fff;
        transition: .3s background-color ease;
    }

    &.menu-scrolled {
        box-shadow: 0 8px 18px -14px rgba(0, 201, 255, 1);
    }
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
    transition: .3s height ease;

    &.menu-scrolled {
        height: 65px;
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        padding-left: 24px;
        height: 60px !important;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        padding-right: 36px;
        height: 50px !important;
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
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptopSmall}) {
        &:not(:last-child) {
            margin-right: 36px;
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

const NavbarLink = styled(Link)`
    color: #fff;
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: 0.045em;
    position: relative;
    transition: .3s color ease;

    &.menu-scrolled,
    &.white-background {
        color: ${({theme}) => theme.colors.secondary};
    }

    &:hover {
        color: ${({theme}) => theme.colors.primary};
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        font-size: 14px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        font-size: 16px;
        color: #fff !important;
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
    transition: .3s background-color ease;

    &:hover {
        background-color: ${({theme}) => theme.colors.primaryHue};
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        padding: 4px 48px;
        font-size: 14px;
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptopSmall}) {
        padding: 4px 32px;

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

    &.white-background,
    &.menu-scrolled {
        span {
            transition: .3s background-color ease;
            background-color: ${({theme}) => theme.colors.secondary};
        }
    }

    &.menu-active {
        transform: rotate(-45deg);

        span {
            background-color: ${({theme}) => theme.colors.primary} !important;

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
  const [menuScrolled, setMenuScrolled]       = useState<boolean>(false);
  const [menuActive, setMenuActive]           = useState<boolean>(false);
  const location                              = useLocation();

  const handleScroll = () => {
    if (window.scrollY > 60) {
      setMenuScrolled(true);
    } else {
      setMenuScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (path === "/uslugi-i-cennik/" || path === "/nasze-lokalizacje/" || path === "/strefa-wiedzy/") {
      setWhiteBackground(true);
    } else {
      setWhiteBackground(false);
    }
  }, [location]);

  const handleClick = () => {
    document.body.classList.toggle("scroll-lock");
    setMenuActive(!menuActive);
  };

  const handleLinkClick = () => {
    setMenuActive(false);
    document.body.classList.remove("scroll-lock");
  };

  const cx = classNames({
    "white-background": whiteBackground,
    "menu-scrolled":    menuScrolled,
    "menu-active":      menuActive,
  });

  return (
    <Container className={cx}>
      <Wrapper className={cx}>
        <LogoBox to={"/"} title="Klimfix- Strona główna">
          {
            (whiteBackground || menuScrolled) ? (
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
                  <NavbarLink to={element.slug} title={element.title} className={cx} onClick={handleLinkClick}>
                    {element.title}
                  </NavbarLink>
                </NavbarListItem>
              ))
            }
          </NavbarList>
          <NavbarCTA to={"/"}>Zarezerwuj wizytę</NavbarCTA>
        </NavbarMenuBox>
        <NavbarShowOnMobile>
          <NavbarMobileCTA href="/"/>
          <Hamburger className={cx} onClick={() => handleClick()}>
            <span/>
            <span/>
          </Hamburger>
        </NavbarShowOnMobile>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
