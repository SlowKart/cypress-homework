/// <reference types="cypress" />
import HomePage from '../support/pageObjects/HomePage';
import CartPage from '../support/pageObjects/CartPage';

describe('tests for various plan purchase', () => {
  beforeEach(() => {
    // desktop view settings
    cy.viewport(1280, 720);
    // navigate to home page
    cy.visit('https://www.hostinger.com/');
    //accept cookies
    HomePage.acceptCookies();
  })
  it('24 month plan checkout', () => {
    
    HomePage.clickChoosePlanBusinessButton();
    
    // click the dropdown
    CartPage.clickDropdownPeriod();
    cy.wait(3000); // added the static wait because cloudflare didint like me 
    // select 24 month plan
    CartPage.selectDropdownPeriodByText('24 months');
    //continue at checkout
    CartPage.clickContinueButton();
    //see if the flow went through and is the button visible
    CartPage.isCreateAccountButtonVisible();
  })
})