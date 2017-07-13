/**
 * Sample automated test scenario for Stripe Elements nightwatch.js
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
  },

  'test phone number input load' : function(client) {
    client
      .waitForElementPresent('input[type="tel"]', 1000)
  },

  'test card number input load' : function(client) {
    client
      .waitForElementPresent('#card-element', 1000)

      .end();
  }
};
