import React from "react";
import styled from "styled-components";
import { Wrapper } from "../../components/layout/Wrapper";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import ServiceCard, { Service } from "../../components/detailing/ServiceCard";

const StyledWrapper: any = styled( Wrapper )`
    margin: 80px auto;
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptop }) {
        margin-top: 64px;
    }
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.tabletBig }) {
        margin-top: 48px;
    }
`;

const ServicesMobileMenu = styled( Wrapper )`
  display: none;
  @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.tablet }) {
    display: flex;
    flex-wrap: wrap;
    max-width: 648px;
    margin-top: 48px;
    margin-bottom: -12px;
  }
`

const StyledAnchorLink = styled( AnchorLink )`
 width: 50%;
 margin-bottom: 12px;
 text-transform: uppercase;
 text-align: center;
 @media screen and (max-width: 450px) {
  font-size: 14px;
 }
@media screen and (max-width: 390px) {
  font-size: 12px;
 }
 @media screen and (max-width: 330px) {
  font-size: 11px;
 }
`


const Services = ( { services }: { services: Service[] } ) => {
  const services_rendered = services.map( ( element ) => ( { title: element.short_title, id: element.id } ) )
  return (
    <>
      <ServicesMobileMenu>
        {
          services_rendered.map( ( element, index ) => (
            <StyledAnchorLink to={`/#${ element.id }`} key={index}>{element.title}</StyledAnchorLink>
          ) )
        }
      </ServicesMobileMenu>
      <StyledWrapper id="content">
        {
          services.map( ( service, index ) => (
            <ServiceCard service={service} key={index} />
          ) )
        }
      </StyledWrapper>
    </>
  );
};

export default Services;
