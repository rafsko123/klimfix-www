import styled from "styled-components";


export const TitleLg = styled.h2<{ isWhite?: boolean }>`
    color: ${(props) => props.isWhite ? props.theme.colors.white : props.theme.colors.secondary};
    font-size: ${({theme}) => theme.fonts.desktop.lg};
    font-weight: 500;
    line-height: 1.2;
    text-transform: uppercase;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptopBig}) {
        font-size: 40px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptopSmall}) {
        font-size: 32px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        font-size: 24px;
    }
`;
