

describe('Ingresamos Login',() =>{
    it('Crear Grupo de Usuario',() =>{
        cy.visit('https://cloudbuplat.com/buplat_rt_config/')
        cy.wait(3000)
        cy.typeLogin()
        cy.xpath('//span[@class="sapMTextMaxLine sapMTextLineClamp" and normalize-space()="Security Manager"]',{timeout:6000}).click()
       
        //
        cy.wait(3000)
        cy.get('#__icon23 > .sapUiIconTitle').click()
        cy.wait(3000)
        cy.get('#__item1-navList-1-navListItem-navList-1-2-a > .sapMText').click({force:true})
        cy.wait(5000)
        cy.get('#__xmlview6--add-inner').click()
        cy.get('#__xmlview6--txtName-__clone2-inner').type('RolCompuesto2023')     
        cy.get('#__xmlview6--txtDisplayName-__clone4-inner').type('RolCompuesto2023')     
        cy.get('#__xmlview6--save-inner').click()
        cy.get('#__button17-inner').click()

        
  
        
    })  

   
})



