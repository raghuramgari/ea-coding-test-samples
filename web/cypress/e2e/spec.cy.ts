
import { Festivals } from '../src/helpers';

context('Music festivals', () => {
  let festival: string
    
  beforeEach(() => {
    cy.fixture('festival.json').then(data => (festival = data));
    cy.visit('/');
    cy.intercept('GET', '/api/v1/festivals*')
  });

  it('Validate the title and Navigation url', () => {
    Festivals.getTitle('EaCodingTest');
    Festivals.shouldIncludeInUrl('/festivals');
  })

  it('Validate the number of festival in the list', () => {
    Festivals.lengthOffestivals();
  })

  it('Validate festivals in the list', () => {
    Festivals.getfestivalList(festival);
  })

})