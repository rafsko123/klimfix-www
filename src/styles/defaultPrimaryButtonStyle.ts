import {css} from "styled-components";


export const defaultPrimaryButtonStyle = css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.white};
    background-color: ${({theme}) => theme.colors.primary};
    font-size: ${props => props.theme.fonts.xs};
    text-transform: uppercase;
    outline: none;
    white-space: nowrap;
    cursor: pointer;
    height: 50px;
    padding: 2px 36px;
    transition: .3s background-color ease;

    &:hover {
        background-color: ${({theme}) => theme.colors.primaryHue};

    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        font-size: 12px;
        height: 40px;
        padding: 2px 24px;
    }
`;

