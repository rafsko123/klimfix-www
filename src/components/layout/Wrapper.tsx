import styled from "styled-components";


export const Wrapper = styled.div`
    max-width: ${({theme}) => theme.layoutPartSizes.wrapper.xl};
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 24px;
    padding-right: 24px;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptopBig}) {
        max-width: ${({theme}) => theme.layoutPartSizes.wrapper.lg};
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        max-width: ${({theme}) => theme.layoutPartSizes.wrapper.md};
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptopSmall}) {
        max-width: ${({theme}) => theme.layoutPartSizes.wrapper.sm};
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        max-width: ${({theme}) => theme.layoutPartSizes.wrapper.full};
        padding-left: 48px;
        padding-right: 48px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        padding-left: 36px;
        padding-right: 36px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        padding-left: 24px;
        padding-right: 24px;
    }
`;
