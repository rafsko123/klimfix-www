import styled from "styled-components";


export const TitleXl = styled.h1<{ isWhite?: boolean }>`
    font-size: ${({theme}) => theme.fonts.desktop.xl};
    color: ${(props) => props.isWhite ? props.theme.colors.white : props.theme.colors.secondary};
    font-weight: 500;
    line-height: 1.05;
    font-family: ${({theme}) => theme.fontFamily.secondary};
    text-transform: uppercase;
`;
