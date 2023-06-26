

describe('Ingresamos Login',() =>{
    it('Verificar la Carpeta Closed Change',() =>{
        cy.visit('https://cloudbuplat.com/buplat_rt_config/')
        cy.wait(3000)
        cy.get('#__xmlview0--inputUserName-inner',{timeout:8000}).type('ttakemoto')
        cy.get('#__xmlview0--inputPassword-inner',{timeout:8000}).type('1234')
        cy.get('#__xmlview0--btnSubmit-img').click()
        cy.xpath('//span[@class="sapMTextMaxLine sapMTextLineClamp" and normalize-space()="Release Manager"]',{timeout:6000}).click()
     

        //Verifico la carpeta Closed
        cy.wait(3000)
        cy.get('#__xmlview5--mainTree-rows-row1-treeicon',{timeout:6000}).click({force:true})
        cy.wait(2000) 
        cy.get('#__layout0-__clone3').click({force:true})
         
    
      
        
       
      

        
  
        
    })  

   
})

