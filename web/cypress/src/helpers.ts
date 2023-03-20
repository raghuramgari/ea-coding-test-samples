export class Festivals {

    static getTitle(value: string) {
        cy.title().should('eq', value)
    }

    static shouldIncludeInUrl(url: string) {
        cy.url().should('include', url);
    }

    static lengthOffestivals() {
        cy.get('ol').children('li').then(($lis) => {
            expect($lis).to.have.length(18);

        })
    }
   static getfestivalList(expectedFestivalLinks: string) {
        cy.get('[role="tab"]').each(($li, index, $list) => {
            cy.wrap($li).invoke("text").then((text) => {
                expect(text).to.be.equal(expectedFestivalLinks[index]);
                expect($list.length).to.be.equal(expectedFestivalLinks.length);
            })
        })
    }

}

export const helpersPage = new Festivals();

