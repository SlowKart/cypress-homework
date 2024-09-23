/// <reference types="cypress" />
class HomePage {
    // SELECTORS
  
    // select plan selection button 
    get choosePlanBusinessButton() {
      return cy.get('[data-click-id="hgr-homepage-pricing_table-add_to_cart-hosting_hostinger_business"]');
    }

     // select accept all cookies button
  get cookieAcceptButton() {
    return cy.get('[data-click-id="hgr-cookie_consent-accept_all_btn"]');
  }
  
    // METHODS

    // click plan selection button
    clickChoosePlanBusinessButton() {
      this.choosePlanBusinessButton.click();
    }
    // accept cookies
acceptCookies() {
    cy.get('[data-click-id="hgr-cookie_consent-accept_all_btn"]', { timeout: 10000 })
        .should('be.visible')
        .wait(500) 
        .click();
    }
}

  
  export default new HomePage();


  