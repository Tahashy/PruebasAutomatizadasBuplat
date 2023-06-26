

describe('Ingresamos Login',() =>{
    it('Liberamos DP desde el Arbol',() =>{
        cy.visit('https://cloudbuplat.com/buplat_rt_config/')
        cy.wait(3000)
        cy.get('#__xmlview0--inputUserName-inner',{timeout:8000}).type('ttakemoto')
        cy.get('#__xmlview0--inputPassword-inner',{timeout:8000}).type('1234')
        cy.get('#__xmlview0--btnSubmit-img').click()
        cy.xpath('//span[@class="sapMTextMaxLine sapMTextLineClamp" and normalize-space()="Release Manager"]',{timeout:6000}).click()
     //Activamos El contenedor desde la Tabla
        cy.wait(2000)
        cy.get('#__xmlview5--mainTree-rows-row2-treeicon',{timeout:8000}).click()
        cy.contains('Open').click()
        cy.wait(6000)
        cy.contains('DP200').click()
        cy.get('#__button20-inner').click()

        //Libero Deployment desde el Arbol
        cy.wait(2000)
        cy.get('#__xmlview5--cbDR-inner').type('DR_Prueba{enter}')
        cy.wait(4000)
        cy.get('#__xmlview5--save-inner').click()
        cy.get('#__button17-inner').click()

        
        
       
      

        
  
        
    })  

   
})

