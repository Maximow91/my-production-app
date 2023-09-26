import { resetProfile } from "cypress/support/commands/profile"

let profileId = ''

describe('Пользователь заходит на страницу профиля', () => {
  beforeEach(()=>{
    cy.login().then((data)=>{
       profileId = data.id
       cy.visit(`profile/${data.id}`)
    })
  })
  afterEach(()=>{
    resetProfile(profileId)
  })
  it('и профиль успешно загружактся', () => {
   cy.getByTestId('ProfileCard.firstname').should('have.value','Тест')
   cy.getByTestId('ProfileCard.lastname').should('have.value','Тестович')
  })
  it('и редактирует его', () => {
    const newName = 'new'
    const newLastname = 'new_lastname'
    cy.updateProfile(newName, newLastname)
    cy.getByTestId('ProfileCard.firstname').should('have.value',newName)
    cy.getByTestId('ProfileCard.lastname').should('have.value',newLastname)
  })
})