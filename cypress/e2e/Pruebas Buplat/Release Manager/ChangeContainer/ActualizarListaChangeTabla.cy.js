

describe('Ingresamos Login',() =>{
    it('Actualizar Change Container desde la Tabla',() =>{
        cy.visit('https://cloudbuplat.com/buplat_rt_config/')
        cy.wait(3000)
        cy.get('#__xmlview0--inputUserName-inner',{timeout:8000}).type('ttakemoto')
        cy.get('#__xmlview0--inputPassword-inner',{timeout:8000}).type('1234')
        cy.get('#__xmlview0--btnSubmit-img').click()
        cy.xpath('//span[@class="sapMTextMaxLine sapMTextLineClamp" and normalize-space()="Release Manager"]',{timeout:6000}).click()
     
        cy.get('#__xmlview5--mainTree-rows-row1-treeicon',{timeout:8000}).click()
        cy.contains('Open').click()
        cy.get('#__button22-inner').click()
        cy.wait(2000)
    })  

   
})