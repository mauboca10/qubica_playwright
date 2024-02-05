import { test, expect } from '@playwright/test';
import { validateText } from '../utils';

test('test', async ({ page }) => {
  await page.goto('https://qubika.com/');
  //Get the actual URL
  const currentUrl = page.url();
  // Validate that the current URL matches the expected URL
  expect(currentUrl).toBe('https://qubika.com/');
  // Validate that the Qubica logo is displayed
  await expect(page.locator('.logo').first()).toBeVisible();
  //Clicks on Contact Us button
  await page.locator('#menu-item-193').getByRole('link', { name: 'Contact Us' }).click();
  //Verify that Name field is displayed
  await expect(page.getByPlaceholder('First Name', { exact: true })).toBeVisible();
  //Verify that Email field is displayed
  await expect(page.getByPlaceholder('Email', { exact: true })).toBeVisible();
  //Verify that Submit button is displayed
  await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
  //Clicks on Submit button without filling any field
  await page.getByRole('button', { name: 'Submit' }).click();
  //Validate that all mandatory fields have an error message
      // Get the Name message error element using the CSS selector and validate the message error.
      await validateText(page, '.hs_firstname .hs-error-msg', 'Please complete this required field.');
    
      // Get the Email message error element using the CSS selector and validate the message error.
      await validateText(page, '.hs_email .hs-error-msg', 'Please complete this required field.');

      // Get the Last Name message error element using the CSS selector and validate the message error.
      await validateText(page, '.hs_lastname .hs-error-msg', 'Please complete this required field.');

      // Get the Contact Type message error element using the CSS selector and validate the message error.
      await validateText(page, '.hs_contact_type .hs-error-msg', 'Please complete this required field.');

      // Get the Message input message error element using the CSS selector and validate the message error.
      await validateText(page, '.hs_message .hs-error-msg', 'Please complete this required field.');

  //Validate that ‘First Name’ field is marked with RED color
  const selector1 = '.hs_firstname .hs-error-msg';
  const elemento = await page.locator(selector1);
  const color = await elemento.evaluate((element) => {
    const computedStyle = window.getComputedStyle(element);
    return computedStyle.color;
  });
  expect(color).toBe('rgb(255, 0, 0)'); // Red in RGB format

  //Get First Name field and write 'Test name'
  await page.getByPlaceholder('First Name', { exact: true }).click();
  await page.getByPlaceholder('First Name', { exact: true }).fill('Test name');
  //Click on Submit button
  await page.getByRole('button', { name: 'Submit' }).click();
  //Validate that all mandatory fields have an error message except ‘Name’ field
      // Validate that the message error is not present on Name field
      const selector = '.hs_firstname .hs-error-msg';
      const elements = await page.locator(selector);
      const elementNotPresent = await elements.count() === 0;
      expect(elementNotPresent).toBe(true);
    
      // Get the Email message error element using the CSS selector and validate the message error.
      await validateText(page, '.hs_email .hs-error-msg', 'Please complete this required field.');

      // Get the Last Name message error element using the CSS selector and validate the message error.
      await validateText(page, '.hs_lastname .hs-error-msg', 'Please complete this required field.');

      // Get the Contact Type message error element using the CSS selector and validate the message error.
      await validateText(page, '.hs_contact_type .hs-error-msg', 'Please complete this required field.');

      // Get the Message input message error element using the CSS selector and validate the message error.
      await validateText(page, '.hs_message .hs-error-msg', 'Please complete this required field.');
});