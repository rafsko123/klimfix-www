import React             from "react";
import styled            from "styled-components";
import {Section}         from "../../components/layout/Section";
import {Wrapper}         from "../../components/layout/Wrapper";
import ServicesCard      from "../../components/services-card/ServicesCard";
import {useServicesData} from "../../hooks/servicesData/useServicesData";


const StyledWrapper = styled(Wrapper)`
    display: flex;
    justify-content: space-between;
    margin-top: 96px;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        margin-top: 64px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        margin-top: 48px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        flex-wrap: wrap;
        margin-top: 0;
    }
`;

const ServicesItem = styled.div`
    width: calc(50% - 12px);
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        width: 100%;
        &:not(:last-child) {
            margin-bottom: 72px;
        }
    }
`;

const Services = () => {
  const data = useServicesData();

  return (
    <Section>
      <StyledWrapper>
        {
          data.map((element, i) => (
            <ServicesItem key={i}>
              <ServicesCard element={element}/>
            </ServicesItem>
          ))
        }
      </StyledWrapper>
    </Section>
  );
};

export default Services;
