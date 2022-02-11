import * as data from './consts.js';

describe('Creating new user and verification', () => {
    before (()=> {
    cy.visit(data.WEB_URL)});

it('Filling data in the "First Name" field  and verification', () => {
    cy.contains('Add').click()
    cy.get('#firstName').type(data.RANDOM_NAME)
    .should("have.value", data.RANDOM_NAME);
});

it('Filling data in the "Last Name field" and verification', () => {
    cy.get('#lastName').type(data.RANDOM_LAST_NAME)
    .should("have.value", data.RANDOM_LAST_NAME);
});

it('Filling data in the "E-mail" field and verification', () => {
    cy.get('#userEmail').type(data.RANDOM_EMAIL)
    .should("have.value", data.RANDOM_EMAIL);
});

it('Filling data in the "Age" field and verification', () => {
    cy.get('#age').type(data.RANDOM_AGE)
    .should("have.value", data.RANDOM_AGE);
});

it('Filling data in the "Salary" field and verification', () => {
    cy.get('#salary').type(data.RANDOM_NUM)
    .should("have.value", data.RANDOM_NUM);
});

it('Filling data in the "Department" field and verification', () => {
    cy.get('#department').type(data.RANDOM_ADDRESS)
    .should("have.value", data.RANDOM_ADDRESS);
});

it('Submitting data', () => {
    cy.get('#submit').click()
});

// it('Checking the correctness of all data', () => {
//     cy.get('#div.rt-tr-group > div > div:nth-child(1)')
//     .should('include.text', data.RANDOM_NAME);
//     cy.get('lastName')
//     .should('include.text', data.RANDOM_LAST_NAME);
//     cy.get('#.rt-tbody')
//     .should('include.text', data.RANDOM_NAME);
//     cy.get('#.rt-tbody')
// });
});

describe('Checking that user is editable', () => {
it ('Editing data that already exists', () => {
    cy.get('#edit-record-4').click()
});

it('Editing data in the "First Name" field  and verification', () => {
    cy.get('#firstName')
    .clear()
    cy.get('#firstName').type(data.RANDOM_NAME)
    .should("have.value", data.RANDOM_NAME);
});

it('Editing data in the "Last Name field" and verification', () => {
    cy.get('#lastName')
    .clear()
    cy.get('#lastName').type(data.RANDOM_LAST_NAME)
    .should("have.value", data.RANDOM_LAST_NAME);
});

it('Editing data in the "E-mail" field and verification', () => {
    cy.get('#userEmail')
    .clear()
    cy.get('#userEmail').type(data.RANDOM_EMAIL)
    .should("have.value", data.RANDOM_EMAIL);
});

it('Editing data in the "Age" field and verification', () => {
    cy.get('#age')
    .clear()
    cy.get('#age').type(data.RANDOM_AGE)
    .should("have.value", data.RANDOM_AGE);
});

it('Editing data in the "Salary" field and verification', () => {
    cy.get('#salary')
    .clear()
    cy.get('#salary').type(data.RANDOM_NUM)
    .should("have.value", data.RANDOM_NUM);
});

it('Editing data in the "Department" field and verification', () => {
    cy.get('#department')
    .clear()
    cy.get('#department').type(data.RANDOM_ADDRESS)
    .should("have.value", data.RANDOM_ADDRESS);
});

it('Submitting data', () => {
    cy.get('#submit').click()
});
});

describe('Deleting recently created user info and verifying that data deleted', () => {
    it ('Deleting data and checking that each column was deleted', () => {
        cy.get('#delete-record-4').click()
        cy.get(".rt-tbody").should("not.include.text", data.RANDOM_NAME);
        cy.get(".rt-tbody").should("not.include.text", data.RANDOM_LAST_NAME);
        cy.get(".rt-tbody").should("not.include.text", data.RANDOM_EMAIL);
        cy.get(".rt-tbody").should("not.include.text", data.RANDOM_ADDRESS);
    });
});

describe('Checking searching feature', () => {

it('Filling data in the "First Name" field  and verification', () => {
    cy.contains('Add').click()
    cy.get('#firstName').type(data.RANDOM_NAME)
    .should("have.value", data.RANDOM_NAME);
});
    
it('Filling data in the "Last Name field" and verification', () => {
    cy.get('#lastName').type(data.RANDOM_LAST_NAME)
    .should("have.value", data.RANDOM_LAST_NAME);
});
    
it('Filling data in the "E-mail" field and verification', () => {
    cy.get('#userEmail').type(data.RANDOM_EMAIL)
    .should("have.value", data.RANDOM_EMAIL);
});
    
it('Filling data in the "Age" field and verification', () => {
cy.get('#age').type(data.RANDOM_AGE)
    .should("have.value", data.RANDOM_AGE);
});
    
it('Filling data in the "Salary" field and verification', () => {
    cy.get('#salary').type(data.RANDOM_NUM)
    .should("have.value", data.RANDOM_NUM);
});
    
it('Filling data in the "Department" field and verification', () => {
    cy.get('#department').type(data.RANDOM_ADDRESS)
    .should("have.value", data.RANDOM_ADDRESS);
});

it('Submitting data', () => {
    cy.get('#submit').click()
});

it ('Clicking on searchbox field and search user by First Name', () => {
    cy.get('#searchBox').type(data.RANDOM_NAME)
    .should("have.value", data.RANDOM_NAME);
});

it ('Deleting First Name value from searchbox', () => {
    cy.get('#searchBox').click()
    .clear()
});

it ('Clicking on searchbox field and search user by LAST Name', () => {
    cy.get('#searchBox').type(data.RANDOM_LAST_NAME)
    .should("have.value", data.RANDOM_LAST_NAME);
});

it ('Deleting Last Name value from searchbox', () => {
    cy.get('#searchBox').click()
    .clear()
});

it ('Clicking on searchbox field and search user by E-Mail', () => {
    cy.get('#searchBox').type(data.RANDOM_EMAIL)
    .should("have.value", data.RANDOM_EMAIL);
});

it ('Deleting E-mail value from searchbox', () => {
    cy.get('#searchBox').click()
    .clear()
});

it ('Clicking on searchbox field and search user by Age', () => {
    cy.get('#searchBox').type(data.RANDOM_AGE)
    .should("have.value", data.RANDOM_AGE);
});

it ('Deleting Age value from searchbox', () => {
    cy.get('#searchBox').click()
    .clear()
});

it ('Clicking on searchbox field and search user by Salary', () => {
    cy.get('#searchBox').type(data.RANDOM_NUM)
    .should("have.value", data.RANDOM_NUM);
});

it ('Deleting Salary value from searchbox', () => {
    cy.get('#searchBox').click()
    .clear()
});

it ('Clicking on searchbox field and search user by Department', () => {
    cy.get('#searchBox').type(data.RANDOM_ADDRESS)
    .should("have.value", data.RANDOM_ADDRESS);
});

it ('Deleting Department value from searchbox', () => {
    cy.get('#searchBox').click()
    .clear()
})
});


