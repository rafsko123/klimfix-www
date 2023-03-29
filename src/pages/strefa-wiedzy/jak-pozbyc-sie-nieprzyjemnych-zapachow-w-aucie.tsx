import React             from "react";
import styled            from "styled-components";
import {Wrapper}         from "../../components/layout/Wrapper";
import Seo               from "../../components/Seo";
import {useArticlesData} from "../../hooks/articlesData/useArticlesData";
import Hero              from "../../sections/articles/article/Hero";
import HeroDescription   from "../../sections/articles/article/HeroDescription";
import ImageSection      from "../../sections/articles/article/ImageSetion";
import SocialsShare      from "../../sections/articles/article/SocialsShare";
import TextSection       from "../../sections/articles/article/TextSection";
import {ARTICLE_2}       from "../../types/Articles";


const ArticleWrapper = styled(Wrapper)`
    max-width: 960px;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        max-width: 720px;
    }
`;

const Article_2 = () => {
  const data: any = useArticlesData(ARTICLE_2);

  return (
    <>
      <Seo title={data.title} description={data.metaDescription}/>
      <Hero title={data.title} image={data.hero}/>
      <ArticleWrapper>
        <HeroDescription subtitle={data.subtitle} description={data.description}/>
        <ImageSection image={data.sections.image.first.image}/>
        <TextSection title={data.sections.text.first.title} description={data.sections.text.first.description}/>
        <SocialsShare/>
      </ArticleWrapper>
    </>
  );
};

export default Article_2;
