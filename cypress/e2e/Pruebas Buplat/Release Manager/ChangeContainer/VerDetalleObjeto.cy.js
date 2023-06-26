

describe('Ingresamos Login',() =>{
    it('Ver Detalle Objeto del Change desde la Tabla',() =>{
        cy.visit('https://cloudbuplat.com/buplat_rt_config/')
        cy.wait(3000)
        cy.get('#__xmlview0--inputUserName-inner',{timeout:8000}).type('ttakemoto')
        cy.get('#__xmlview0--inputPassword-inner',{timeout:8000}).type('1234')
        cy.get('#__xmlview0--btnSubmit-img').click()
        cy.xpath('//span[@class="sapMTextMaxLine sapMTextLineClamp" and normalize-space()="Release Manager"]',{timeout:6000}).click()
     //verificamos El detalle de objeto
        cy.get('#__xmlview5--mainTree-rows-row1-treeicon',{timeout:8000}).click()
        cy.get('#__xmlview5--mainTree-rows-row2-treeicon').click()
        cy.get('#__xmlview5--mainTree-rows-row4-treeicon').click()
        cy.contains('PruebaContador').click({force:true})

        //cy.contains('CC_Prueba').click({force:true})
        
        
       
      

        
  
        
    })  

   
})