

describe('Ingresamos Login',() =>{
    it('Verificar Validaciones Usuario',() =>{
        cy.visit('https://cloudbuplat.com/buplat_rt_config/')
        cy.wait(3000)
        cy.typeLogin()
        cy.xpath('//span[@class="sapMTextMaxLine sapMTextLineClamp" and normalize-space()="Security Manager"]',{timeout:6000}).click()
       
        //
        cy.wait(3000)
        cy.get('#__icon23 > .sapUiIconTitle').click()
        cy.wait(3000)
        cy.get('#__item1-navList-1-navListItem-navList-1-1-a').click({force:true})
        cy.wait(5000)
        cy.get('#__xmlview6--add-inner').click({force: true} )
        cy.wait(3000)

        cy.get('#__xmlview6--save-inner').click()
        cy.get('#__button38-img').click({force:true})
        cy.contains('Hay errores de validación en el formulario.')

    })  

   
})



