class Login {

    logincase () {
      cy.visit("https://uzdplus.uz/registration")
      cy.get("[name='phone_number']").type("008765434")
      cy.get('#loginButton').click()
      cy.get('[class="border rounded-[5px] w-8 h-5 flex items-center justify-center border-midGray"]').click()
      cy.get('#loginButton').should('have.text', 'Войти').click()
      cy.get("#field-0").type(700500)
      cy.get('[placeholder="Напишите свое имя"]').type("User123")
      cy.contains('Войти').click()
      cy.wait(8000)
      cy.contains('Исторический').click()
      cy.contains('Фентези').click()
      cy.contains('Криминал').click()
      cy.contains('Детектив').click()
      cy.contains('Военный').click()
      cy.contains('Продолжить').click()
      cy.get('[class="MuiBackdrop-root MuiModal-backdrop css-919eu4" ]').click()
    }

    logincase2 () {
      cy.visit("https://uzdplus.uz/registration")
      cy.get("[name='phone_number']").type(" ")  //space
      cy.get('#loginButton').click()
      cy.get('[class="border rounded-[5px] w-8 h-5 flex items-center justify-center border-midGray"]').click()
      cy.get('#loginButton').click()
      cy.get("#field-0").type(700500)
      cy.get('[placeholder="Напишите свое имя"]').type("User123")
      cy.contains('Войти').click()
    }

    logincase3 () {
    cy.visit("https://uzdplus.uz/registration")
      cy.get("[name='phone_number']").type("008765420")
      cy.get('#loginButton').click()
      cy.get('[class="border rounded-[5px] w-8 h-5 flex items-center justify-center border-midGray"]').click()
      cy.get('#loginButton').click()
      cy.get("#field-0").type(700700) //incorrect OTP
      cy.get('[placeholder="Напишите свое имя"]').type("User123")
      cy.contains('Войти').click()
  }
      
        
 logincase4 () {
    cy.visit("https://uzdplus.uz/registration")
      cy.get("[name='phone_number']").type("008765431")
      cy.get('#loginButton').click()
      cy.get('[class="border rounded-[5px] w-8 h-5 flex items-center justify-center border-midGray"]').click()
      cy.get('#loginButton').click()
      cy.get("#field-0").type(700500)
      cy.get('[placeholder="Напишите свое имя"]').type("     ") //space
      cy.contains('Войти').click()
  }
      
    
}


export default Login