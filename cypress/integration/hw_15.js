import * as data from '../fixtures/consts.js';
import { DATA_LOCATORS } from '../fixtures/locators.js'; 
import * as func from '../fixtures/funcs.js';

const { _ } = Cypress;

describe('Creating new user and verification', () => {
    before (()=> {
    cy.visit("/webtables")});

it('Filling data in the "First Name" field  and verification', () => {
    cy.contains('Add').click()
    cy.get(DATA_LOCATORS.firstName).type(data.RANDOM_NAME)
    .should("have.value", data.RANDOM_NAME);
});

it('Filling data in the "Last Name field" and verification', () => {
    cy.get(DATA_LOCATORS.lastName).type(data.RANDOM_LAST_NAME)
    .should("have.value", data.RANDOM_LAST_NAME);
});

it('Filling data in the "E-mail" field and verification', () => {
    cy.get(DATA_LOCATORS.userEmail).type(data.RANDOM_EMAIL)
    .should("have.value", data.RANDOM_EMAIL);
});

it('Filling data in the "Age" field and verification', () => {
    cy.get(DATA_LOCATORS.userAge).type(data.RANDOM_AGE)
    .should("have.value", data.RANDOM_AGE);
});

it('Filling data in the "Salary" field and verification', () => {
    cy.get(DATA_LOCATORS.salary).type(data.RANDOM_NUM)
    .should("have.value", data.RANDOM_NUM);
});

it('Filling data in the "Department" field and verification', () => {
    cy.get(DATA_LOCATORS.department).type(data.RANDOM_ADDRESS)
    .should("have.value", data.RANDOM_ADDRESS);
});

it('Submitting data', () => {
    cy.get(DATA_LOCATORS.submit).click()
});

it('Checking the correctness of all data', () => {
    cy.contains(data.RANDOM_NAME);
    cy.contains(data.RANDOM_LAST_NAME);
    cy.contains(data.RANDOM_EMAIL);
    cy.contains(data.RANDOM_AGE);
    cy.contains(data.RANDOM_NUM);
    cy.contains(data.RANDOM_ADDRESS)
});
});

describe('Checking that user is editable', () => {
it ('Editing data that already exists', () => {
    cy.get(DATA_LOCATORS.editRecord).click()
});

it('Editing data in the "First Name" field  and verification', () => {
    cy.get(DATA_LOCATORS.firstName)
    .clear()
    cy.get(DATA_LOCATORS.firstName).type(data.RANDOM_NAME)
    .should("have.value", data.RANDOM_NAME);
});

it('Editing data in the "Last Name field" and verification', () => {
    cy.get(DATA_LOCATORS.lastName)
    .clear()
    cy.get(DATA_LOCATORS.lastName).type(data.RANDOM_LAST_NAME)
    .should("have.value", data.RANDOM_LAST_NAME);
});

it('Editing data in the "E-mail" field and verification', () => {
    cy.get(DATA_LOCATORS.userEmail)
    .clear()
    cy.get(DATA_LOCATORS.userEmail).type(data.RANDOM_EMAIL)
    .should("have.value", data.RANDOM_EMAIL);
});

it('Editing data in the "Age" field and verification', () => {
    cy.get(DATA_LOCATORS.userAge)
    .clear()
    cy.get(DATA_LOCATORS.userAge).type(data.RANDOM_AGE)
    .should("have.value", data.RANDOM_AGE);
});

it('Editing data in the "Salary" field and verification', () => {
    cy.get(DATA_LOCATORS.salary)
    .clear()
    cy.get(DATA_LOCATORS.salary).type(data.RANDOM_NUM)
    .should("have.value", data.RANDOM_NUM);
});

it('Editing data in the "Department" field and verification', () => {
    cy.get(DATA_LOCATORS.department)
    .clear()
    cy.get(DATA_LOCATORS.department).type(data.RANDOM_ADDRESS)
    .should("have.value", data.RANDOM_ADDRESS);
});

it('Submitting data', () => {
    cy.get(DATA_LOCATORS.submit).click()
});
});

describe('Deleting recently created user info and verifying that data deleted', () => {
    it ('Deleting data and checking that each column was deleted', () => {
        cy.get(DATA_LOCATORS.deleteRecord).click()
        cy.get(".rt-tbody").should("not.include.text", data.RANDOM_NAME);
        cy.get(".rt-tbody").should("not.include.text", data.RANDOM_LAST_NAME);
        cy.get(".rt-tbody").should("not.include.text", data.RANDOM_EMAIL);
        cy.get(".rt-tbody").should("not.include.text", data.RANDOM_ADDRESS);
    });
});

