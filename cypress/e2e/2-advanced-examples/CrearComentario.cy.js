describe('Crear y desmarcar articulo Favorito',() =>{
    it('Validar Datos Ingresados',() => {
        cy.visit('https://react-redux.realworld.io/#/login?_k=b3uto9')
        cy.title().should('eq','Conduit')
        cy.location('protocol').should('eq','https:')
        cy.get('[placeholder ="Email"]').type('escalinza14@gmail.com')
        cy.get('[placeholder="Password"]').last().type('1234')
        cy.get('.btn').contains('Sign in').click()
        cy.contains('Your Feed',{timeout:10000}).should('be.visible')
    })

    it('Crear articulo',()=>{
         cy.contains('New Post').click() 
         cy.hash().should('include','#/editor') // Se usa Para Interfaz
        //cy.location('hash').should('include','#/editor') tambien se podria haber usado
        cy.get('[placeholder="Article Title"]').type('Prueba Logica')
        })


})