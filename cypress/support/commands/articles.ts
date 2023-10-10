import { Article } from "../../../src/entities/Article";

const defaultArticle = {
  id: "1000",
  title: "TEST!!!",
  userId: "10",
  subtitle: "Что нового в Kotlin за 2022 год?",
  img: "https://developer.okta.com/assets-jekyll/blog/tutorial-kotlin-beginners-guide/kotlin-logo-social-21c8518b19eb96d96f35e0057bb92b7e1281a24820e0fa09e39c42f184bd7faa.png",
  views: 10,
  createdAt: "25.07.2022",
  type: ["IT"],
  blocks: [],
};

export const createArticle = (article?: Article) => {
  cy.request({
    method: "POST",
    url: `http://localhost:8000/articles`,
    headers: { Authorization: "dfdfdfdfdf" },
    body: article ?? defaultArticle,
  }).then(({ body }) => {
    return body;
  });
};

export const removeArticle = (articleId: string) => {
  return cy.request({
    method: "DELETE",
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: "asasf" },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>;
      removeArticle(articleId: string): Chainable<Response<void>>;
    }
  }
}
