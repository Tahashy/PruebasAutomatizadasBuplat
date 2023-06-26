

describe('Ingresamos Login',() =>{
    it('Eliminar Release',() =>{
        cy.visit('https://cloudbuplat.com/buplat_rt_config/')
        cy.wait(3000)
        cy.get('#__xmlview0--inputUserName-inner',{timeout:8000}).type('ttakemoto')
        cy.get('#__xmlview0--inputPassword-inner',{timeout:8000}).type('1234')
        cy.get('#__xmlview0--btnSubmit-img').click()
        cy.xpath('//span[@class="sapMTextMaxLine sapMTextLineClamp" and normalize-space()="Release Manager"]',{timeout:6000}).click()
        cy.wait(2000)
        cy.get('#__xmlview5--mainTree-rows-row0-treeicon').click()
        cy.wait(6000) 
        cy.get('#__xmlview5--mainTree-vsb').scrollTo('bottom')
        cy.wait(4000) 
        cy.contains("PruebaTest").click() 
        cy.get('#__xmlview5--useInReleases-handle.sapMSwtHandle').click()   
        cy.get('#__xmlview5--mainTree-vsb').scrollTo('bottom')
        cy.get('#__xmlview5--mainTree-rows-row4-treeicon').click()  // Se muestra la carpeta de Liberaciones
        cy.get('#__xmlview5--mainTree-rows-row5-treeicon').click()
       
        //cy.get('#__item2-unifiedmenu-txt').click({force:true})
       
        cy.contains('Liberacion11').rightclick()
        cy.wait(2000)
        cy.get('#__item4-unifiedmenu-txt').click({force:true})
        cy.get('#__mbox-btn-0-inner').click()
        cy.get('#__mbox-btn-2-inner').click()

        
  
        
    })  

   
})