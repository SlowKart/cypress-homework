/// <reference types="cypress" />

class CartPage {
    // SELECTORS

    
    // selector of the dropdown icon
    get dropdownPeriod() {
        return cy.get('[data-qa="dropdown-icon"]');
    }

    // select continue button in checkout
    get continueButton() {
        return cy.get('[data-qa="subtotal-section"] > [data-qa="continue-button"]');
    }

    get firstNameInput() {
        return cy.get('[data-qa="first-name-input"] > .h-input__input-wrapper > .h-input__input');
    }
    get lastNameInput() {
        return cy.get('[data-qa="last-name-input"]');
    }
    get phoneNumberInput() {
        return cy.get('[data-qa="phone-number-input"]');
    }

    // mapping of the dropdown selections(chatGPT)
    periodOptions = {
        '1 month': 1,
        '12 months': 2,
        '24 months': 3,
        '48 months': 4
    };

    // METHODS

    // click on the period dropdown
    clickDropdownPeriod() { 
        this.dropdownPeriod.click();
    }

    // selection of the dropdown option based on text (chatGPT)
    selectDropdownPeriodByText(optionText) {
        const index = this.periodOptions[optionText];  // Get the index from the map
        if (index !== undefined) {
            cy.get('[data-qa="dropdown"]')
              .children()
              .eq(index - 1)  // Select the corresponding child by index
              .click();
        } else {
            throw new Error(`Option "${optionText}" not found in the dropdown options`);
        }
    }

    // clicking the continue button
    clickContinueButton() {
        this.continueButton.click();
    }

    // update first name
    updateFirstName(firstName) {
        this.firstNameInput.clear().type(firstName);
    }

    isFirstNameInputVisible() {
        this.firstNameInput.should('be.visible')
    }
    updateFirstName(firstName) {
        this.firstNameInput.clear().type(firstName);
    }
    updateLastName(firstName) {
        this.lastNameInput.clear().type(firstName);
    }
    updatePhoneNumber(firstName) {
        this.phoneNumberInput.clear().type(firstName);
    }
}

export default new CartPage();