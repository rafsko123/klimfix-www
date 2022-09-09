import React                                     from "react";
import {FacebookShareButton, TwitterShareButton} from "react-share";
import styled                                    from "styled-components";
import {TitleLg}                                 from "../../../components/typography/TitleLg";
import {useLocation}                             from "@reach/router";

import FbIcon from "../../../assets/icons/fb_blog.svg";
import TwIcon from "../../../assets/icons/tw_blog.svg";


const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 80px 0 100px 0;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        margin: 60px 0 80px 0;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        flex-direction: column;
        text-align: center;
    }
`;

const ButtonsWrapper = styled.div`
    display: flex;
    align-items: center;

    button {
        &:not(:last-child) {
            margin-right: 36px;
        }
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        button {
            &:not(:last-child) {
                margin-right: 18px;
            }
        }
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        margin-top: 36px;
    }
`;

const StyledTitleLg = styled(TitleLg)`
    color: ${({theme}) => theme.colors.primary};
`;

const SocialIcon = styled.img`
    width: 64px;
    height: 64px;
    cursor: pointer;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        width: 48px;
        height: 48px;
    }
`;

const SocialsShare = () => {
  const location = useLocation();

  return (
    <Container>
      <StyledTitleLg as="h4">
        Podziel się tym<br/> artykułem z Innymi!
      </StyledTitleLg>
      <ButtonsWrapper>
        <FacebookShareButton url={location.href}>
          <SocialIcon src={FbIcon} alt=""/>
        </FacebookShareButton>
        <TwitterShareButton url={location.href}>
          <SocialIcon src={TwIcon} alt=""/>
        </TwitterShareButton>
      </ButtonsWrapper>
    </Container>
  );
};

export default SocialsShare;
