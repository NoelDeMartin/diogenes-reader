describe('App', () => {

    beforeEach(() => cy.visit('/'));

    it('Shows welcome', () => {
        cy.see('Welcome to your new app');
    });

});
