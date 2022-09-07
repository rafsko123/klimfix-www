import React             from "react";
import styled            from "styled-components";
import {Wrapper}         from "../../components/layout/Wrapper";
import {useArticlesData} from "../../hooks/articlesData/useArticlesData";
import Hero              from "../../sections/articles/article/Hero";
import HeroDescription   from "../../sections/articles/article/HeroDescription";
import ImageSection      from "../../sections/articles/article/ImageSetion";
import SocialsShare      from "../../sections/articles/article/SocialsShare";
import TextSection       from "../../sections/articles/article/TextSection";
import {ARTICLE_1}       from "../../types/Articles";


const ArticleWrapper = styled(Wrapper)`
    max-width: 960px;
`;

const Article_1 = () => {
  const data: any = useArticlesData(ARTICLE_1);

  return (
    <>
      <Hero title={data.title} image={data.hero}/>
      <ArticleWrapper>
        <HeroDescription subtitle={data.subtitle} description={data.description}/>
        <TextSection title={data.sections.text.first.title} description={data.sections.text.first.description}/>
        <ImageSection image={data.sections.image.first.image}/>
        <TextSection title={data.sections.text.second.title} description={data.sections.text.second.description}/>
        <TextSection description={data.sections.text.third.description}/>
        <SocialsShare/>
      </ArticleWrapper>
    </>
  );
};

export default Article_1;
