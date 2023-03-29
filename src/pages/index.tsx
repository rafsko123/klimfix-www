import * as React    from "react";
import type {HeadFC} from "gatsby";
import Seo           from "../components/Seo";
import AboutIcons    from "../sections/AboutIcons";
import About         from "../sections/homepage/About";
import Contact       from "../sections/homepage/Contact";
import HeroSlider    from "../sections/homepage/HeroSlider";
import ServicesNew   from "../sections/homepage/ServicesNew";
import Socials       from "../sections/homepage/Socials";


const IndexPage = () => {
  return (
    <>
      <Seo title="Strona główna" description="Oferujemy serwis klimatyzacji samochodowej pielęgnację samochodową, auto detailing oraz car wrapping w Rzeszowie i Tyczynie."/>
      <HeroSlider/>
      <About/>
      <ServicesNew/>
      <AboutIcons/>
      <Contact/>
      <Socials/>
    </>
  );
};

export default IndexPage;

