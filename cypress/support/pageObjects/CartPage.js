/// <reference types="cypress" />

class CartPage {
    // SELECTORS

    get createAccountButton() {
        return cy.get('[data-qa="registration-continue-button"]');
    }
    // selector of the dropdown icon
    get dropdownPeriod() {
        return cy.get('[data-qa="dropdown-icon"]');
    }

    // select continue button in checkout
    get continueButton() {
        return cy.get('[data-qa="subtotal-section"] > [data-qa="continue-button"]');
    }

    // mapping of the dropdown selections(chatGPT)
    periodOptions = {
        '1 month': 1,
        '12 months': 2,
        '24 months': 3,
        '48 months': 4
    };

    // METHODS

    // method to click the dropdown icon
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

    // checking if create account/login button is visible
    isCreateAccountButtonVisible() {
        this.createAccountButton.should('be.visible');
    }
}

export default new CartPage();