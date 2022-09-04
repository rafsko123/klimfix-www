import * as React    from "react";
import type {HeadFC} from "gatsby";
import AboutIcons    from "../sections/AboutIcons";
import About         from "../sections/homepage/About";
import Contact       from "../sections/homepage/Contact";
import HeroSlider    from "../sections/homepage/HeroSlider";
import Services      from "../sections/homepage/Services";
import Socials       from "../sections/homepage/Socials";


const IndexPage = () => {
  return (
    <>
      <HeroSlider/>
      <About/>
      <Services/>
      <AboutIcons/>
      <Contact/>
      <Socials />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Klimfix | Strona główna</title>;
