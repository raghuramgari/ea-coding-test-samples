let festival: string
import pages from "../src/loginPage";
describe('festival', () => {
    it('festival', () => {
        // visit the Url and verfiy
        cy.visit('/');
        cy.url().should('contain', '/');
        const Page = new pages();
        //Print the elements which is visble
        Page.printAllElemnts();
        //Find the length of the element
        Page.lenghts()
    })
})

// })