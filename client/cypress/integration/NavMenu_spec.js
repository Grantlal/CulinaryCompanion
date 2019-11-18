describe('NavMenu is Clickable', function() {
    it('Clicks nav-stuff', function() {
        cy.visit('localhost:5000')

        cy.get('#tab-recipe').click({force: true})
        cy.wait(500)
        cy.get('#tab-Techniques').click({force: true})
        cy.wait(500)
        cy.get('#tab-profile').click({force: true})
        cy.wait(500)
        cy.get('#tab-favorites').click({force: true})

    })
  })
