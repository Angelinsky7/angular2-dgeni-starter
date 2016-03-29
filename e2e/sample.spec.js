'use strict';

var expect = require('chai').expect;
var R = require('ramda');
var APP_URL = 'http://localhost:8080/index.html';
var S = require('./selectors');

describe('login page tests', function () {
  // Before this set of tests, navigate to the main page and wait for the
  // HTML to be rendered by the browser.
  before(function () {
    return browser.url(APP_URL)
      .then(function () {
        return browser.waitForVisible('body', 5000);
      });
  });
  
  // After this set of tests, clean up the browser instance.
  after(function() {
    return browser.end();
  });

  it('has the correct window title', function () {
    return browser.getTitle()
      .then(function (title) {
        expect(title).to.eql('angular2-dgeni-starter');
      });
  });
});
