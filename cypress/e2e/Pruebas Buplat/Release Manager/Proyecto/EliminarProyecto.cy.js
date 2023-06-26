describe('Ingresamos Login',() =>{
    it('Eliminar Proyecto',() =>{
        cy.visit('https://cloudbuplat.com/buplat_rt_config/')
        cy.wait(3000)
        cy.get('#__xmlview0--inputUserName-inner',{timeout:8000}).type('ttakemoto')
        cy.get('#__xmlview0--inputPassword-inner',{timeout:8000}).type('1234')
        cy.get('#__xmlview0--btnSubmit-img').click()
        cy.xpath('//span[@class="sapMTextMaxLine sapMTextLineClamp" and normalize-space()="Release Manager"]',{timeout:6000}).click()
        cy.wait(2000)
        cy.get('#__xmlview5--mainTree-rows-row0-treeicon').click()

        cy.wait(6000)

        cy.get('#__xmlview5--searchText-I').type('PruebaTest02')
        cy.contains("PruebaTest02").rightclick()
        cy.contains('Borrar Proyecto').click({force: true})
        cy.get('#__mbox-btn-0-inner').click()
        cy.get('#__mbox-btn-2-inner').click()

       
        
    })  

   
})


