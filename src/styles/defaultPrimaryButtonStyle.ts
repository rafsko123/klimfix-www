import {css} from "styled-components";


export const defaultPrimaryButtonStyle = css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.white};
    background-color: ${({theme}) => theme.colors.primary};
    border: 1px solid ${props => props.theme.colors.primary};
    //font-size: ${props => props.theme.fonts.mobile.sm};
    //font-weight: ${props => props.theme.weights.medium};
    outline: none;
    white-space: nowrap;
    cursor: pointer;
    background-repeat: no-repeat;
    box-shadow: 0 4px 4px rgba(1, 173, 249, 0.15);
    border-radius: 35px;
    height: 40px;
    padding: 2px 22px;

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
`;

