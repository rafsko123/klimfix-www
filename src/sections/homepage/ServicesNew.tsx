import React             from "react";
import styled            from "styled-components";
import {Section}         from "../../components/layout/Section";
import {Wrapper}         from "../../components/layout/Wrapper";
import ServicesCardNew   from "../../components/services-card/ServicesCardNew";
import {useServicesData} from "../../hooks/servicesData/useServicesData";


const StyledWrapper = styled(Wrapper)`
    display: flex;
    flex-wrap: wrap;
    margin-top: 96px;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        margin-top: 64px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        margin-top: 48px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        flex-wrap: wrap;
        margin-top: 0;
    }
`;


const ServicesNew = () => {
  const data = useServicesData();

  return (
    <Section>
      <StyledWrapper>
        {
          data.map((element, index) => (
            <React.Fragment key={index}>
              <ServicesCardNew element={element}/>
            </React.Fragment>
          ))
        }
      </StyledWrapper>
    </Section>
  );
};

export default ServicesNew;
