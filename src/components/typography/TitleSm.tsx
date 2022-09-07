import styled from "styled-components";


export const TitleSm = styled.h2<{ isWhite?: boolean }>`
    color: ${(props) => props.isWhite ? props.theme.colors.white : props.theme.colors.secondary};
    font-size: ${({theme}) => theme.fonts.desktop.sm};
    font-weight: 500;
    text-transform: uppercase;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptopBig}) {
     font-size: 18px;   
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptopSmall}) {
        font-size: 16px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        font-size: 14px;
    }
`;
