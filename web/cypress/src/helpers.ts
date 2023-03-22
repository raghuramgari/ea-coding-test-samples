export class Festivals {

    static getTitle(value: string) {
        cy.title().should('eq', value)
    }

    static shouldIncludeInUrl(url: string) {
        cy.url().should('include', url);
    }

    static lengthOffestivals() {
        cy.get('ol').children().then(($lis) => {
            expect($lis).to.have.length(18);

        })
    }
   static getfestivalList(festival: string) {
    let expectedFestivalLinks = Object.values(festival.festivalList);   
    cy.get('ol').children().each(($li, index, $list) => {
            cy.wrap($li).invoke("text").then((text) => {
                expect(text).to.contain(expectedFestivalLinks[index]);
                expect($list.length).to.equal(expectedFestivalLinks.length);
            })
        })
    }

}

export const helpersPage = new Festivals();

