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

export const addComment = (text: string) => {
  cy.getByTestId("AddCommentForm.Input").type(text);
  cy.getByTestId("AddCommentForm.Button").click();
};

declare global {
  namespace Cypress {
    interface Chainable {
      addComment(text: string): Chainable<void>;
    }
  }
}
