
import { Festivals } from '../src/helpers';

context('Music festivals', () => {
  let festival: string, expectedFestivalLinks:string;
    
  beforeEach(() => {
    cy.fixture('festival.json').then(data => (festival = data));
    cy.visit('/');
    cy.wait(1000);
  });

  it('Validate the title and Navigation url', () => {
    Festivals.getTitle('EaCodingTest');
    Festivals.shouldIncludeInUrl('/festivals');
  })

  it('Validate the number of festival in the list', () => {
    Festivals.lengthOffestivals();
  })

  it.skip('Validate festivals in the list', () => {
    Festivals.getfestivalList(expectedFestivalLinks);
  })

})