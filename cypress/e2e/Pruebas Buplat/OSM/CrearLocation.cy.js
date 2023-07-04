

describe('Ingresamos Login',() =>{
    it('Crear Location',() =>{
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
        cy.get('#__xmlview5--mainTree-vsb').scrollTo('bottom')
        cy.contains('Locations').rightclick()
        cy.get('#__item7-unifiedmenu-txt').click({force:true})
        cy.get('#__xmlview5--txtName-__clone18-inner').type('Location1')
        cy.get('#__xmlview5--txtDisplayName-__clone20-inner').type('Location1')
         cy.get('#__xmlview5--save-inner').click()
         cy.get('#__button17-inner').click()
        
       
      

        
  
        
    })  

   
})