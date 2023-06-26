describe('Ingresamos Login',() =>{
    it('Ingresamos Datos',() =>{
        cy.visit('https://cloudbuplat.com/buplat_rt_config/')
        cy.get('#__xmlview0--inputUserName-inner',{timeout:8000}).type('ttakemoto')
        cy.get('#__xmlview0--inputPassword-inner',{timeout:8000}).type('1234')
        cy.get('#__xmlview0--btnSubmit-img').click()
        
    })

   
})

