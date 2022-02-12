import * as data from './consts.js';
import { DATA_LOCATORS } from './locators.js'; 

describe('Creating new user and verification', () => {
    before (()=> {
    cy.visit(data.WEB_URL)});

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
    cy.get('#submit').click()
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
    cy.get('#submit').click()
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
})

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

describe('Sorting table', () => {
    it('Sort First Name by desc', () => {
      cy.get('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-thead.-header > div > div:nth-child(1) > div.rt-resizable-header-content') 
      .within(() => {
        cy.get('[role=columnheader] .ag-row')
        .should('have.length', 0) 
  
        cy.log('**sort by desc**')
        cy.contains('.rt-resizable-header-content', 'First Name').click()
        cy.contains('.rt-resizable-header-content', 'First Name')
    })
})

      it('Sort First Name by asc', () => {
        cy.get('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-thead.-header > div > div:nth-child(1) > div.rt-resizable-header-content') 
        .within(() => {
          cy.get('[role=columnheader] .ag-row')
          .should('have.length', 0)  
    
          cy.log('**sort by asc**')
          cy.contains('.rt-resizable-header-content', 'First Name').click()
          cy.contains('.rt-resizable-header-content', 'First Name')
        })
    })
    //   const toStrings = (cells$) => _.map(cells$, 'First Name')
    //   const toNumbers = (prices) => _.map(prices, Number)

    //   cy.get('[col-id=price].ag-cell')
    //   .then(toStrings)
    //   .then(toNumbers)
    //   .then((prices) => {
    //     // confirm prices are sorted
    //     // by sorting them ourselves
    //     // and comparing with the input list
    //     const sorted = _.sortBy(prices)

    //     expect(prices, 'cells are sorted 📈').to.deep.equal(sorted)
    //   })
    // })

      it('Sort Last Name by desc', () => {
        cy.get('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-thead.-header > div > div:nth-child(2) > div.rt-resizable-header-content') 
        .within(() => {
          cy.get('[role=columnheader] .ag-row')
          .should('have.length', 0) 
    
          cy.log('**sort by desc**')
          cy.contains('.rt-resizable-header-content', 'Last Name').click()
          cy.contains('.rt-resizable-header-content', 'Last Name')
        })
    })

    it('Sort Last Name by asc', () => {
        cy.get('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-thead.-header > div > div:nth-child(2) > div.rt-resizable-header-content') 
        .within(() => {
          cy.get('[role=columnheader] .ag-row')
          .should('have.length', 0) 
    
          cy.log('**sort by asc**')
          cy.contains('.rt-resizable-header-content', 'Last Name').click()
          cy.contains('.rt-resizable-header-content', 'Last Name')
        })
    })

    it('Sort Age by desc', () => {
        cy.get('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-thead.-header > div > div:nth-child(3) > div.rt-resizable-header-content') 
        .within(() => {
          cy.get('[role=columnheader] .ag-row')
          .should('have.length', 0) 
    
          cy.log('**sort by desc**')
          cy.contains('.rt-resizable-header-content', 'Age').click()
          cy.contains('.rt-resizable-header-content', 'Age')
        })
    })

    it('Sort Age by asc', () => {
        cy.get('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-thead.-header > div > div:nth-child(3) > div.rt-resizable-header-content') 
        .within(() => {
          cy.get('[role=columnheader] .ag-row')
          .should('have.length', 0) 
    
          cy.log('**sort by asc**')
          cy.contains('.rt-resizable-header-content', 'Age').click()
          cy.contains('.rt-resizable-header-content', 'Age')
        })
    })

    it('Sort Email by desc', () => {
        cy.get('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-thead.-header > div > div:nth-child(4) > div.rt-resizable-header-content') 
        .within(() => {
          cy.get('[role=columnheader] .ag-row')
          .should('have.length', 0) 
    
          cy.log('**sort by desc**')
          cy.contains('.rt-resizable-header-content', 'Email').click()
          cy.contains('.rt-resizable-header-content', 'Email')
        })
    })

    it('Sort Email by asc', () => {
        cy.get('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-thead.-header > div > div:nth-child(4) > div.rt-resizable-header-content') 
        .within(() => {
          cy.get('[role=columnheader] .ag-row')
          .should('have.length', 0) 
    
          cy.log('**sort by asc**')
          cy.contains('.rt-resizable-header-content', 'Email').click()
          cy.contains('.rt-resizable-header-content', 'Email')
        })
    })

    it('Sort Salary by desc', () => {
        cy.get('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-thead.-header > div > div:nth-child(5) > div.rt-resizable-header-content') 
        .within(() => {
          cy.get('[role=columnheader] .ag-row')
          .should('have.length', 0) 
    
          cy.log('**sort by desc**')
          cy.contains('.rt-resizable-header-content', 'Salary').click()
          cy.contains('.rt-resizable-header-content', 'Salary')
        })
    })

    it('Sort Salary by asc', () => {
        cy.get('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-thead.-header > div > div:nth-child(5) > div.rt-resizable-header-content') 
        .within(() => {
          cy.get('[role=columnheader] .ag-row')
          .should('have.length', 0) 
    
          cy.log('**sort by asc**')
          cy.contains('.rt-resizable-header-content', 'Salary').click()
          cy.contains('.rt-resizable-header-content', 'Salary')
        })
    })

    it('Sort Department by desc', () => {
        cy.get('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-thead.-header > div > div:nth-child(6) > div.rt-resizable-header-content') 
        .within(() => {
          cy.get('[role=columnheader] .ag-row')
          .should('have.length', 0) 
    
          cy.log('**sort by desc**')
          cy.contains('.rt-resizable-header-content', 'Department').click()
          cy.contains('.rt-resizable-header-content', 'Department')
        })
    })
    it('Sort Department by asc', () => {
        cy.get('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-thead.-header > div > div:nth-child(6) > div.rt-resizable-header-content') 
        .within(() => {
          cy.get('[role=columnheader] .ag-row')
          .should('have.length', 0) 
    
          cy.log('**sort by asc**')
          cy.contains('.rt-resizable-header-content', 'Department').click()
          cy.contains('.rt-resizable-header-content', 'Department')
        })
    })
});



