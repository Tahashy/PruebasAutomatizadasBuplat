

describe('Ingresamos Login',() =>{
    it('Creamos DR desde la Tabla',() =>{
        cy.visit('https://cloudbuplat.com/buplat_rt_config/')
        cy.wait(3000)
        cy.get('#__xmlview0--inputUserName-inner',{timeout:8000}).type('ttakemoto')
        cy.get('#__xmlview0--inputPassword-inner',{timeout:8000}).type('1234')
        cy.get('#__xmlview0--btnSubmit-img').click()
        cy.xpath('//span[@class="sapMTextMaxLine sapMTextLineClamp" and normalize-space()="Release Manager"]',{timeout:6000}).click()
     //Creamos deploy
        cy.wait(2000)
        cy.get('#__xmlview5--mainTree-rows-row3-treeicon',{timeout:6000}).click()
        cy.contains('Open').click()
        cy.get('#__button18-inner').click()
        cy.wait(3000)
        cy.get('#__xmlview5--txtDisplayName-__clone101-inner').type('DP_2024')
        cy.get('#__xmlview5--selectDRProject-inner').type('PruebaTest{enter}')
        cy.get('#__xmlview5--selectDRRelease-inner').type('Liberacion13{enter}')
        cy.get('#__xmlview5--save-inner').click()
        cy.get('#__button17-inner').click()
        


        
       
      

        
  
        
    })  

   
})

