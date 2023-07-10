

describe('Ingresamos Login',() =>{
    it('Ver Dependencias Position ',() =>{
        cy.visit('https://cloudbuplat.com/buplat_rt_config/')
        cy.wait(3000)
        cy.typeLogin()
        cy.xpath('//span[@class="sapMTextMaxLine sapMTextLineClamp" and normalize-space()="Organizational Structure Manager"]',{timeout:6000}).click()
       
        //Encuentra La compañia 
        cy.wait(3000)
        cy.get('#__xmlview5--mainTree-rows-row0-treeicon').click()
        cy.get('#__xmlview5--mainTree-rows-row1-treeicon').click()
        cy.wait(10000)
        cy.get('#__xmlview5--mainTree-vsb').scrollTo('bottom')
        cy.get('#__xmlview5--mainTree-rows-row14-treeicon').click()
        cy.wait(2000)
        cy.get('#__xmlview5--mainTree-rows-row15-treeicon').click({force:true})
        cy.get('#__xmlview5--mainTree-vsb').scrollTo('bottom')
        cy.get('#__xmlview5--mainTree-rows-row13-treeicon').click()
        cy.get('#__xmlview5--mainTree-vsb').scrollTo('bottom')
        cy.get('#__xmlview5--mainTree-rows-row12-treeicon').click()
        cy.get('#__xmlview5--mainTree-rows-row13-treeicon').click()
        cy.contains('Posicion1').click()
        cy.get('#__xmlview5--viewDependencies-inner').click()
        
        
        
       
      

        
  
        
    })  

   
})