describe('Checking searching feature', () => {

it('Filling data in the "First Name" field  and verification', () => {
    cy.contains('Add').click()
    cy.get(DATA_LOCATORS.firstName).type(data.RANDOM_NAME)
    .should("have.value", data.RANDOM_NAME);
});
    
it('Filling data in the "Last Name field" and verification', () => {
    cy.get(DATA_LOCATORS.lastName).type(data.RANDOM_LAST_NAME)
    .should("have.value", data.RANDOM_LAST_NAME);
});
    
it('Filling data in the "E-mail" field and verification', () => {
    cy.get(DATA_LOCATORS.userEmail).type(data.RANDOM_EMAIL)
    .should("have.value", data.RANDOM_EMAIL);
})

it('Filling data in the "Age" field and verification', () => {
    cy.get(DATA_LOCATORS.userAge).type(data.RANDOM_AGE)
    .should("have.value", data.RANDOM_AGE);
});
    
it('Filling data in the "Salary" field and verification', () => {
    cy.get(DATA_LOCATORS.salary).type(data.RANDOM_NUM)
    .should("have.value", data.RANDOM_NUM);
});
    
it('Filling data in the "Department" field and verification', () => {
    cy.get(DATA_LOCATORS.department).type(data.RANDOM_ADDRESS)
    .should("have.value", data.RANDOM_ADDRESS);
});

it('Submitting data', () => {
    cy.get(DATA_LOCATORS.submit).click()
});

it ('Clicking on searchbox field and search user by First Name', () => {
    cy.get(DATA_LOCATORS.searchBox).type(data.RANDOM_NAME)
    .should("have.value", data.RANDOM_NAME);
});

it ('Deleting First Name value from searchbox', () => {
    cy.get(DATA_LOCATORS.searchBox).click()
    .clear()
});

it ('Clicking on searchbox field and search user by LAST Name', () => {
    cy.get(DATA_LOCATORS.searchBox).type(data.RANDOM_LAST_NAME)
    .should("have.value", data.RANDOM_LAST_NAME);
});

it ('Deleting Last Name value from searchbox', () => {
    cy.get(DATA_LOCATORS.searchBox).click()
    .clear()
});

it ('Clicking on searchbox field and search user by E-Mail', () => {
    cy.get(DATA_LOCATORS.searchBox).type(data.RANDOM_EMAIL)
    .should("have.value", data.RANDOM_EMAIL);
});

it ('Deleting E-mail value from searchbox', () => {
    cy.get(DATA_LOCATORS.searchBox).click()
    .clear()
});

it ('Clicking on searchbox field and search user by Age', () => {
    cy.get(DATA_LOCATORS.searchBox).type(data.RANDOM_AGE)
    .should("have.value", data.RANDOM_AGE);
});

it ('Deleting Age value from searchbox', () => {
    cy.get(DATA_LOCATORS.searchBox).click()
    .clear()
});

it ('Clicking on searchbox field and search user by Salary', () => {
    cy.get(DATA_LOCATORS.searchBox).type(data.RANDOM_NUM)
    .should("have.value", data.RANDOM_NUM);
});

it ('Deleting Salary value from searchbox', () => {
    cy.get(DATA_LOCATORS.searchBox).click()
    .clear()
});

it ('Clicking on searchbox field and search user by Department', () => {
    cy.get(DATA_LOCATORS.searchBox).type(data.RANDOM_ADDRESS)
    .should("have.value", data.RANDOM_ADDRESS);
});

it ('Deleting Department value from searchbox', () => {
    cy.get(DATA_LOCATORS.searchBox).click()
    .clear()
});
});

