

describe('Ingresamos Login',() =>{
    it('Eliminar Company',() =>{
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
        cy.contains('Compañia2').rightclick()
        cy.wait(4000)
        cy.get('#__item2-unifiedmenu-txt').click({force:true})
        cy.get('#__mbox-btn-0-inner').click()
        cy.get('#__mbox-btn-2-inner').click()
       
        //cy.contains('Nueva Compañia').click({force:true})
      

        
  
        
    })  

   
})