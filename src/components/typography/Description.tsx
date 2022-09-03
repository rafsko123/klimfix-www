import styled from "styled-components";


export const Description = styled.p<{ isWhite?: boolean }>`
    color: ${(props) => props.isWhite ? props.theme.colors.white : props.theme.colors.secondary};
    font-size: ${({theme}) => theme.fonts.desktop.sm};
    line-height: 2;
    font-weight: 300;
`;
