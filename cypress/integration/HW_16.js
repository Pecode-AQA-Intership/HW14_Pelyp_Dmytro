import * as testData from '../fixtures/consts.js';
import {DATA_LOCATORS} from '../fixtures/locators.js';
import * as func from '../fixtures/funcs.js';

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
    cy.get(DATA_LOCATORS.maleGender).check({ force: true })
    .should("be.checked");
})

it('Selecting "Female" gender value  and verification', () => {
    cy.get(DATA_LOCATORS.femaleGender).check({ force: true })
    .should("be.checked");
})

it('Selecting "Other" gender value  and verification', () => {
    cy.get(DATA_LOCATORS.otherGender).check({ force: true })
    .should("be.checked");
})

it('Filling data in the "User Number" field  and verification', () => {
    cy.get(DATA_LOCATORS.userNumber).type(testData.RANDOM_PHONE_NUMBER)
    .should("have.value",testData.RANDOM_PHONE_NUMBER);
})

it('Filling data in the "Date of birth" field  and verification', () => {
    cy.get(DATA_LOCATORS.dateOfBirth).click().should('be.visible');
    cy.get(DATA_LOCATORS.month).select("June");
    cy.get(DATA_LOCATORS.year).select('1999');
    cy.get(DATA_LOCATORS.day).first().should('be.visible').click();
    cy.get(DATA_LOCATORS.dateOfBirth).should("have.value", "04 Jun 1999")
})

it('Choosing random "subject" value', () => {
    cy.get(DATA_LOCATORS.subject).type(`${func.randomSubject()}{enter}`).click()
   .should("not.be.empty");
})

it('Selecting all values in checkboxes', () => {
    cy.get(DATA_LOCATORS.checkbox).check({ force: true })
    .should("be.checked");
})

it('Uploading picture', () => {
   cy.get(DATA_LOCATORS.uploadPic).click().selectFile("cypress/fixtures/image/ok.jpg") 
})

it('Filling data in the "Current Adress" field  and verification', () => {
    cy.get(DATA_LOCATORS.currentAddress).type(testData.RANDOM_ADDRESS)
    .should("have.value",testData.RANDOM_ADDRESS);
})

it('Filling data in the "State" field  and verification', () => {
    cy.get(DATA_LOCATORS.state).type(`${func.randomState()}{enter}`)
    .should("not.be.empty");
})

it('Filling data in the "City" field  and verification', () => {
    cy.get(DATA_LOCATORS.city).click().should('be.visible');
    cy.get(DATA_LOCATORS.dropdownValue).should('be.visible').click();
})

it('Submitting Data', () => {
    cy.get(DATA_LOCATORS.submit).click()
    .should('be.visible')
})
it('Checking the correctness of all data', () => {
    cy.get('.modal-body')
    cy.contains(testData.RANDOM_NAME);
    cy.contains(testData.RANDOM_LAST_NAME);
    cy.contains(testData.RANDOM_EMAIL);
    cy.contains('Other');//gender
    cy.contains(testData.RANDOM_PHONE_NUMBER);
    cy.contains('04 June,1999');//date of birth
    cy.contains('Sports, Reading, Music');//hobbies
    cy.contains(testData.RANDOM_ADDRESS);
    cy.should('not.be.empty');
})
});

describe('Negative flow testing', () => { before (()=> {
    cy.visit('/automation-practice-form')
})

it('Filling invalid data in the "First Name" field  and verification', () => {
    cy.get(DATA_LOCATORS.firstName).clear().type('121fs1q2@')
    .should("have.value", '121fs1q2@');
})

it('Filling invalid data in the "Last Name" field  and verification', () => {
    cy.get(DATA_LOCATORS.lastName).type('quihf92@#')
    .should("have.value", 'quihf92@#');
})

it('Filling invalid data in the "Email" field  and verification', () => {
    cy.get(DATA_LOCATORS.userEmail).type('21f23ff@')
    .should("have.value", '21f23ff@');
})

it('Selecting "Male" gender value and verification', () => {
    cy.get(DATA_LOCATORS.maleGender).check({ force: true })
    .should("be.checked");
})

it('Selecting "Female" gender value  and verification', () => {
    cy.get(DATA_LOCATORS.femaleGender).check({ force: true })
    .should("be.checked");
})

it('Selecting "Other" gender value  and verification', () => {
    cy.get(DATA_LOCATORS.otherGender).check({ force: true })
    .should("be.checked");
})

it('Filling invalid data in the "User Number" field  and verification', () => {
    cy.get(DATA_LOCATORS.userNumber).type('teevwe@fwe')
    .should("have.value",'teevwe@fwe');
})

it('Filling invalid data in the "Date of birth" field  and verification (should fail)', () => {
    cy.get(DATA_LOCATORS.dateOfBirth).click()
    cy.get(DATA_LOCATORS.month).select("June");
    cy.get(DATA_LOCATORS.year).select('1899');
    cy.get(DATA_LOCATORS.day).first().click();
    cy.get(DATA_LOCATORS.dateOfBirth).should("not.have.value", "04 Jun 1899")
})

it('Leaving random "subject" value empty', () => {
    cy.get(DATA_LOCATORS.subject)
    .should('not.have.value', 'Ukrainian');
})

it('Selecting all values in checkboxes', () => {
    cy.get(DATA_LOCATORS.checkbox).check({ force: true })
    .should("be.checked");
})

it('Filling data in the "Current Adress" field  and verification', () => {
    cy.get(DATA_LOCATORS.currentAddress).type(testData.RANDOM_ADDRESS)
    .should("have.value",testData.RANDOM_ADDRESS);
})

it('Filling invalid data in the "State" field  and verification', () => {
    cy.get(DATA_LOCATORS.state).type("Lvivs'ka{enter}")
    .should("not.have.value", "Lvivs'ka");
})

it('Ensure that the "City" field is disabled', () => {
    cy.get(DATA_LOCATORS.city)
    .should('not.to.be.disabled');
})

it('Ensure that the "Submit" button is disabled', () => {
    cy.get(DATA_LOCATORS.submit)
    .should('not.to.be.disabled');
})
});