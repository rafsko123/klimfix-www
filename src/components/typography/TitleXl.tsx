import styled from "styled-components";


export const TitleXl = styled.h1<{ isWhite?: boolean }>`
    font-size: ${({theme}) => theme.fonts.desktop.xl};
    color: ${(props) => props.isWhite ? props.theme.colors.white : props.theme.colors.secondary};
    font-weight: 500;
    line-height: 1.05;
    font-family: ${({theme}) => theme.fontFamily.secondary};
    text-transform: uppercase;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptopBig}) {
        font-size: 70px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        font-size: 60px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptopSmall}) {
        font-size: 50px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        font-size: 40px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        font-size: 36px;
    }
`;
