import styled from "styled-components";


export const TitleLg = styled.h2<{ isWhite?: boolean }>`
    color: ${(props) => props.isWhite ? props.theme.colors.white : props.theme.colors.secondary};
    font-size: ${({theme}) => theme.fonts.desktop.lg};
    font-weight: 500;
    line-height: 1.1;
    text-transform: uppercase;

`;
