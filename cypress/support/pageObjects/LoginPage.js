/// <reference types="cypress" />

class LoginPage {
    //SELECTORS

    get loginButton() {
        return cy.get('[data-qa="log-in-button"]');
    }
    get emailInput() {
        return cy.get('[data-qa="login-email-input"]');
    }

    get passwordInput() {
        return cy.get('[data-qa="login-password-input"]');
    }
    // METHODS
    // login
    login(email, password) {
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.loginButton.click();
    }
    // checking if create account/login button is visible
    isLoginButtonVisible() {
        this.loginButton.should('be.visible');
    }
    //clicking login button
    clickLoginButton() {
        this.loginButton.click();
    }
}

export default new LoginPage();
