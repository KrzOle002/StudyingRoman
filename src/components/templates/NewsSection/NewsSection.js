import { AddButton as Button } from "components/atoms/AddButton/AddButton.js";
import {
  ArticleWrapper,
  ContentWrapper,
  NewsSectionHeader,
  NewsWrapper,
  TitleWrapper,
} from "./NewsSection.styles.js";
import axios from "axios";
import { useState, useEffect } from "react";

export const query = `{
  allArticles {
    id
    title
    category
    content
    image{url}
  }
}`;

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .post(
        "https://graphql.datocms.com/",
        {
          query,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_NOT_SECRET_CODE}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <NewsWrapper>
      <NewsSectionHeader>Univeristy news feed</NewsSectionHeader>
      {articles.length > 0 ? (
        articles.map((article) => {
          return (
            <ArticleWrapper key={article.id}>
              <TitleWrapper>
                <h3>{article.title}</h3>
                <p>{article.category}</p>
              </TitleWrapper>
              <ContentWrapper>
                <p>{article.content}</p>
                {article.image ? (
                  <img src={article.image.url} alt="article" />
                ) : null}
              </ContentWrapper>
              <Button isBig>Read More</Button>
            </ArticleWrapper>
          );
        })
      ) : (
        <NewsSectionHeader>Loading....</NewsSectionHeader>
      )}
    </NewsWrapper>
  );
};

export default NewsSection;
