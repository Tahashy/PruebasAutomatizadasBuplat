

describe('Ingresamos Login',() =>{
    it('Editamos DP desde la Tabla',() =>{
        cy.visit('https://cloudbuplat.com/buplat_rt_config/')
        cy.wait(3000)
        cy.get('#__xmlview0--inputUserName-inner',{timeout:8000}).type('ttakemoto')
        cy.get('#__xmlview0--inputPassword-inner',{timeout:8000}).type('1234')
        cy.get('#__xmlview0--btnSubmit-img').click()
        cy.xpath('//span[@class="sapMTextMaxLine sapMTextLineClamp" and normalize-space()="Release Manager"]',{timeout:6000}).click()
     //Creamos deploy
        cy.wait(2000)
        cy.get('#__xmlview5--mainTree-rows-row2-treeicon',{timeout:8000}).click()
        cy.get('#__layout0-__clone3').click()
        cy.wait(3000)
        cy.contains('DP189').click()
        cy.wait(3000)
        cy.get('#__button19-inner').click()
        cy.get('#__xmlview5--txtDisplayName-__clone101-inner').clear()
        cy.get('#__xmlview5--txtDisplayName-__clone101-inner').type('DP_Allinson')
        cy.get('#__xmlview5--selectDPProject-inner').type('Pruebatest{enter}')
        cy.get('#__xmlview5--selectDPRelease-inner').type('Liberacion12{enter}')
        cy.get('#__xmlview5--save-inner').click()  
        //cy.get('#__button17-inner').click()

        //Liberar desde la Tabla
        /*cy.wait(2000)
        cy.get('#__xmlview5--mainTree-rows-row1-treeicon',{timeout:8000}).click()
        cy.get('#__layout0-__clone2').click({force:true})
        cy.wait(3000)
        cy.contains('Prueba2024').click()
        cy.get('#__button41-inner').click()
        cy.get('#__xmlview5--cbDP-inner').type('DP_Prueba02{enter}')
        cy.get('#__xmlview5--save-inner').click()
        cy.get('#__button17-inner')*/
        


        
       
      

        
  
        
    })  

   
})

