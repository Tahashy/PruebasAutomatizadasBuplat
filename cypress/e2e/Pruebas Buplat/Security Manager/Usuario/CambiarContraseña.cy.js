

describe('Ingresamos Login',() =>{
    it('Cambiar Contraseña Usuario',() =>{
        cy.visit('https://cloudbuplat.com/buplat_rt_config/')
        cy.wait(3000)
        cy.get('#__xmlview0--inputUserName-inner',{timeout:8000}).type('ttester');
        cy.get('#__xmlview0--inputPassword-inner',{timeout:8000}).type('1234');
        cy.get('#__xmlview0--btnSubmit-img').click()
       
        cy.get('#__xmlview3--avatarUser').click()
        cy.contains('Cambiar Contraseña').click({force:true})

        cy.get('#__xmlview4--buserCurrentPassword-inner').type('1234')
        cy.get('#__xmlview4--buserNewPassword-inner').type('4321')
        cy.get('#__xmlview4--buserConfirmPassword-inner').type('4321')
        cy.get('#__xmlview4--saveChangePass').click()
        cy.get('#__mbox-btn-0-inner').click()
        cy.wait(2000)

        cy.get('#__xmlview3--avatarUser').click()
        cy.contains('Desconectar').click({force:true})


        cy.wait(4000)

        cy.get('#__xmlview0--inputUserName-inner',{timeout:8000}).type('ttester');
        cy.get('#__xmlview0--inputPassword-inner',{timeout:8000}).type('4321');
        cy.get('#__xmlview0--btnSubmit-img').click()
        
    })  

   
})



