import {Link}     from "gatsby";
import React      from "react";
import styled     from "styled-components";
import {dataMenu} from "../../data/DataMenu";
import LogoIcon   from "../../assets/icons/logo.svg";


const Container = styled.div`
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    max-width: 2560px;
    width: 100%;
    z-index: 100;
`;

const Wrapper = styled.div`
    max-width: 2560px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    height: 80px;
    padding-left: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const LogoBox = styled(Link)`
    display: inline-block;
`;

const NavbarMenuBox = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
`;

const NavbarList = styled.ul`
    display: flex;
    margin-right: 64px;
`;


const NavbarListItem = styled.li`
    &:not(:last-child) {
        margin-right: 78px;
    }
`;

const NavbarLink = styled(Link)`
    color: #fff;
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: 0.045em;
`;

const NavbarShowOnMobile = styled.div`
    display: none
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
`;

const NavbarMobileCTA = styled(Link)``;

const Hamburger       = styled.div``;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <LogoBox to={"/"} title="Klimfix- Strona główna">
          <img src={LogoIcon} alt=""/>
        </LogoBox>
        <NavbarMenuBox>
          <NavbarList>
            {
              dataMenu.map((element, i) => (
                <NavbarListItem key={i}>
                  <NavbarLink to={element.slug} title={element.title}>
                    {element.title}
                  </NavbarLink>
                </NavbarListItem>
              ))
            }
          </NavbarList>
          <NavbarCTA to={"/"}>Zadzwoń!</NavbarCTA>
        </NavbarMenuBox>
        <NavbarShowOnMobile>
          <NavbarMobileCTA to={"/"}/>
          <Hamburger>
            <span/>
            <span/>
            <span/>
          </Hamburger>
        </NavbarShowOnMobile>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
