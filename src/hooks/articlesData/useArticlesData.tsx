import ArticleName                    from "../../types/Articles";
import {ArticleData as ArticleFirst}  from "./article_1/articleData";
import {ArticleData as ArticleSecond} from "./article_2/articleData";
import {ArticleData as ArticleThird} from "./article_3/articleData";
import {ArticleData as ArticleFourth} from "./article_4/articleData";


export const useArticlesData = (name?: string) => {
  const data = {
    [ArticleName.ARTICLE_1]: ArticleFirst(),
    [ArticleName.ARTICLE_2]: ArticleSecond(),
    [ArticleName.ARTICLE_3]:  ArticleThird(),
    [ArticleName.ARTICLE_4]:  ArticleFourth(),
  };

  if (!name) {
    return data;
  }
  return data[name];
};
