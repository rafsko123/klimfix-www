import React            from "react";
import SubpageContainer from "../components/layout/SubpageContainer";
import ArticlesList     from "../sections/articles/listing/ArticlesList";
import Hero             from "../sections/articles/listing/Hero";


const BlogPage = () => {
  return (
    <SubpageContainer>
      <Hero/>
      {/*<ArticlesList/>*/}
    </SubpageContainer>
  );
};

export default BlogPage;
