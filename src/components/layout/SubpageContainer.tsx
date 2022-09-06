import {ReactNode}         from "react";
import {FunctionComponent} from "react";
import React               from "react";
import styled              from "styled-components";


const Container = styled.div`
    padding-top: 160px;
`;

interface Props {
  children: ReactNode;
}

const SubpageContainer: FunctionComponent<Props> = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default SubpageContainer;
