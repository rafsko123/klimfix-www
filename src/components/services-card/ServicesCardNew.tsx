import {ReactElement}      from "react";
import {FunctionComponent} from "react";
import React               from "react";
import styled              from "styled-components";
import SkewLeft            from "../../assets/icons/skew-left.svg";
import SkewRight           from "../../assets/icons/skew-right.svg";
import ButtonPrimary       from "../buttons/ButtonPrimary";
import {Description}       from "../typography/Description";
import {TitleMd}           from "../typography/TitleMd";


const Card = styled.div`
    border: 2px solid #00C9FF;
    border-radius: 20px;
    padding: 48px;
    position: relative;
    margin-bottom: 52px;
    background: rgba(0, 51, 112, 0.06);
    min-height: 360px;
    width: calc(50% - 16px);

    &:nth-child(2n) {
        transform: translateY(54px);
    }

    &:not(:nth-child(2n)) {
        margin-right: 32px;
    }

    &:after,
    &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 3;
        width: 100px;
        height: 100px;
        background-repeat: no-repeat;
    }

    &:before {
        top: -2px;
        right: -2px;
        background-position: top right;
        background-image: url(${SkewRight});
    }

    &:after {
        bottom: -2px;
        left: -2px;
        background-position: bottom left;
        background-image: url(${SkewLeft});
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        min-height: 320px;
        padding: 36px 48px 36px 36px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        width: 100%;
        margin-right: 0 !important;
        transform: none !important;
        margin-bottom: 36px;
        min-height: 280px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        padding: 36px 24px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    z-index: 4;
    width: 100%;
    height: 100%;
`;

const IconBox = styled.div`
    width: 70px;
    height: 70px;
    flex-shrink: 0;
    margin-right: 36px;

    img {
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        width: 50px;
        height: 50px;
        margin-right: 22px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        margin-right: 0;
        margin-bottom: 12px;
    }
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        flex-direction: column;
        text-align: center;
    }
`;

const TextBox = styled.div`
    padding-left: 106px;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        padding-left: 72px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        padding-left: 0;
        text-align: center;
    }
`;

const StyledTitleMd = styled(TitleMd)`
    font-size: 34px;
    line-height: 1.1;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        font-size: 26px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        font-size: 22px;
    }
`;

const StyledDescription = styled(Description)`
    font-size: 16px;
    margin: 10px 0 32px 0;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        font-size: 14px;

    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tablet}) {

    }
`;

interface Props {
  element: {
    title: ReactElement | string;
    description: ReactElement | string;
    icon: string;
    slug: string;
    buttonText: string;
  };
}

const ServicesCardNew: FunctionComponent<Props> = ({element}) => {
  return (
    <Card>
      <Wrapper>
        <Header>
          <IconBox>
            <img src={element.icon} alt=""/>
          </IconBox>
          <StyledTitleMd>{element.title}</StyledTitleMd>
        </Header>
        <TextBox>
          <StyledDescription>
            {element.description}
          </StyledDescription>
          {/*@ts-ignore*/}
          <ButtonPrimary anchor={element.slug} title={element.title}>{element.buttonText}</ButtonPrimary>
        </TextBox>
      </Wrapper>
    </Card>
  );
};

export default ServicesCardNew;
