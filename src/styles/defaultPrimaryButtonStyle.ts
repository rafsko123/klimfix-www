import {css} from "styled-components";


export const defaultPrimaryButtonStyle = css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.white};
    background-color: ${({theme}) => theme.colors.primary};
    //font-size: ${props => props.theme.fonts.mobile.sm};
    //font-weight: ${props => props.theme.weights.medium};
    outline: none;
    white-space: nowrap;
    cursor: pointer;
    height: 40px;
    padding: 2px 22px;

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
`;

