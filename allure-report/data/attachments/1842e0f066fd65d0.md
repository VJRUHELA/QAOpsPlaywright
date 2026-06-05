# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: MyPractice2.spec.js >> Shopping product
- Location: tests\MyPractice2.spec.js:4:6

# Error details

```
Error: locator.waitFor: Target page, context or browser has been closed
Call log:
  - waiting for locator('div li').first() to be visible

```

# Test source

```ts
  1  | 
  2  | const {test, expect} = require('@playwright/test');
  3  | 
  4  | test.only('Shopping product' ,async ({page}) =>
  5  | 
  6  | {
  7  | 
  8  |  // Go to Add to Cart   
  9  | const email = 'ruhelavj@gmail.com';
  10 | const ProductName = 'ZARA COAT 3';
  11 | const products = page.locator(".card-body");
  12 | await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  13 | await page.getByPlaceholder("email@example.com").fill(email);
  14 | await page.getByPlaceholder("enter your passsword").fill("Vinish@123");
  15 | await page.getByRole("button",{name: 'Login'}).click();
  16 | await page.waitForLoadState("networkidle");
  17 | await page.locator(".card-body b").first().waitFor();
  18 | await page.locator(".card-body").filter({hasText: 'ZARA COAT 3'}).getByRole("button",{name: 'Add to cart'}).click();
  19 | await page.getByRole("listitem").getByRole("button", {name: 'Cart'}).click();
  20 | 
> 21 | await page.locator("div li").first().waitFor();
     |                                      ^ Error: locator.waitFor: Target page, context or browser has been closed
  22 | await expect(page.getByText("ZARA COAT 3")).toBeVisible();
  23 | 
  24 | await page.getByRole("button", {name: 'Checkout'}).click();
  25 | await page.getByPlaceholder("Select Country").pressSequentially("Ind");
  26 | await page.getByRole("button", {name: 'India'}).nth(1).click();
  27 | await page.getByText("Place Order").click();
  28 | await expect(page.getByText(" Thankyou for the order. ")).toBeVisible();
  29 | 
  30 | });
```