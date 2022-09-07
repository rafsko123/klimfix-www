import styled from "styled-components";


export const Section = styled.section`
    padding: 56px 0;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        padding: 48px 0;
    }
`;
