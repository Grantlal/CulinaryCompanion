describe('Page Opens', function() {
    it('Visits our page', function() {
        cy.visit('localhost:5000')

        cy.contains('#leftMenuButton')
      expect(true).to.equal(true)
    })
  })
