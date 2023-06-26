

describe('Ingresamos Login',() =>{
    it('Crear Change Container desde la Tabla',() =>{
        cy.visit('https://cloudbuplat.com/buplat_rt_config/')
        cy.wait(3000)
        cy.get('#__xmlview0--inputUserName-inner',{timeout:8000}).type('ttakemoto')
        cy.get('#__xmlview0--inputPassword-inner',{timeout:8000}).type('1234')
        cy.get('#__xmlview0--btnSubmit-img').click()
        cy.xpath('//span[@class="sapMTextMaxLine sapMTextLineClamp" and normalize-space()="Release Manager"]',{timeout:6000}).click()
     
        cy.get('#__xmlview5--mainTree-rows-row1-treeicon',{timeout:8000}).click()
        cy.get('#__layout0-__clone2').click()
        cy.wait(2000) 
        cy.get('#__button18-inner').click()
        cy.get('#__xmlview5--txtName-__clone59-inner').type('Prueba2024')
        cy.get('#__xmlview5--txtDisplayName-__clone61-inner').type('Prueba2024')
        cy.get('#__xmlview5--selectCCProject-inner').type('PruebaTest{enter}') //.click({force:true})
        cy.wait(2000)
        cy.get('#__xmlview5--selectCCRelease-inner').type('Liberacion13{enter}') //.click({force:true})
        cy.wait(2000)
        cy.get('#__xmlview5--selectCCOwner-inner').type('ttakemoto{enter}') //.click({force:true})
        cy.wait(2000)
        cy.get('#__xmlview5--save-inner').click()
        
       
      

        
  
        
    })  

   
})