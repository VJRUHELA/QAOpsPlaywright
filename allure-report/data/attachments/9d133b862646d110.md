# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: MyProctice1.spec.js >> PlayWright Special locators
- Location: tests\MyProctice1.spec.js:5:6

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('app-card').filter({ hasText: 'Nokia Edge' }).getByLabel('button')

```

# Test source

```ts
  1  | const {test, expect} = require('@playwright/test');
  2  | 
  3  | 
  4  | 
  5  | test.only('PlayWright Special locators' ,async ({page})=>
  6  | 
  7  | {
  8  | 
  9  | 
  10 |     
  11 | 
  12 | await page.goto("https://rahulshettyacademy.com/angularpractice/");
  13 | await page.getByLabel("Check me out if you Love IceCreams!").click();
  14 | await page.getByLabel("Employed").check();
  15 | await page.getByLabel("Gender").selectOption("Female");
  16 | await page.getByPlaceholder("Password").fill("abc@123");
  17 | await page.getByRole("button", {name: 'Submit'}).click();
  18 | const boolvalue = await page.getByText(" The Form has been submitted successfully!.").isVisible();
  19 | await expect(boolvalue).toBeTruthy();
  20 | await page.getByRole("Link", {name: 'Shop'}).click();
> 21 | await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByLabel("button").click();
     |                                                                                     ^ Error: locator.click: Target page, context or browser has been closed
  22 | 
  23 | 
  24 | 
  25 | });
  26 | 
  27 | 
```