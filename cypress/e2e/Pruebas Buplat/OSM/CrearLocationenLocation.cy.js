

describe('Ingresamos Login',() =>{
   it('Crear Location en Location',() =>{
        cy.visit('https://cloudbuplat.com/buplat_rt_config/')
        cy.wait(3000)
        cy.typeLogin()
        cy.xpath('//span[@class="sapMTextMaxLine sapMTextLineClamp" and normalize-space()="Organizational Structure Manager"]',{timeout:6000}).click()
       
        //Encuentra La compañia 
        cy.wait(3000)
        cy.get('#__xmlview5--mainTree-rows-row0-treeicon').click()
        .get('#__xmlview5--mainTree-rows-row1-treeicon')
        .click()
        .wait(6000)
       //Selecciono Nodo Especifico
        cy.get('.sapUiTableTreeIcon.sapUiTableTreeIconNodeClosed') // Selecciona todos los nodos
        .eq(5) // Selecciona el segundo nodo (los índices comienzan desde 0)
        .then(($node) => {
        const nodeElement = $node[0];
        nodeElement.scrollIntoView(); // Desplázate hacia el nodo seleccionado
        cy.wrap(nodeElement).click(); // Hace clic en el nodo seleccionado
        
        });
       
        cy.get('#__xmlview5--mainTree-rows-row9-treeicon').click()
        cy.get('#__xmlview5--mainTree-rows-row10-treeicon').click()
        cy.wait(3000)
        cy.contains('Locations').rightclick({force:true})
        cy.get('#__item7-unifiedmenu-txt').click({force:true})
        cy.get('#__xmlview5--txtName-__clone18-inner').type('LocationDe')
        cy.get('#__xmlview5--txtDisplayName-__clone20-inner').type('LocationDe')
        cy.get('#__xmlview5--save-inner').click()
        cy.get('#__button17-inner').click()   

     
        
    })  

   
})

