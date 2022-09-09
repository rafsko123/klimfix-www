import {JSXElementConstructor} from "react";
import {FunctionComponent}     from "react";
import React                   from "react";
import styled                  from "styled-components";
import {Description}           from "../../../components/typography/Description";


const Container = styled.div`
    padding: 12px 0;
`;

const StyledTitleSm = styled.h3`
    padding: 12px 0;
    font-weight: 400;
    font-size: 32px;
    color: ${({theme}) => theme.colors.secondary};
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        font-size: 24px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        font-size: 18px;
        padding: 4px 0;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        font-size: 16px;
    }
`;

const StyledDescription = styled(Description)`
    padding: 12px 0;

    ul {
        li {
            padding-left: 28px;
            position: relative;
            line-height: 1.5;

            &:not(:last-child) {
                margin-bottom: 18px;
            }

            &:before {
                content: '';
                display: block;
                position: absolute;
                top: 10px;
                left: 0;
                width: 8px;
                height: 8px;
                background-color: ${({theme}) => theme.colors.primary};
                border-radius: 100%;
            }
        }
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        ul {
            li {
                padding-left: 20px;

                &:before {
                    width: 6px;
                    height: 6px;
                    top: 6px;
                }
            }
        }
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        padding: 4px 0;
    }
`;

interface Props {
  title?: string;
  description?: any;
}

const TextSection: FunctionComponent<Props> = ({title, description}) => {
  return (
    <Container>
      {
        title && (
          <StyledTitleSm>{title}</StyledTitleSm>
        )
      }
      {
        description && (
          <StyledDescription>{description}</StyledDescription>
        )
      }
    </Container>
  );
};

export default TextSection;
