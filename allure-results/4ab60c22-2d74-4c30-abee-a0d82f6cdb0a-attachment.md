# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UIBasicsTest.spec.js >> @webTests Login Page
- Location: tests\UIBasicsTest.spec.js:5:1

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://test.tina5s.cloud/AwareBase/AwareBase-Corp", waiting until "load"

```

# Test source

```ts
  1  | const {test, expect} = require('@playwright/test');
  2  | 
  3  | 
  4  | 
  5  | test('@webTests Login Page' ,async ({browser})=>
  6  | 
  7  | {
  8  | 
  9  | const context = await browser.newContext();
  10 | const page =  await context.newPage();
  11 | await page.route("**/*.{jpg,png,jpeg}", route => route.abort());
  12 | const username = page.locator("input#ctl00_ContentPlaceHolder1_Login_txtUsrEmailId");
  13 | const next     = page.locator("input#ctl00_ContentPlaceHolder1_Login_btnCheckUserType")
  14 | const password = page.locator("#ctl00_ContentPlaceHolder1_Login_txtUsrPwd");    
  15 | const singin   = page.locator("#ctl00_ContentPlaceHolder1_Login_btnLogin");
  16 | 
> 17 | await page.goto("https://test.tina5s.cloud/AwareBase/AwareBase-Corp");
     |            ^ Error: page.goto: Target page, context or browser has been closed
  18 | // get title --assertion
  19 | console.log(await page.title());
  20 | // Css
  21 | await username.fill("vijay.kumar@awarebase.com");
  22 | await next.click();
  23 | await password.fill("Net#Wingggdows@2020");
  24 | await singin.click();
  25 | page.on("request", request => console.log(request.url()));
  26 | page.on("response", response => console.log(response.url(),response.status()));
  27 | console.log(await page.locator("#info_message").textContent());
  28 | await expect(await page.locator("#info_message")).toContainText('incorrect');
  29 | 
  30 | });
  31 | 
  32 | 
```