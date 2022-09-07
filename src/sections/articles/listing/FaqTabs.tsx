import {useState}          from "react";
import React               from "react";
import styled              from "styled-components";
import {DataFaq}           from "../../../data/DatFaq";
import {TitleSm}           from "../../../components/typography/TitleSm";

import ChevronDownIcon from "../../../assets/icons/chevron-down.svg";
import ChevronUpIcon   from "../../../assets/icons/chevron-up.svg";


const Container = styled.div`
    border-bottom: 1px solid #C6C6C5;
`;

const StyledTitleSm = styled(TitleSm)`
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    text-transform: none;
`;

const FaqItemHeader = styled.div`
    padding: 24px 60px 24px 0;
    background-image: url(${ChevronDownIcon});
    background-repeat: no-repeat;
    background-position: calc(100% - 12px) 50%;
    background-size: 15px 9px;
    cursor: pointer;
`;

const FaqItemContent = styled.div`
    display: none;
    margin-bottom: 24px;
`;

const FaqItem = styled.div`
    border-top: 1px solid #C6C6C5;

    &.active {
        ${FaqItemHeader} {
            background-image: url(${ChevronUpIcon});
        }

        ${FaqItemContent} {
            display: block;
        }
    }
`;

const FaqItemDescription = styled.div`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    padding-right: 60px;
    font-weight: 300;
`;


const FaqTabs = () => {
  const renderFaqItem = (title: string, description: string) => {
    const [active, setActive] = useState<boolean>(false);
    const handleClick         = () => setActive(!active);

    return (
      <FaqItem className={active ? "active" : ""} onClick={handleClick}>
        <FaqItemHeader>
          <StyledTitleSm>
            {title}
          </StyledTitleSm>
        </FaqItemHeader>
        <FaqItemContent>
          <FaqItemDescription>
            {description}
          </FaqItemDescription>
        </FaqItemContent>
      </FaqItem>
    );
  };

  return (
    <Container>
      {
        DataFaq.map((element, i) => (
          <div key={i}>
            {renderFaqItem(element.title, element.description)}
          </div>
        ))
      }
    </Container>
  );
};

export default FaqTabs;
