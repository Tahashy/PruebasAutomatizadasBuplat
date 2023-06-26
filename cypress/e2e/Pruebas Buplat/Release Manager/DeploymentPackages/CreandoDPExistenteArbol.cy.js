

describe('Ingresamos Login',() =>{
    it('Creamos DP desde el Arbol',() =>{
        cy.visit('https://cloudbuplat.com/buplat_rt_config/')
        cy.wait(3000)
        cy.get('#__xmlview0--inputUserName-inner',{timeout:8000}).type('ttakemoto')
        cy.get('#__xmlview0--inputPassword-inner',{timeout:8000}).type('1234')
        cy.get('#__xmlview0--btnSubmit-img').click()
        cy.xpath('//span[@class="sapMTextMaxLine sapMTextLineClamp" and normalize-space()="Release Manager"]',{timeout:6000}).click()

        //Libero Contenedor desde el Arbol Existente
        cy.wait(2000)
        cy.get('#__xmlview5--mainTree-rows-row1-treeicon',{timeout:8000}).click()
        cy.get('#__xmlview5--mainTree-rows-row2-treeicon').click()
        cy.contains('Prueba2023').rightclick()
        cy.contains('Liberar').click({force:true})
        cy.wait(4000)
        cy.get('#__xmlview5--cbDP-inner').type('DP184{enter}')
        cy.get('#__xmlview5--save-inner').click()
        cy.get('#__mbox-btn-0-inner').click()
        
       
      

        
  
        
    })  

   
})

