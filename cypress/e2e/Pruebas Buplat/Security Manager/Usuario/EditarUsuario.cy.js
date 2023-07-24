

describe('Ingresamos Login',() =>{
    it('Editar Usuario',() =>{
        cy.visit('https://cloudbuplat.com/buplat_rt_config/')
        cy.wait(3000)
        cy.typeLogin()
        cy.xpath('//span[@class="sapMTextMaxLine sapMTextLineClamp" and normalize-space()="Security Manager"]',{timeout:6000}).click()
       
        //
        cy.wait(3000)
        cy.get('#__icon23 > .sapUiIconTitle').click()
        cy.get('#__item1-navList-1-navListItem-navList-1-1-a').click({force:true})
        cy.wait(6000)
        cy.get('#__xmlview6--searchText-I').type('ttester',{force: true} )
        cy.contains('ttester').click()
        cy.get('#__xmlview6--edit-inner').click()


        cy.get('#__xmlview6--buserEmail-inner').scrollIntoView({ block: "nearest", inline: "nearest" })
        .clear({force: true} )
     //Editar Correo 
        cy.get('#__xmlview6--buserEmail-inner').scrollIntoView({ block: "nearest", inline: "nearest" })
        .type('tester2023@gmail.com', { force: true })
        cy.get('#__xmlview6--buserValidityStartDate-icon').click({ force: true })   
        cy.xpath("//div[@id='__xmlview6--buserValidityStartDate-cal']//span[text()='7']").click({force:true})
        cy.get('#__xmlview6--buserValidityEndDate-icon').click({ force: true })
        cy.xpath("//div[@id='__xmlview6--buserValidityEndDate-cal']//span[text()='31']").click({force: true})

        cy.get('#__xmlview6--buserTimezone-inner').scrollIntoView({ block: "nearest", inline: "nearest" })
        .type('America/Bogota{enter}', { force: true })

        cy.get('#__xmlview6--buserDateFormat-arrow').scrollIntoView({ block: 'nearest', inline: 'nearest' })
        .click({ force: true });
        cy.get('#__xmlview6--buserDateFormat')
        .type('dd/MM/yyyy{enter}',{force:true})

        cy.get('#__xmlview6--buserDecimalSeparator-arrow').scrollIntoView({ block: 'nearest', inline: 'nearest' })
        .click({ force: true });
        cy.get('#__xmlview6--buserDecimalSeparator')
        .type(',{enter}',{force:true})

        cy.get('#__xmlview6--buserStartApplication-arrow').scrollIntoView({ block: 'nearest', inline: 'nearest' })
        .click({ force: true });
        cy.get('#__xmlview6--buserStartApplication')
        .type('C{enter}',{force:true})

        cy.get('#__xmlview6--buserLanguage-arrow').scrollIntoView({ block: 'nearest', inline: 'nearest' })
        .click({ force: true });
        cy.get('#__xmlview6--buserLanguage')
        .type('S{enter}',{force:true})

        cy.get('#__xmlview6--buserTimeFormat-arrow').scrollIntoView({ block: 'nearest', inline: 'nearest' })
        .click({ force: true });
        cy.get('#__xmlview6--buserTimeFormat')
        .type('h{enter}',{force:true})

        cy.get('#__xmlview6--buserOnlineStatus-arrow').scrollIntoView({ block: 'nearest', inline: 'nearest' })
        .click({ force: true });
        cy.get('#__xmlview6--buserOnlineStatus')
        .type('O{enter}',{force:true})

        //Informacion de la Empresa

        cy.get('#__xmlview6--buserName-inner').scrollIntoView({ block: 'nearest', inline: 'nearest' })
        .clear({force:true})

        cy.get('#__xmlview6--buserName-inner').scrollIntoView({ block: 'nearest', inline: 'nearest' })
        .type('Tester', { force: true })

        cy.get('#__xmlview6--buserLastName-inner').scrollIntoView({ block: 'nearest', inline: 'nearest' })
        .clear({force:true})

        cy.get('#__xmlview6--buserLastName-inner').scrollIntoView({ block: 'nearest', inline: 'nearest' })
        .type('Prueba', { force: true })
       
        cy.get('#__xmlview6--buserCorporation-inner').scrollIntoView({ block: "nearest", inline: "nearest" })
        .type('Prueba S.A.C{enter}', { force: true })
   
        cy.get('#__xmlview6--buserOrgUnit-inner').scrollIntoView({ block: "nearest", inline: "nearest" })
        .type('Jefe de Area{enter}', { force: true })

        cy.get('#__xmlview6--buserPosition-inner').scrollIntoView({ block: "nearest", inline: "nearest" })
        .type('Auxiliar{enter}', { force: true })

        cy.get('#__xmlview6--buserBoss-inner').scrollIntoView({ block: "nearest", inline: "nearest" })
        .type('Tahashy Takemoto{enter}', { force: true })


        //Direccion 

        cy.get('#__xmlview6--buserCountry-arrow').scrollIntoView({ block: 'nearest', inline: 'nearest' })
        .click({ force: true });
        cy.get('#__xmlview6--buserCountry')
        .type('Pe{enter}',{force:true})

        cy.get('#__xmlview6--buserCity-inner').scrollIntoView({ block: "nearest", inline: "nearest" })
        .clear({force:true})
        cy.get('#__xmlview6--buserCity-inner').scrollIntoView({ block: "nearest", inline: "nearest" })
        .type('La esperanza', { force: true })

        cy.get('#__xmlview6--buserPostalCode-inner').scrollIntoView({ block: "nearest", inline: "nearest" })
        .clear({force:true})
        cy.get('#__xmlview6--buserPostalCode-inner').scrollIntoView({ block: "nearest", inline: "nearest" })
        .type('41', { force: true })

        cy.get('#__xmlview6--buserRegion-inner').scrollIntoView({ block: "nearest", inline: "nearest" })
        .clear({force:true})
        cy.get('#__xmlview6--buserRegion-inner').scrollIntoView({ block: "nearest", inline: "nearest" })
        .type('La libertad', { force: true })

        cy.get('#__xmlview6--buserAddress-inner').scrollIntoView({ block: "nearest", inline: "nearest" })
        .clear({force:true})
        cy.get('#__xmlview6--buserAddress-inner').scrollIntoView({ block: "nearest", inline: "nearest" })
        .type('Av.Manuel Arevalo', { force: true })

        cy.get('#__xmlview6--buserReference-inner').scrollIntoView({ block: "nearest", inline: "nearest" })
        .clear({force:true})
        cy.get('#__xmlview6--buserReference-inner').scrollIntoView({ block: "nearest", inline: "nearest" })
        .type('Esperanza Baja', { force: true })

     //Comunicacion 
     cy.get('#__xmlview6--buserCellphone-inner').scrollIntoView({ block: "nearest", inline: "nearest" })
     .clear({force:true})
     cy.get('#__xmlview6--buserCellphone-inner').scrollIntoView({ block: "nearest", inline: "nearest" })
     .type('123456789', { force: true })
     
     cy.get('#__xmlview6--buserStandartCommMethod-arrow').scrollIntoView({ block: 'nearest', inline: 'nearest' })
     .click({ force: true });
     cy.get('#__xmlview6--buserStandartCommMethod')
     .type('Whatsapp{enter}',{force:true})

     cy.get('#__xmlview6--buserWhatsApp-inner').scrollIntoView({ block: "nearest", inline: "nearest" })
     .clear({force:true})
     cy.get('#__xmlview6--buserWhatsApp-inner').scrollIntoView({ block: "nearest", inline: "nearest" })
     .type('123456789', { force: true })

     //Roles 

     /*cy.get('#__button19-inner').click({force:true})

     cy.get('#__input0-__clone508-inner').scrollIntoView({ block: "nearest", inline: "nearest" })
     .type('Super', { force: true }).scrollIntoView({ block: "nearest", inline: "nearest" })
     cy.contains('Superadmin').click({force:true})
     cy.wait(2000)
    

     cy.get('#__picker2-__clone508-icon').click({ force: true })   
     cy.xpath("//div[@id='__picker2-__clone508-cal']//span[text()='7']").click({force:true})
     cy.get('#__picker3-__clone508-icon').click({ force: true })
     cy.xpath("//div[@id='__picker3-__clone508-cal']//span[text()='31']").click({force: true})*/

    cy.get('#__box0-arrow').scrollIntoView({ block: 'nearest', inline: 'nearest' })
     .click({ force: true });
    cy.contains('Configurator').click({force:true})

    cy.get('#__xmlview6--save-inner').click()

    cy.get('#__button42-inner').click()


    })  

   
})



