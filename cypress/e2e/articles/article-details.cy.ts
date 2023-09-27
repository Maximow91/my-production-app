let currentArticleId =''
describe('Пользователь заходит на страницу статьи', () => {
  beforeEach(()=> {
    cy.login();
    cy.createArticle().then((article)=>{
      currentArticleId = article.id
      cy.visit(`articles/${currentArticleId}`)
    });
  })
  afterEach(()=>{
    cy.removeArticle(currentArticleId);
  })
  it('И видит содержимое статьи', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist')
    cy.getByTestId('ArticleDetails.Title.Header').should('have.text','TEST!!!')
  })
  it('И загружается список рекомендаций', () => {
    cy.getByTestId('ArticlesRecommendationsList').should('exist')
  })
  it('И оставляет комментарий', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist')
    cy.getByTestId('AddCommentForm').scrollIntoView()
    cy.addComment('text')
    cy.getByTestId('CommentCard.Content').should('have.length',1)
  })
  it('И ставит оценку', () => {
   // cy.intercept('GET','**/articles/*',{fixture: 'article-details.json'})
    cy.getByTestId('ArticleDetails.Info').should('exist')
    cy.getByTestId('RatingCard').scrollIntoView()
    cy.setRate(5,'feedback')
    cy.get('[data-selected=true]').should('have.length',5)
})})