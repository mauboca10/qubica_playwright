// utils.js

const { expect } = require('@playwright/test');

async function validateText(page, selector, expectedText) {
  const element = await page.locator(selector);
  const elementText = await element.textContent();
  expect(elementText).toBe(expectedText);
}

module.exports = {
  validateText,
};
