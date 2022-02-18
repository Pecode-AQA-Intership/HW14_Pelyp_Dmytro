import * as testData from './consts.js';
import {DATA_LOCATORS} from './locators.js';
import * as func from './funcs.js'

describe('Posistive flow testing', () => {
    before (()=> {
    cy.visit('/automation-practice-form')
});

it('Filling data in the "First Name" field  and verification', () => {
    cy.get(DATA_LOCATORS.firstName).type(testData.RANDOM_NAME)
    .should("have.value", testData.RANDOM_NAME);
})

it('Filling data in the "Last Name" field  and verification', () => {
    cy.get(DATA_LOCATORS.lastName).type(testData.RANDOM_LAST_NAME)
    .should("have.value", testData.RANDOM_LAST_NAME);
})

it('Filling data in the "Email" field  and verification', () => {
    cy.get(DATA_LOCATORS.userEmail).type(testData.RANDOM_EMAIL)
    .should("have.value", testData.RANDOM_EMAIL);
})

it('Selecting "Male" gender value and verification', () => {
    cy.get('#gender-radio-1').check({ force: true })
    .should("be.checked");
})

it('Selecting "Female" gender value  and verification', () => {
    cy.get('#gender-radio-2').check({ force: true })
    .should("be.checked");
})

it('Selecting "Other" gender value  and verification', () => {
    cy.get('#gender-radio-3').check({ force: true })
    .should("be.checked");
})

it('Filling data in the "Email" field  and verification', () => {
    cy.get('#userNumber').type(testData.RANDOM_PHONE_NUMBER)
    .should("have.value",testData.RANDOM_PHONE_NUMBER);
})

it('Filling data in the "Email" field  and verification', () => {
    cy.get('#dateOfBirthInput').click()
    cy.get('.react-datepicker__month-select').select("June");
    cy.get('.react-datepicker__year-select').select('1999');
    cy.get('.react-datepicker__day.react-datepicker__day--004').first().click();
    cy.get('#dateOfBirthInput').should("have.value", "04 Jun 1999")
})

it('Choosing random "subject" value', () => {
    cy.get('.subjects-auto-complete__value-container').type(`${func.randomSubject()}{enter}`).click()
    // .should("include.text", func.randomSubject());
})

it('Selecting all values in checkboxes', () => {
    cy.get('[type="checkbox"]').check({ force: true })
    .should("be.checked");
})

it('Filling data in the "Current Adress" field  and verification', () => {
    cy.get('#currentAddress').type(testData.RANDOM_ADDRESS)
    .should("have.value",testData.RANDOM_ADDRESS);
})

it('Filling data in the "State" field  and verification', () => {
    cy.get('#state').type(`${func.randomState()}{enter}`)
    // .should("include.text",func.randomState);
})

it('Filling data in the "City" field  and verification', () => {
    cy.get('#city').click()
    cy.get('#react-select-4-option-0').should('be.visible').click()
    // .should("include.text",func.randomCities);
})
});