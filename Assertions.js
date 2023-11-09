import Login from "./PageObject/registration"




describe('assertions', () => {
  it('case1', () => {
    
      cy.visit("https://uzdplus.uz/registration")
      cy.url().should('include', '/registration')
      .should('contain', 'uzdplus')
      cy.get("[name='phone_number']").should('contain', '+998')
      cy.get('#loginButton').click()
      cy.get('[class="border rounded-[5px] w-8 h-5 flex items-center justify-center border-midGray"]').should('be.visible')
      cy.get('#loginButton').should('have.text', 'Войти').click()
      cy.get("#field-0").type(700500)
      cy.get('[placeholder="Напишите свое имя"]').should('contain', "Напишите своё имя")
      cy.contains('Войти').click()
      cy.wait(8000)
      cy.contains('Исторический').should('be.visible').and('exist')
      cy.contains('Фентези').should('be.visible').and('exist')
      cy.contains('Криминал').should('be.visible').and('exist')
      cy.contains('Детектив').should('be.visible').and('exist')
      cy.contains('Военный').should('be.visible').and('exist')
      cy.contains('Продолжить').should('be.visible').and('exist')
      cy.get('[class="MuiBackdrop-root MuiModal-backdrop css-919eu4" ]').click()


    

    


  })
})

