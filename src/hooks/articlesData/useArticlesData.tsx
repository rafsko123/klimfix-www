import ArticleName   from "../../types/Articles";
import {ArticleData} from "./article_1/articleData";


export const useArticlesData = (name?: string) => {
  const data = {
    [ArticleName.ARTICLE_1]: ArticleData(),
    // [ArticleName.ARTICLE_2]:  Article_2(),
    // [ArticleName.ARTICLE_3]:  Article_3(),
    // [ArticleName.ARTICLE_4]:  Article_4(),
  };

  if (!name) {
    return data;
  }
  return data[name];
};
