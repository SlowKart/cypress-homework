/// <reference types="cypress" />
import HomePage from '../support/pageObjects/HomePage';
import CartPage from '../support/pageObjects/CartPage';
import LoginPage from '../support/pageObjects/LoginPage';

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
    cy.wait(2000); // added the static wait because cloudflare didnt like me 
    // select 24 month plan
    CartPage.selectDropdownPeriodByText('24 months');
    //continue at checkout
    CartPage.clickContinueButton();
    //see if the flow went through and is the button visible
    LoginPage.isLoginButtonVisible();
    //press i already have an account and login, enter credentials
   // LoginPage.clickLoginButton();
    LoginPage.login('grcnehm697@couldmail.com', 'Candidate!22');
    //account didnt work, could not continue
    CartPage.isFirstNameInputVisible();

  })
})