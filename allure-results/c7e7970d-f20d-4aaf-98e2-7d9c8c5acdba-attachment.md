# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClientAppPOM.spec.js >> @webTests LoginPagePOM for ZARA COAT 3
- Location: tests\ClientAppPOM.spec.js:15:1

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://rahulshettyacademy.com/client/#/auth/login", waiting until "load"

```

# Test source

```ts
  1  | class LoginPage {
  2  | 
  3  |     constructor(page) {
  4  | 
  5  | 
  6  |         this.page = page;
  7  |         this.signInButton = page.locator("#login");
  8  |         this.userName = page.locator("#userEmail");
  9  |         this.password = page.locator("#userPassword");
  10 |     
  11 | 
  12 | 
  13 |     }
  14 | 
  15 |     async goTo() {
  16 | 
> 17 |         await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
     |                         ^ Error: page.goto: Target page, context or browser has been closed
  18 |     }
  19 | 
  20 |     async validateLogin(userName, password) {
  21 | 
  22 |         await this.userName.fill(userName);
  23 |         await this.password.fill(password);
  24 |         await this.signInButton.click();
  25 |         await this.page.waitForLoadState('networkidle');
  26 |     
  27 | 
  28 |     }
  29 | }
  30 | 
  31 | module.exports = { LoginPage };
```