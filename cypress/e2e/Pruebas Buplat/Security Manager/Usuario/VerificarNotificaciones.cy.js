

describe('Ingresamos Login',() =>{
    it('Verificar Notificaciones',() =>{
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
        cy.get('#__xmlview6--add-inner').click()
        cy.wait(3000)
       
        cy.get('#__select0-arrow').click({force:true})
        cy.get('#__item55').click({force:true})
        
     

    

     

    })  

   
})



