import {FunctionComponent} from "react";
import React               from "react";
import styled              from "styled-components";
import {Description}       from "../../../components/typography/Description";
import {TitleMd}           from "../../../components/typography/TitleMd";


const Container = styled.div`
    padding: 78px 0 24px 0;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        padding: 56px 0 18px 0;
    }
`;

const StyledTitleMd = styled(TitleMd)`
    padding-bottom: 24px;
    color: ${({theme}) => theme.colors.primary};
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        padding-bottom: 18px;
    }
`;

const StyledDescription = styled(Description)`
    padding: 24px 0;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        padding: 18px 0;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        padding: 0 0 12px 0;
    }
`;

interface Props {
  subtitle: string;
  description?: string;
}

const HeroDescription: FunctionComponent<Props> = ({subtitle, description}) => {
  return (
    <Container>
      <StyledTitleMd as="h2">{subtitle}</StyledTitleMd>
      <StyledDescription>{description}</StyledDescription>
    </Container>
  );
};

export default HeroDescription;
