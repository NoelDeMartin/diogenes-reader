describe('App', () => {

    beforeEach(() => cy.visit('/'));

    it('Home', () => {
        cy.see('Diogenes Reader');
    });

});
