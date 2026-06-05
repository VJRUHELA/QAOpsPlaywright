# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: MyPractice2.spec.js >> Shopping product
- Location: tests\MyPractice2.spec.js:4:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('div li').first() to be visible

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e11] [cursor=pointer]:
      - /url: https://techsmarthire.com/
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
      - listitem [ref=e22] [cursor=pointer]:
        - button "Sign Out" [ref=e23]:
          - generic [ref=e24]: 
          - text: Sign Out
  - generic [ref=e25]:
    - generic [ref=e26]:
      - heading "My Cart" [level=1] [ref=e27]
      - button "Continue Shopping❯" [ref=e28] [cursor=pointer]
    - heading "No Products in Your Cart !" [level=1] [ref=e30]
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
     |                                      ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
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