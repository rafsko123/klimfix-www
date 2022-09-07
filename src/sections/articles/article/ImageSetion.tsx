import {ReactNode}         from "react";
import {FunctionComponent} from "react";
import React               from "react";
import styled              from "styled-components";


const Container = styled.div`
    padding: 12px 0;
    border-radius: 5px;
    overflow: hidden;
`;

const StyledTitleSm = styled.h3`
    padding: 12px 0;
    font-weight: 400;
    font-size: 32px;
    color: ${({theme}) => theme.colors.secondary};
`;

const ImageBox = styled.div`
    padding: 12px 0;
    width: 100%;
    height: 100%;
`;

interface Props {
  title?: string;
  image: ReactNode;
}

const ImageSection: FunctionComponent<Props> = ({title, image}) => {
  return (
    <Container>
      {
        title && <StyledTitleSm>{title}</StyledTitleSm>
      }
      <ImageBox>
        {image}
      </ImageBox>
    </Container>
  );
};

export default ImageSection;
