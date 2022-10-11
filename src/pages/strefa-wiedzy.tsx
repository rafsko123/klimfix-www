import {HeadFC}         from "gatsby";
import React            from "react";
import SubpageContainer from "../components/layout/SubpageContainer";
import Hero             from "../sections/articles/listing/Hero";


const BlogPage = () => {
  return (
    <SubpageContainer>
      <Hero/>
    </SubpageContainer>
  );
};

export default BlogPage;

export const Head: HeadFC = () => <title>Klimfix | Strefa wiedzy</title>;
