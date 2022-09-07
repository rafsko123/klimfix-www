import {FunctionComponent} from "react";
import React               from "react";
import styled              from "styled-components";
import {TitleSm}           from "../typography/TitleSm";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

const IconBox = styled.div`
    width: 80px;
    height: 60px;
    margin-bottom: 24px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        width: 50px;
        height: 50px;
    }
`;

const StyledTitleSm = styled(TitleSm)`
    text-align: center;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        font-size: 12px;
    }
`;

interface Props {
  element: {
    icon: string;
    title: string;
  };
}

const AboutIconCard: FunctionComponent<Props> = ({element}) => {
  return (
    <Container>
      <IconBox>
        <img src={element.icon} alt=""/>
      </IconBox>
      <StyledTitleSm>
        {element.title}
      </StyledTitleSm>
    </Container>
  );
};

export default AboutIconCard;
