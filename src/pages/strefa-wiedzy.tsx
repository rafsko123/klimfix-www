import React            from "react";
import SubpageContainer from "../components/layout/SubpageContainer";
import Seo              from "../components/Seo";
import ArticlesList     from "../sections/articles/listing/ArticlesList";
import Hero             from "../sections/articles/listing/Hero";


const BlogPage = () => {
  return (
    <>
      <Seo title="Strefa wiedzy" description="Krótkie pytania i krótkie odpowiedzi - strefa wiedzy serwisu KLIMFIX"/>
      <SubpageContainer>
        <Hero/>
        <ArticlesList/>
      </SubpageContainer>
    </>
  );
};

export default BlogPage;
