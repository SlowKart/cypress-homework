Cypress.on('uncaught:exception', (err, runnable) => {
    // We expect an error with message 'An unknown error has occurred: undefined'
    // and don't want to fail the test so we return false
    if (err.message.includes('An unknown error has occurred')) {
      return false;
    }
    // Return true to let Cypress fail the test for other exceptions
    return true;
  });
  