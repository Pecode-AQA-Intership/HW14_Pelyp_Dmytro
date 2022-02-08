import * as faker from './variables.js';


describe('Lesson 14 HW', () => {
    before (()=> {
    cy.visit('https://demoqa.com/text-box')});
    it('Verification of the "Full Name" input text box.', () => {
      cy.contains ('Full Name').click()
      cy.get('input[placeholder="Full Name"]')
      .type(faker.RANDOM_NAME)
      .should('have.value', faker.RANDOM_NAME)
    });

it('Verification of the "User Email" input text box.', () => {
   cy.get('#userEmail')
       .type(faker.RANDOM_EMAIL)
       .should('have.value', faker.RANDOM_EMAIL);
});

it('Verification of the "Current Address" input text box.', () => {
    cy.get('#currentAddress')
        .type(faker.RANDOM_ADDRESS)
        .should('have.value', faker.RANDOM_ADDRESS);
    });

it('Verification of the "Permanent Address" input text box.', () => {
    cy.get('#permanentAddress')
        .type(faker.RANDOM_PERMANENT_ADDRESS)
        .should('have.value', faker.RANDOM_PERMANENT_ADDRESS);
    })
    it('Submitting data', () => {
        cy.get('#submit').click()
    });

it('Verification of the output', () => {
    cy.get('#output #name')
    .should('include.text', faker.RANDOM_NAME);
    cy.get('#output #email')
    .should('include.text', faker.RANDOM_EMAIL);
    cy.get('#output #currentAddress')
    .should('include.text', faker.RANDOM_ADDRESS);
    cy.get('#output #permanentAddress')
    .should('include.text', faker.RANDOM_PERMANENT_ADDRESS);
    })
});
