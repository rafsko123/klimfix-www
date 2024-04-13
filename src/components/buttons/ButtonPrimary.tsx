import { Link } from "gatsby";
import { FunctionComponent } from "react";
import React from "react";
import styled from "styled-components";
import { defaultPrimaryButtonStyle } from "../../styles/defaultPrimaryButtonStyle";
import { ButtonType } from "../../types/ButtonType";
import { AnchorLink } from "gatsby-plugin-anchor-links";


const StyledButton = styled.button`
    ${ defaultPrimaryButtonStyle }
`;

const StyledLink = styled( Link )`
    ${ defaultPrimaryButtonStyle }
`;

const StyledHref = styled.a`
    ${ defaultPrimaryButtonStyle }
`;

const StyledAnchorLink = styled( AnchorLink )`
    ${ defaultPrimaryButtonStyle }
`;


const ButtonPrimary: FunctionComponent<ButtonType> = ( props ) => {
  const RenderButton = ( props: any ) => {
    if ( props.to ) {
      return <StyledLink to={props.to} {...props}>{props.children}</StyledLink>;
    } else if ( props.href ) {
      return <StyledHref href={props.href} {...props}>{props.children}</StyledHref>;
    } else if ( props.anchor ) {
      return <StyledAnchorLink to={props.anchor} {...props}>{props.children}</StyledAnchorLink>;
    } else {
      return <StyledButton type={props.type} {...props}>{props.children}</StyledButton>;
    }
  };
  return (
    <>
      {
        RenderButton( props )
      }
    </>
  );
};

StyledButton.defaultProps = {
  type: "button",
};

export default ButtonPrimary;
