

describe('Ingresamos Login',() =>{
    it('Crear Release',() =>{
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
        cy.wait(4000)
        cy.get('#__xmlview5--useInReleases-handle.sapMSwtHandle').click()   
        cy.get('#__xmlview5--mainTree-vsb').scrollTo('bottom')
        cy.get('#__xmlview5--mainTree-rows-row4-treeicon').click()  // Se muestra la carpeta de Liberaciones
        cy.get('#__xmlview5--mainTree-rows-row5-treeicon').click()
        cy.get('#__layout0-__clone5').rightclick()
        cy.wait(2000)
        cy.get('#__item2-unifiedmenu-txt').click({force:true})
       

        cy.get('#__xmlview5--txtName-__clone40-inner').type('Liberacion15')
        cy.get('#__xmlview5--txtDisplayName-__clone42-inner').type('Liberacion15')
        cy.get('#__xmlview5--ReleaseStartDate-icon').click()   
        cy.xpath("//div[@id='__xmlview5--ReleaseStartDate-cal']//span[text()='10']").click({force: true})
        cy.get('#__xmlview5--ReleaseEndDate-icon').click()
        cy.xpath("//div[@id='__xmlview5--ReleaseEndDate-cal']//span[text()='26']").click({force: true})
        cy.get('#__xmlview5--ReleaseID-inner').type('15')
        cy.get('#__xmlview5--selectReleaseState-arrow').click()
        cy.contains('Open').click({force: true})
        cy.get('#__xmlview5--save-img').click()
        cy.wait(6000)
  
        //cy.get('#__xmlview5--detail-cont').scrollTo('top');
        //cy.get('#__text53').contains( 'La Operacion se ha completado con exito');

        //cy.get('#__text55.sapMText sapUiSelectable sapMTextMaxWidth').contains('La Operacion se ha completado con exito')
    })  

   
})