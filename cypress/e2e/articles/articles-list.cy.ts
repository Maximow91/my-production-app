describe('Пользователь заходит на страницу со списком статей', () => {

  beforeEach(()=>{
    cy.login().then(()=>{
      cy.visit('articles')
    })
  })
  it('и статьи успешно подгружаются', () => {
   // cy.intercept('GET','**/articles?*',{fixture: 'articles.json'})
    cy.getByTestId('ArticlesList').should('exist')
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan',3)
  })
  it('в поиске ищет статью', () => {
    cy.createArticle()
    cy.getByTestId('ArticlePage.Input').type("TEST")
    cy.getByTestId('ArticleListItem').should('have.length',1)
    cy.removeArticle('1000')
  })
  it('фильтрует список по тегу "Наука"', () => {
    cy.getByTestId('Tab.SCIENCE').click()
    cy.getByTestId('ArticleListItem').should('have.length',1)
  })
})