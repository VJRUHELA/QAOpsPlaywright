const {test, expect} = require('@playwright/test');
let webContext;

test.beforeAll(async ({browser})=>
    
    {

        const context = await browser.newContext();
        const page = await context.newPage();

await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await page.locator("#userEmail").fill("ruhelavj@gmail.com");
await page.locator("#userPassword").fill("Vinish@123");
await page.locator("#login").click();
await page.waitForLoadState('networkidle');
await context.storageState({path: 'state.json'});
webContext = await browser.newContext({storageState:'state.json'});

}


)



test('Login Page' ,async () =>

{
const page = await webContext.newPage();
await page.goto("https://rahulshettyacademy.com/client");
const products = await page.locator(".card-body");
const titles = await page.locator(".card-body b").allTextContents();
console.log(titles);


});


test('Tesr Case 2' ,async () =>

{
const page = await webContext.newPage();
await page.goto("https://rahulshettyacademy.com/client");
const products = await page.locator(".card-body");
const titles = await page.locator(".card-body b").allTextContents();
console.log(titles);

});