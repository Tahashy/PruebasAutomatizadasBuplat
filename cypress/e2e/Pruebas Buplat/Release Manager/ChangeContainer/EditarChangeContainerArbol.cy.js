

describe('Ingresamos Login',() =>{
    it('Editar Change Container desde el Arbol',() =>{
        cy.visit('https://cloudbuplat.com/buplat_rt_config/')
        cy.wait(3000)
        cy.get('#__xmlview0--inputUserName-inner',{timeout:8000}).type('ttakemoto')
        cy.get('#__xmlview0--inputPassword-inner',{timeout:8000}).type('1234')
        cy.get('#__xmlview0--btnSubmit-img').click()
        cy.xpath('//span[@class="sapMTextMaxLine sapMTextLineClamp" and normalize-space()="Release Manager"]',{timeout:6000}).click()
        cy.wait(2000)
        cy.get('#__xmlview5--mainTree-rows-row1-treeicon').click()
        cy.wait(2000) 
        cy.get('#__xmlview5--mainTree-rows-row2-treeicon').click()
        cy.contains('Prueba2023').click()
        cy.get('#__xmlview5--edit-img').click()
        //Leno Datos del Change Container
        cy.get('#__xmlview5--txtName-__clone18-inner').clear()
        cy.get('#__xmlview5--txtName-__clone18-inner').type('Prueba2023')
        cy.get('#__xmlview5--txtDisplayName-__clone20-inner').clear()
        cy.get('#__xmlview5--txtDisplayName-__clone20-inner').type('Prueba2023')
        cy.get('#__xmlview5--selectCCProject-inner').type('PruebaTest{enter}') //.click({force:true})
        cy.wait(2000)
        cy.get('#__xmlview5--selectCCRelease-inner').type('Liberacion12{enter}') //.click({force:true})
        cy.wait(2000)
        cy.get('#__xmlview5--selectCCOwner-inner').type('ttakemoto{enter}') //.click({force:true})
        cy.wait(2000)
        cy.get('#__xmlview5--save-inner').click()
        
       
      

        
  
        
    })  

   
})