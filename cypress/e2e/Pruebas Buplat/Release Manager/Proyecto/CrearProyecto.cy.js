

describe('Ingresamos Login',() =>{
    it('Crear Proyecto',() =>{
        cy.visit('https://cloudbuplat.com/buplat_rt_config/')
        cy.get('#__xmlview0--inputUserName-inner',{timeout:8000}).type('ttakemoto')
        cy.get('#__xmlview0--inputPassword-inner',{timeout:8000}).type('1234')
        cy.get('#__xmlview0--btnSubmit-img').click()
        cy.xpath('//span[@class="sapMTextMaxLine sapMTextLineClamp" and normalize-space()="Release Manager"]',{timeout:6000}).click()
        // cy.get('#__content0-__xmlview3--container-7',{timeout:20000}).click()
        cy.get('#__text56-__clone0',{timeout:6000}).rightclick()
        cy.contains("Nuevo Proyecto").click({force: true})
        cy.get('#__xmlview5--txtName-__clone18-inner').type("PruebaTest")





        cy.get('#__xmlview5--txtDisplayName-__clone20-inner').type("PruebaTest")


        cy.get('#__xmlview5--txtDescription-__clone22-inner').type("Contenido")

        
       
        cy.get('#__xmlview5--ProjectStartDate-icon').click()   
        cy.xpath("//div[@id='__xmlview5--ProjectStartDate-cal']//span[text()='6']").click({force: true})
        cy.get('#__xmlview5--ProjectEndDate-icon').click()
        cy.xpath("//div[@id='__xmlview5--ProjectEndDate-cal']//span[text()='24']").click({force: true})
        cy.contains('21').dblclick({force: true})
        cy.get('#__xmlview5--selectProjectState-arrow').click()
        cy.contains("Open").click({force: true})
        cy.get('#__xmlview5--save-img').click()
        //cy.get('#__text58', { timeout: 20000 }).should('have.text', 'La operacion se ha completado con éxito .');
          
        //cy.get('#__text58').contains('La operacion se ha completado con éxito.')
        //cy.get('#__xmlview5--detail-cont',{timeout:10000}).should('contain','La operacion se ha completado con éxito.');
        //cy.get('#__xmlview5--messageSection-content',{timeout:9000}).contains('La operacion se ha completado con éxito.')
    })  




    
    //it('Crear Proyecto',() =>{
       // cy.location('#/ReleaseManager')
    //})

   
})