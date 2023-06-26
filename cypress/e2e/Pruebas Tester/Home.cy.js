describe('Pagina de Inicio', () =>{
beforeEach(() =>{
    cy.visit("https://") // ingresamos para no tener estar colocando en cada item
})



    it('El Texto contenido en el h1 es correcto',() =>{
        cy.visit('https://localhost:3000')
        cy.get(h1).contains("texto mostrado")   //encadenamiento de comandos
        cy.getByData("email-input").type("correo.com")
        cy.getByData("submit-button").click()
    })


})