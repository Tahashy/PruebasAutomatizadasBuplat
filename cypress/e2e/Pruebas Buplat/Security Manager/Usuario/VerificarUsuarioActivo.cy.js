

describe('Ingresamos Login',() =>{
    it('Verificar Activacion Usuario',() =>{
        cy.visit('https://cloudbuplat.com/buplat_rt_config/')
        cy.wait(3000)
        cy.get('#__xmlview0--inputUserName-inner',{timeout:8000}).type('ttester');
        cy.get('#__xmlview0--inputPassword-inner',{timeout:8000}).type('1234');
        cy.get('#__xmlview0--btnSubmit-img').click()
        cy.contains('El usuario no está activo.')
        
    })  

   
})



