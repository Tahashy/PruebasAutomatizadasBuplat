

describe('Ingresamos Login',() =>{
    it('Editar Company',() =>{
        cy.visit('https://cloudbuplat.com/buplat_rt_config/')
        cy.wait(3000)
        cy.get('#__xmlview0--inputUserName-inner',{timeout:8000}).type('ttakemoto')
        cy.get('#__xmlview0--inputPassword-inner',{timeout:8000}).type('1234')
        cy.get('#__xmlview0--btnSubmit-img').click()
        cy.xpath('//span[@class="sapMTextMaxLine sapMTextLineClamp" and normalize-space()="Organizational Structure Manager"]',{timeout:6000}).click()
       
        //Encuentra La compañia 
        cy.wait(3000)
        cy.get('#__xmlview5--mainTree-rows-row0-treeicon').click()
        cy.get('#__xmlview5--mainTree-rows-row1-treeicon').click()
        cy.wait(10000)
        cy.get('#__xmlview5--mainTree-vsb').scrollTo('bottom')
        cy.contains('Compañia1').click()
        cy.get('#__xmlview5--edit-inner').click()
           
        //Editar 
        cy.get('#__xmlview5--txtName-__clone18-inner').clear()
        cy.get('#__xmlview5--txtName-__clone18-inner').type('Compañia1')
        cy.get('#__xmlview5--txtDisplayName-__clone20-inner').clear()
        cy.get('#__xmlview5--txtDisplayName-__clone20-inner').type('Compañia1')
        cy.get('#__xmlview5--companyTaxNumber-inner').clear()
        cy.get('#__xmlview5--companyTaxNumber-inner').type('1')
        cy.get('#__xmlview5--save-inner').click()
        cy.get('#__button17-inner').click()
        //cy.contains('Nueva Compañia').click({force:true})
      

        
  
        
    })  

   
})