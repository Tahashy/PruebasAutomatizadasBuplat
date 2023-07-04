
  
describe('Ingresamos Login',() =>{
    it('Creamos User ',() =>{
        cy.visit('https://cloudbuplat.com/buplat_rt_config/')
        cy.wait(3000)
        cy.typeLogin()
        cy.xpath('//span[@class="sapMTextMaxLine sapMTextLineClamp" and normalize-space()="Security Manager"]',{timeout:6000}).click()

        cy.get('#__icon23 > .sapUiIconTitle').click()
        cy.get('#__item1-navList-1-navListItem-navList-1-1-a').click()
        cy.wait(3000)
        cy.get('#__xmlview6--add-inner',{timeout:10000}).click()

        // Desactivar el desplazamiento automático
        cy.window().then((win) => {
            win.scrollTo(0, 0);
            win.addEventListener('scroll', disableScroll);
          });
          
        cy.wait(4000)
        cy.get('#__xmlview6--buserUsername-inner').type('Test1')
        cy.get('#__xmlview6--buserPassword-inner').type('1234')
        cy.get('#__xmlview6--buserConfirmPassword-inner').click({force: true})
        cy.get('#__xmlview6--buserEmail-inner').type('test1@wedox.com')
        
    
        
    })  

   
})