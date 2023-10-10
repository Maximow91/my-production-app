export const updateProfile = (newName: string, newLastName: string) => {
  cy.getByTestId("EditableProfileCardHeader.EditBtn").click();
  cy.getByTestId("ProfileCard.firstname").clear().type(newName);
  cy.getByTestId("ProfileCard.lastname").clear().type(newLastName);
  cy.getByTestId("EditableProfileCardHeader.SaveBtn").click();
};

export const resetProfile = (profileId: string) => {
  return cy.request({
    method: "PUT",
    url: `http://localhost:8000/profile/` + profileId,
    headers: { Authorization: "dfdfdfdfdf" },
    body: {
      id: "10",
      firstname: "Тест",
      lastname: "Тестович",
      age: 32,
      currency: "EUR",
      country: "Kazahstan",
      city: "Madrid",
      username: "admin",
      avatar:
        "https://thumbs.dreamstime.com/b/haker-guy-hoodie-crypto-currency-concept-dark-background-d-rendering-mixed-media-161555772.jpg",
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(newName: string, newLastName: string): Chainable<void>;
      resetProfile(profileId: string): Chainable<Response<any>>;
    }
  }
}
