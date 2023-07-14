

describe('Ingresamos Login',() =>{
    it('Eliminar Grupo de Usuario',() =>{
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
        cy.get('#__xmlview6--searchText-I').type('RolCompuesto2024')
        cy.get('button[title="Borrar"], button[aria-label="Borrar"]')
        .click(); // Hace clic en el botón con el icono de borrado
        cy.get('#__mbox-btn-0-inner').click()
        cy.get('#__mbox-btn-2-inner').click()
        
  
        
    })  

   
})



