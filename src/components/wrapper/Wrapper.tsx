import {ReactElement}      from "react";
import {FunctionComponent} from "react";
import React               from "react";
import styled              from "styled-components";


const Container = styled.div`
    max-width: ${({theme}) => theme.layoutPartSizes.wrapper.xl};
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;

interface Props {
  children: ReactElement;
}

const Wrapper: FunctionComponent<Props> = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default Wrapper;
