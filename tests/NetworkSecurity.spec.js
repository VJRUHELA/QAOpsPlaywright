const {test,expect} = require('@playwright/test');


test('@Security Test request intercept', async({page})=>{

await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await page.locator("#userEmail").fill("ruhelavj@gmail.com");
await page.locator("#userPassword").fill("Vinish@123");
await page.locator("#login").click();
await page.waitForLoadState('networkidle');
await page.locator(".card-body b").first().waitFor();
await page.locator("button[routerlink*='myorders']").click();
await page.route('https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=6a0d146d17ee3e78ba8998d1',route => route.continue({url:'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=6a0d146d17ee3e788538998d1'}));
await page.locator("button:has-text('View')").first().click();
await expect(page.locator("p").last()).toHaveText("You are not authorize to view this order");
await page.pause();




});