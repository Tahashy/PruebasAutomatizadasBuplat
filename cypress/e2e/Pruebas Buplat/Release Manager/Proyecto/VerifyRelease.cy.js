

describe('Ingresamos Login',() =>{
    it('Verficar Carpeta Release',() =>{
        cy.visit('https://cloudbuplat.com/buplat_rt_config/')
        cy.wait(3000)
        cy.get('#__xmlview0--inputUserName-inner',{timeout:8000}).type('ttakemoto')
        cy.get('#__xmlview0--inputPassword-inner',{timeout:8000}).type('1234')
        cy.get('#__xmlview0--btnSubmit-img').click()
        cy.xpath('//span[@class="sapMTextMaxLine sapMTextLineClamp" and normalize-space()="Release Manager"]',{timeout:6000}).click()
        cy.wait(2000)
        cy.get('#__xmlview5--mainTree-rows-row0-treeicon').click()
        cy.wait(6000)
        cy.get('#__xmlview5--searchText-I').type('PruebaTest')
      
        cy.contains("PruebaTest").click()
        cy.get('#__xmlview5--edit-img').click()
        cy.wait(6000)  
        cy.get('#__xmlview5--useInReleases-handle.sapMSwtHandle').click()    
        cy.get('#__xmlview5--save-img').click()
        cy.get('#__xmlview5--searchText-I').clear()
        cy.get('#__xmlview5--mainTree-vsb').scrollTo('bottom')
        cy.wait(2000)
        cy.get('#__xmlview5--mainTree-rows-row4-treeicon').click()  // Se muestra la carpeta de Liberaciones
        //cy.scrollTo(0, 500)

        
    })  

   
})

