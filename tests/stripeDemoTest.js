/**
 * Sample automated test scenario for Nightwatch.js
 *
 */


module.exports = {
  'test stripe form page load' : function (client) {
    client
      .url('http://localhost:8000')
      .waitForElementPresent('body', 1000);
  },

  'test full name input load' : function(client) {
    client
      .waitForElementPresent('input[name="cardholder-name"]', 1000)
      .end();
  }
};
