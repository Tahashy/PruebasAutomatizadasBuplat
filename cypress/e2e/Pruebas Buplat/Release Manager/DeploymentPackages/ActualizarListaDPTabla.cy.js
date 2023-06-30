

describe('Ingresamos Login',() =>{
    it('Actualizamos DP desde la Tabla',() =>{
        cy.visit('https://cloudbuplat.com/buplat_rt_config/')
        cy.wait(3000)
        cy.get('#__xmlview0--inputUserName-inner',{timeout:8000}).type('ttakemoto')
        cy.get('#__xmlview0--inputPassword-inner',{timeout:8000}).type('1234')
        cy.get('#__xmlview0--btnSubmit-img').click()
        cy.xpath('//span[@class="sapMTextMaxLine sapMTextLineClamp" and normalize-space()="Release Manager"]',{timeout:6000}).click()
     //Creamos deploy
        cy.wait(2000)
        cy.get('#__xmlview5--mainTree-rows-row2-treeicon',{timeout:8000}).click()
        cy.contains('Open').click()
        cy.get('#__button21-inner').click()
        cy.wait(3000)
       
       
        
        


        
       
      

        
  
        
    })  

   
})

