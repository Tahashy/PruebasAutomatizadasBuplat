

describe('Ingresamos Login',() =>{
    it('Crear Role Compuesto',() =>{
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
        cy.get('#__xmlview6--txtName-__clone2-inner').type('RolCompuesto')     
        cy.get('#__xmlview6--txtDisplayName-__clone4-inner').type('RolCompuesto')     
        cy.get('#__xmlview6--isCompositeRole-handle').click({forece:true})
        cy.get('#__xmlview6--addItem-inner').click()



       cy.get('#__xmlview6--selectRole-__clone99') // Selecciona el nodo desplegable
        .click(); // Hace clic para abrir el menú desplegable
        cy.contains('li[role="option"]', 'Superadmin') // Busca la opción por su texto
        .click({force: true}); // Hace clic en la opción encontrada
        //cy.get('#__xmlview6--addItem-inner').click()
        //cy.get('#__xmlview6--selectRole-__clone100') // Selecciona el nodo desplegable
        //.click(); // Hace clic para abrir el menú desplegable
        //cy.contains('li[role="option"]', 'Rol2023') // Busca la opción por su texto
        //.click({force: true});
        cy.get('#__xmlview6--save-inner').click()
        cy.get('#__button18-inner').click()

        
  
        
    })  

   
})



