describe('Ingresar login',() =>{
    it('Validar Datos Ingresados',() => {
        cy.visit('https://react-redux.realworld.io/#/login?_k=b3uto9')
        cy.get('[placeholder ="Email"]').type('escalinza14@gmail.com')
        cy.get('[placeholder="Password"]').last().type('1234')
        cy.get('.btn').contains('Sign in').click()
       // cy.get(':nth-child(2) > .nav-link').click()
    })

   // it('Cambiar de Opcion' ,() => {
        

   // })
})