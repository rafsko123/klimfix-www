import React from "react";
import styled from "styled-components";
import ButtonPrimary from "../buttons/ButtonPrimary";

export type Service = {
  title: JSX.Element | string;
  id: string;
  short_title: string;
  image: JSX.Element;
  description: string;
  ctaText: string;
  ctaUrl: string;
}

const ImageColumn = styled.div`
  flex: 1;
  padding-right: 90px;
  @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptopBig }) {
    padding-right: 60px;
  }
  @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.tablet }) {
    width: 100%;
    padding-left: 0 !important;
    padding-right: 0 !important; 
    .gatsby-image-wrapper {
      height: 300px;
    }
  }
  @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.phoneBig }) {
    .gatsby-image-wrapper {
      height: 240px;
    }
  }
`

const TextColumn = styled.div`
  width: 580px;
  h2,p {
    color: #003370;
  }
  h2 {
    font-size: 48px;
    line-height: 1.2;
    font-weight: 500;
  }
  p {
    font-weight: 300;
    font-size: 20px;
    display: block;
    margin: 30px 0;
  }
  @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptop }) {
    width: 440px;
    h2 {
        font-size: 40px;
    }
    p {
      font-size: 16px;
      margin: 24px 0;
    }
  }
  @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptopSmall }) {
    width: 400px;
    h2 {
        font-size: 32px;
    }
    p {
      margin: 24px 0;
    }
  }
  @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.tablet }) {
    width: 100%;
    margin-top: 24px;
    p {
      margin: 12px 0 18px 0;
    }
  }
  @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.phoneBig }) {
    h2 {
      font-size: 24px;
    }
    p {
      font-size: 14px;
    }
  }
`

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 80px;
  }
  &:nth-child(2n) {
    flex-direction: row-reverse;
    ${ ImageColumn } {
      padding-right: 0;
      padding-left: 90px;
    }
  }
  @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptopBig }) {
    &:nth-child(2n) {
      flex-direction: row-reverse;
      ${ ImageColumn } {
        padding-left: 60px;
      }
    }
  }
  @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.tablet }) {
    flex-direction: column !important;
    max-width: 600px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
      &:not(:last-child) {
      margin-bottom: 48px;
    }
  }
`

const ServiceCard = ( { service }: { service: Service } ) => {
  return (
    <Container id={service.id}>
      <ImageColumn>
        {service.image}
      </ImageColumn>
      <TextColumn>
        <h2>{service.title}</h2>
        <p>{service.description}</p>
        <ButtonPrimary href={`tel:${ service.ctaUrl }`}>{service.ctaText}</ButtonPrimary>
      </TextColumn>
    </Container>
  );
};

export default ServiceCard;
