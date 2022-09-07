import React          from "react";
import Image          from "gatsby-image";
import {ArticleImage} from "./artcileImage";


export const ArticleData = () => {
  const images = ArticleImage();

  return {
    title:           "Jak często wykonywać serwis klimatyzacji samochodowej i co to daje?",
    subtitle:        "Jak często wykonywać serwis klimatyzacji samochodwej i co to daje?",
    description:     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet massa sit iaculis venenatis ultrices tincidunt ut tincidunt. Senectus risus etiam ridiculus mauris etiam libero augue sagittis, et.",
    metaDescription: "Lorem ipsum dolor",
    slug:            "jak-czesto-wykonywac-serwis-klimatyzacji-samochodowej",
    hero:            <Image alt="" fluid={images.hero.childImageSharp.fluid}/>,
    list:            <Image alt="" fluid={images.list.childImageSharp.fluid}/>,

    sections:        {
      text: {
               first:  {
                 title:       "Jak często wykonywać serwis?",
                 description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum magna aliquet vitae facilisis. Dolor egestas vel, felis dictumst viverra. Arcu in a auctor fringilla dui libero, vitae sit. Mattis elementum, imperdiet porta id. Sit viverra a molestie amet tellus lectus suspendisse congue. Metus dis neque nec tellus faucibus et et. Massa odio posuere orci cursus dignissim id vulputate feugiat purus. Convallis nisi, est, convallis etiam ipsum enim. Leo nunc, nisi, fringilla id tellus pellentesque amet nisl.",
               },
               second: {
                 title:       "Co daje serwis klimatyzacji samochodowej?",
                 description: "Ut sit eget vestibulum convallis. Penatibus praesent et id consequat ipsum pellentesque. At quis eu etiam hac nisi. Nunc quam tellus urna integer lacus. Sed quam aliquet platea fringilla nunc tristique laoreet. Viverra facilisi sed malesuada tempus varius volutpat. Elementum, non curabitur aliquet in quam viverra quam. Feugiat leo ultrices viverra sit netus donec. Tellus maecenas turpis molestie pretium. Nulla tempus elementum nunc, adipiscing. Accumsan, arcu et integer risus, nunc. Vitae placerat imperdiet lorem scelerisque. Interdum est pretium quam eget viverra amet congue duis. Lacus hendrerit scelerisque magnis euismod sed mauris sit pulvinar urna.",
               },
               third:  {
                 title:       "",
                 description: <>
                                <ul>
                                  <li>Sagittis pharetra porttitor pretium orci mattis eget.</li>
                                  <li>Arcu, condimentum vitae commodo pharetra id habitasse tristique.</li>
                                  <li>Nunc quam egestas eget et.</li>
                                  <li>Accumsan, arcu et integer risus, nunc. Vitae placerat imperdiet lorem scelerisque. Interdum est pretium quam eget viverra amet congue duis. Lacus hendrerit scelerisque magnis euismod sed mauris sit pulvinar urna.</li>
                                </ul>
                              </>,
               },
             },
      image: {
        first: {
          title: "",
          image: <Image alt="" fluid={images.full.childImageSharp.fluid}/>,
        },
      },
    },
  };
};
