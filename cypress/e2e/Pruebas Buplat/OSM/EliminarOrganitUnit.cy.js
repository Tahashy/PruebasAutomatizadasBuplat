

describe('Ingresamos Login',() =>{
    it('Eliminar Organi Unit',() =>{
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
        cy.contains('Unidad2').rightclick()
        cy.get('#__item4-unifiedmenu-txt').click({force:true})
        cy.get('#__mbox-btn-0-inner').click()
        cy.get('#__mbox-btn-2-inner').click()
        
        //Ver Dependencia
       
      

        
  
        
    })  

   
})