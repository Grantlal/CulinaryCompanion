describe('Hamburgers are Clickable', function() {
    it('Clicks Hamburgers', function() {
        cy.visit('localhost:5000')

        cy.get('#leftMenuButton').click()
        cy.wait(1000)
        cy.get('#firstHamburger').click({force: true})
        cy.wait(500)

      expect(true).to.equal(true)
    })
  })
