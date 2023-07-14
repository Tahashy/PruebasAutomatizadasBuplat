

describe('Ingresamos Login',() =>{
    it('Crear Role Atributo',() =>{
        cy.visit('https://cloudbuplat.com/buplat_rt_config/')
        cy.wait(3000)
        cy.typeLogin()
        cy.xpath('//span[@class="sapMTextMaxLine sapMTextLineClamp" and normalize-space()="Security Manager"]',{timeout:6000}).click()
       
        //
        cy.wait(3000)
        cy.get('#__icon23 > .sapUiIconTitle').click()
        cy.wait(3000)
        cy.get('#__item1-navList-1-navListItem-navList-1-0-a > .sapMText').click({force:true})
        cy.wait(15000)
        cy.get('#__xmlview6--add-inner').click()
        cy.get('#__xmlview6--txtName-__clone2-inner').type('RolAtributo')     
        cy.get('#__xmlview6--txtDisplayName-__clone4-inner').type('RolAtributo')     
        cy.get('#__xmlview6--useAttributesRole-handle').click({force:true})
        cy.get('#__xmlview6--save-inner').click()
        cy.get('#__button18-inner').click()

        
  
        
    })  

   
})



