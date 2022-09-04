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
`;

const ServicesItem = styled.div`
    width: calc(50% - 12px);
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
