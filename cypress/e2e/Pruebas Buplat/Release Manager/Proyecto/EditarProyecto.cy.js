

describe('Ingresamos Login',() =>{
    it('Editar Proyecto',() =>{
        cy.visit('https://cloudbuplat.com/buplat_rt_config/')
        cy.wait(3000)
        cy.get('#__xmlview0--inputUserName-inner',{timeout:8000}).type('ttakemoto')
        cy.get('#__xmlview0--inputPassword-inner',{timeout:8000}).type('1234')
        cy.get('#__xmlview0--btnSubmit-img').click()
        cy.xpath('//span[@class="sapMTextMaxLine sapMTextLineClamp" and normalize-space()="Release Manager"]',{timeout:6000}).click()
        cy.wait(3000)
        cy.get('#__xmlview5--mainTree-rows-row0-treeicon').click()

        cy.wait(6000)

        cy.get('#__xmlview5--searchText-I').type('PruebaTest')
        cy.contains("PruebaTest").click()
        cy.get('#__xmlview5--edit-img').click()
        cy.get('#__xmlview5--txtName-__clone18-inner').clear()
        cy.get('#__xmlview5--txtName-__clone18-inner').type("PruebaTest")
        cy.get('#__xmlview5--txtDisplayName-__clone20-inner').clear()
        cy.get('#__xmlview5--txtDisplayName-__clone20-inner').type("PruebaTest")
        cy.get('#__xmlview5--ProjectStartDate-icon').click()   
        cy.xpath("//div[@id='__xmlview5--ProjectStartDate-cal']//span[text()='12']").click({force: true})
        cy.get('#__xmlview5--ProjectEndDate-icon').click()
        cy.xpath("//div[@id='__xmlview5--ProjectEndDate-cal']//span[text()='24']").click({force: true})
        cy.wait(2000)
        //cy.get('#__xmlview5--selectProjectState-arrow').click()
        //cy.contains("Open").click({force: true})
        cy.get('#__xmlview5--save-img').click()
        
    })  

   
})