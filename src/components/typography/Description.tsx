import styled from "styled-components";


export const Description = styled.p<{ isWhite?: boolean }>`
    color: ${(props) => props.isWhite ? props.theme.colors.white : props.theme.colors.secondary};
    font-size: ${({theme}) => theme.fonts.desktop.sm};
    line-height: 2;
    font-weight: 300;

    strong, b {
        font-weight: 500;
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptopBig}) {
        font-size: 18px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        font-size: 16px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptopSmall}) {
        font-size: 14px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        font-size: 14px;
    }
`;
