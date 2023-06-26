    describe('Inicio de sesión', () => {
        it('Iniciar sesión con credenciales válidas', () => {
          cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // Visita la página de inicio de sesión
          cy.get('[name="username"]').type('Admin')    //ingresa usuario 
          cy.get('[placeholder="Password"]').last().type('admin123') //ingresa contraseña
          cy.get('.oxd-button').click() // le da click a button de ingresar
        })
      })
      
      describe("Ingresar a Admin"), () => {
        it("Crear Usuario", () => {
          
        })
      }

  //cy.get('[id="username"]').type('escalinza14@gmail.com') // Ingresa el nombre de usuario
      //cy.get('[id="password"]').type('3CJG74QjbC6n2ST') // Ingresa la contraseña
      //cy.get('submit').click() // Hace clic en el botón de inicio de sesión