import {Link}                      from "gatsby";
import {FunctionComponent}         from "react";
import React                       from "react";
import styled                      from "styled-components";
import {defaultPrimaryButtonStyle} from "../../styles/defaultPrimaryButtonStyle";
import {ButtonType}                from "../../types/ButtonType";


const StyledButton = styled.button`
    ${defaultPrimaryButtonStyle}
`;
const StyledLink   = styled(Link)`
    ${defaultPrimaryButtonStyle}
`;
const StyledHref   = styled.a`
    ${defaultPrimaryButtonStyle}
`;

const ButtonPrimary: FunctionComponent<ButtonType> = (props) => {
  const RenderButton = (props: any) => {
    if (props.to) {
      return <StyledLink to={props.to} {...props}>{props.children}</StyledLink>;
    } else if (props.href) {
      return <StyledHref href={props.href} {...props}>{props.children}</StyledHref>;
    } else {
      return <StyledButton type={props.type} {...props}>{props.children}</StyledButton>;
    }
  };
  return (
    <>
      {
        RenderButton(props)
      }
    </>
  );
};
StyledButton.defaultProps                          = {
  type: "button",
};
export default ButtonPrimary;
