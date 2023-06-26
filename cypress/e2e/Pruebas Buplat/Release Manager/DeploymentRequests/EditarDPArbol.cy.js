

describe('Ingresamos Login',() =>{
    it('Editamos DR desde el Arbol',() =>{
        cy.visit('https://cloudbuplat.com/buplat_rt_config/')
        cy.wait(3000)
        cy.get('#__xmlview0--inputUserName-inner',{timeout:8000}).type('ttakemoto')
        cy.get('#__xmlview0--inputPassword-inner',{timeout:8000}).type('1234')
        cy.get('#__xmlview0--btnSubmit-img').click()
        cy.xpath('//span[@class="sapMTextMaxLine sapMTextLineClamp" and normalize-space()="Release Manager"]',{timeout:6000}).click()
     //Activamos El contenedor desde la Tabla
        cy.wait(2000)
        cy.get('#__xmlview5--mainTree-rows-row3-treeicon',{timeout:6000}).click()
        cy.get('#__xmlview5--mainTree-rows-row4-treeicon').click()
        cy.contains('DR_2023').click()
        cy.wait(2000)
        cy.get('#__xmlview5--edit-inner').click()
        cy.get('#__xmlview5--txtDisplayName-__clone20-inner').clear()
        cy.get('#__xmlview5--txtDisplayName-__clone20-inner').type('DR_2023')
        cy.get('#__xmlview5--selectDRProject-inner').type('PruebaTest{enter}')
        cy.get('#__xmlview5--selectDRRelease-inner').type('Liberacion12{enter}')
        cy.get('#__xmlview5--save-inner').click()
        cy.get('#__button17-inner').click()

        
        
       
      

        
    })  

   
})

