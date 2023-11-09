import Login from "./PageObject/login"


describe('template spec', () => {
  it('passes', () => {

    const login = new Login ()
    login.logincase()
    // login.logincase2()
    // login.logincase3()
    // login.logincase4()
    
  })
// 
  //   it('passes1', () => {
  //   deleteusers.deletecase()
  //   cy.viewport(1280, 800)
  //   channels.channelscase()
  //   cy.go('back')
  //   cy.go('forward')
  // })
  //   // catalog.catalogscase() 
  //   // search.searchcase()
    
  //   // cy.get('.swiper-slide-active > .style_wrapper__36jro > .banner_content > .pb-\[50px\] > .text-white.md\:w-1\/2 > .font-medium > .text-xl').blur()
  //   // cy.get(':nth-child(2) > .overflow-auto > .swiper > .swiper-wrapper > .swiper-slide-active > #tvChannel > .block').focus()




  //   cy.pause()

  //   //incorrect OTP (negative)
  //   cy.visit("https://uzdplus.uz/registration")
  //   cy.get('.Index_input__U5hFk').type("997778558")
  //   cy.get('#loginButton').click()
  //   cy.get('[data-testid="character-0"]').type(0)
  //   cy.get('[data-testid="character-1"]').type(0)
  //   cy.get('[data-testid="character-2"]').type(0)
  //   cy.get('[data-testid="character-3"]').type(0)
  //   cy.get('[data-testid="character-4"]').type(0)
  //   cy.get('[data-testid="character-5"]').type(0)

  //   //No number (negative)
  //   cy.visit("https://uzdplus.uz/registration")
  //   cy.get('.Index_input__U5hFk').type("       ")
  //   cy.get('#loginButton').click()
  //   cy.get('[data-testid="character-0"]').type(6)
  //   cy.get('[data-testid="character-1"]').type(0)
  //   cy.get('[data-testid="character-2"]').type(3)
  //   cy.get('[data-testid="character-3"]').type(9)
  //   cy.get('[data-testid="character-4"]').type(2)
  //   cy.get('[data-testid="character-5"]').type(7)
    

    


  })


