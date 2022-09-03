import * as React    from "react";
import type {HeadFC} from "gatsby";
import About         from "../sections/homepage/About";
import HeroSlider    from "../sections/homepage/HeroSlider";


const IndexPage = () => {
  return (
    <>
      <HeroSlider/>
      <About/>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Klimfix | Strona główna</title>;
