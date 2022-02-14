import * as testData from `./consts.js`
import {DATA_LOCATORS} from `./locators.js`

describe('Creating new user and verification', () => {
    before (()=> {
    cy.visit(testData.REGISTRATION_FORM_URL)
});

it('Filling data in the "First Name" field  and verification', () => {
    cy.get(DATA_LOCATORS.firstName).type(testData.RANDOM_NAME)
    .should("have.value", testData.RANDOM_NAME);
})
});