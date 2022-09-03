import styled from "styled-components";


export const TitleSm = styled.h2<{ isWhite?: boolean }>`
    color: ${(props) => props.isWhite ? props.theme.colors.white : props.theme.colors.secondary};
    font-size: ${({theme}) => theme.fonts.desktop.sm};
    font-weight: 500;
    text-transform: uppercase;

`;
