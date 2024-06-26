import React from "react";
import styled from "styled-components";
import { Wrapper } from "../../components/layout/Wrapper";
import Seo from "../../components/Seo";
import { useArticlesData } from "../../hooks/articlesData/useArticlesData";
import Hero from "../../sections/articles/article/Hero";
import HeroDescription from "../../sections/articles/article/HeroDescription";
import ImageSection from "../../sections/articles/article/ImageSetion";
import TextSection from "../../sections/articles/article/TextSection";
import { ARTICLE_1 } from "../../types/Articles";
import { Baner } from "../../sections/articles/article/Baner";


const ArticleWrapper = styled( Wrapper )`
    max-width: 960px;
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptop }) {
        max-width: 720px;
    }
`;

const Article_1 = () => {
  const data: any = useArticlesData( ARTICLE_1 );

  return (
    <>
      <Seo title={data.title} description={data.metaDescription} />
      <Hero title={data.title} image={data.hero} />
      <ArticleWrapper>
        <HeroDescription subtitle={data.subtitle} description={data.description} />
        <TextSection title={data.sections.text.first.title} description={data.sections.text.first.description} />
        <ImageSection image={data.sections.image.first.image} />
        <TextSection title={data.sections.text.second.title} description={data.sections.text.second.description} />
        <Baner />
      </ArticleWrapper>
    </>
  );
};

export default Article_1;
