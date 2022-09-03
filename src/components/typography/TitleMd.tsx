import styled from "styled-components";


export const TitleMd = styled.h2<{ isWhite?: boolean }>`
    color: ${(props) => props.isWhite ? props.theme.colors.white : props.theme.colors.secondary};
    font-size: ${({theme}) => theme.fonts.desktop.md};
    line-height: 1.2 ;
    font-weight: 500;
    text-transform: uppercase;

`;
