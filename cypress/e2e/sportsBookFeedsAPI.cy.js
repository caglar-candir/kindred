
describe('Registrations spec', () => {
    const env = Cypress.env('SE')
    it('sportsBookFeedsAPI', () => {
      cy.request({
        method: 'GET',
        url: `https://www.unibet.${env}/sportsbook-feeds/views/sports/a-z`,
      }).then((response) => {
        expect(response.status).to.equal(200);
        const sports = response.body.layout.sections[1].widgets[0].sports;

        // Check each sport name-
        sports.forEach((sport) => {
          expect(sport.name).to.match(/^[a-zA-Z0-9\s]+$/); //There are 2 characters with "&" and "/" 
          expect(Number.isInteger(sport.boCount) && sport.boCount >= 0).to.be.true; //0 is not a positive integer number
          expect(sport.iconUrl).to.match(/^https?:\/\/[^\s/$.?#].[^\s]*$/);
          expect(sport.iconUrl).contains('.svg');
        });
    })
  })
})
