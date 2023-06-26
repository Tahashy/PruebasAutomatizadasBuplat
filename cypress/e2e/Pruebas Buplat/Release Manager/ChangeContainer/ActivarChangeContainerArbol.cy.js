

describe('Ingresamos Login',() =>{
    it('Activar Change Container desde el Arbol',() =>{
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
        cy.contains('CC_Prueba').rightclick()
        cy.contains('Activar').click({force:true})
        cy.get('#__mbox-btn-0-inner').click()
        

        
        
       
      

        
  
        
    })  

   
})