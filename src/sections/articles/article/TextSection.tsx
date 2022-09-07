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
`;

interface Props {
  title?: string;
  description?: any;
}

const TextSection: FunctionComponent<Props> = ({title, description}) => {
  return (
    <Container>
      <StyledTitleSm>{title}</StyledTitleSm>
      <StyledDescription>{description}</StyledDescription>
    </Container>
  );
};

export default TextSection;
