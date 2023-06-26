// / <reference types="cypress" />
// export class Festivals {
class pages {

  printAllElemnts() {
    cy.get('ol').find('li').each(($li, index) => {
      cy.wrap($li).invoke('text').then((text) => {
        cy.log(`Item ${index}: ${text}`)
      });
    });
  }
  lenghts(){
    cy.get('ol').find('li').should('have.length', 36).each(($li, index) => {
      cy.wrap($li).invoke('text').then((text) => {
        cy.log(`Item ${index}: ${text}`);
        expect(text).to.have.length.greaterThan(0);
      });
    });
  }
}

export default pages;