describe('Sorting table', () => {
    it('Sort First Name by desc and verification', () => {
      cy.get(DATA_LOCATORS.firstNameColumn) 
      .within(() => {
        cy.get(DATA_LOCATORS.generalColumnHeader)
        .should('have.length', 0) 
  
        cy.log('**sort by desc**')
        cy.contains(DATA_LOCATORS.columnHeader, 'First Name').click()
        .then(func.toStrings)
        .then(func.toNumbers)
        .then((names) => {
            const sorted = _.sortBy(names)
            expect(names).to.deep.equal(sorted)
        })
      });
    });

      it('Sort First Name by asc and verification', () => {
        cy.get(DATA_LOCATORS.firstNameColumn) 
        .within(() => {
          cy.get(DATA_LOCATORS.generalColumnHeader)
          .should('have.length', 0)  
    
          cy.log('**sort by asc**')
          cy.contains(DATA_LOCATORS.columnHeader, 'First Name').click()
          .then(func.toStrings)
          .then(func.toNumbers)
          .then((names) => {
              const sorted = _.sortBy(names)
              expect(names).to.deep.equal(sorted)
          })
        });
    });

    it('Sort Last Name by desc and verification', () => {
        cy.get(DATA_LOCATORS.lastNameColumn) 
        .within(() => {
          cy.get(DATA_LOCATORS.generalColumnHeader)
          .should('have.length', 0) 
    
          cy.log('**sort by desc**')
          cy.contains(DATA_LOCATORS.columnHeader, 'Last Name').click()
          .then(func.toStrings)
          .then(func.toNumbers)
          .then((lastnames) => {
              const sorted = _.sortBy(lastnames)
              expect(lastnames).to.deep.equal(sorted)
          })
        });
    });

    it('Sort Last Name by asc and verification', () => {
        cy.get(DATA_LOCATORS.lastNameColumn) 
        .within(() => {
          cy.get(DATA_LOCATORS.generalColumnHeader)
          .should('have.length', 0) 
    
          cy.log('**sort by asc**')
          cy.contains(DATA_LOCATORS.columnHeader, 'Last Name').click()
          .then(func.toStrings)
          .then(func.toNumbers)
          .then((lastnames) => {
              const sorted = _.sortBy(lastnames)
              expect(lastnames).to.deep.equal(sorted)
          })
        });
    });

    it('Sort Age by desc and verification', () => {
        cy.get(DATA_LOCATORS.ageColumn) 
        .within(() => {
          cy.get(DATA_LOCATORS.generalColumnHeader)
          .should('have.length', 0) 
    
          cy.log('**sort by desc**')
          cy.contains(DATA_LOCATORS.columnHeader, 'Age').click()
          .then(func.toStrings)
          .then(func.toNumbers)
          .then((age) => {
              const sorted = _.sortBy(age)
              expect(age).to.deep.equal(sorted)
          })
        });
    });

    it('Sort Age by asc and verification', () => {
        cy.get(DATA_LOCATORS.ageColumn) 
        .within(() => {
          cy.get(DATA_LOCATORS.generalColumnHeader)
          .should('have.length', 0) 
    
          cy.log('**sort by asc**')
          cy.contains(DATA_LOCATORS.columnHeader, 'Age').click()
          .then(func.toStrings)
          .then(func.toNumbers)
          .then((age) => {
              const sorted = _.sortBy(age)
              expect(age).to.deep.equal(sorted)
          })
        });
    });

    it('Sort Email by desc and verification', () => {
        cy.get(DATA_LOCATORS.emailColumn) 
        .within(() => {
          cy.get(DATA_LOCATORS.generalColumnHeader)
          .should('have.length', 0) 
    
          cy.log('**sort by desc**')
          cy.contains(DATA_LOCATORS.columnHeader, 'Email').click()
          .then(func.toStrings)
          .then(func.toNumbers)
          .then((email) => {
              const sorted = _.sortBy(email)
              expect(email).to.deep.equal(sorted)
          })
        });
    });

    it('Sort Email by asc and verification', () => {
        cy.get(DATA_LOCATORS.emailColumn) 
        .within(() => {
          cy.get(DATA_LOCATORS.generalColumnHeader)
          .should('have.length', 0) 
    
          cy.log('**sort by asc**')
          cy.contains(DATA_LOCATORS.columnHeader, 'Email').click()
          .then(func.toStrings)
          .then(func.toNumbers)
          .then((email) => {
              const sorted = _.sortBy(email)
              expect(email).to.deep.equal(sorted)
          })
        });
    });

    it('Sort Salary by desc and verification', () => {
        cy.get(DATA_LOCATORS.salaryColumn) 
        .within(() => {
          cy.get(DATA_LOCATORS.generalColumnHeader)
          .should('have.length', 0) 
    
          cy.log('**sort by desc**')
          cy.contains(DATA_LOCATORS.columnHeader, 'Salary').click()
          .then(func.toStrings)
          .then(func.toNumbers)
          .then((salary) => {
              const sorted = _.sortBy(salary)
              expect(salary).to.deep.equal(sorted)
          })
        });
    });

    it('Sort Salary by asc and verification', () => {
        cy.get(DATA_LOCATORS.salaryColumn) 
        .within(() => {
          cy.get(DATA_LOCATORS.generalColumnHeader)
          .should('have.length', 0) 
    
          cy.log('**sort by asc**')
          cy.contains(DATA_LOCATORS.columnHeader, 'Salary').click()
          .then(func.toStrings)
          .then(func.toNumbers)
          .then((salary) => {
              const sorted = _.sortBy(salary)
              expect(salary).to.deep.equal(sorted)
          })
        });
    });

    it('Sort Department by desc and verification', () => {
        cy.get(DATA_LOCATORS.departmentColumn) 
        .within(() => {
          cy.get(DATA_LOCATORS.generalColumnHeader)
          .should('have.length', 0) 
    
          cy.log('**sort by desc**')
          cy.contains(DATA_LOCATORS.columnHeader, 'Department').click()
          .then(func.toStrings)
          .then(func.toNumbers)
          .then((department) => {
              const sorted = _.sortBy(department)
              expect(department).to.deep.equal(sorted)
          })
        })
    });
    
    it('Sort Department by asc and verification', () => {
        cy.get(DATA_LOCATORS.departmentColumn) 
        .within(() => {
          cy.get(DATA_LOCATORS.generalColumnHeader)
          .should('have.length', 0) 
    
          cy.log('**sort by asc**')
          cy.contains(DATA_LOCATORS.columnHeader, 'Department').click()
          .then(func.toStrings)
          .then(func.toNumbers)
          .then((department) => {
              const sorted = _.sortBy(department)
              expect(department).to.deep.equal(sorted)
          })
        })
    });
    it ("Checking that the 'Action' column isn't sortable", () => {
        cy.get(DATA_LOCATORS.actionColumn).click()
        .should("not.have.class", "-sort-desc")
        cy.get(DATA_LOCATORS.actionColumn).click()
        .should("not.have.class", "-sort-asc")
      });
});