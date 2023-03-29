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
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
    border-radius: 50%;
    box-shadow: 0 0 13px rgba(0, 0, 0, 0.08);
    padding: 28px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        width: 80px;
        height: 80px;
        padding: 24px;
    }
`;

const StyledTitleSm = styled(TitleSm)`
    text-align: center;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        font-size: 16px;
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
