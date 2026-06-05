const {test, expect} = require('@playwright/test');



test('Login Page' ,async ({browser})=>

{

const context = await browser.newContext();
const page =  await context.newPage();
await page.route("**/*.{jpg,png,jpeg}", route => route.abort());
const username = page.locator("input#ctl00_ContentPlaceHolder1_Login_txtUsrEmailId");
const next     = page.locator("input#ctl00_ContentPlaceHolder1_Login_btnCheckUserType")
const password = page.locator("#ctl00_ContentPlaceHolder1_Login_txtUsrPwd");    
const singin   = page.locator("#ctl00_ContentPlaceHolder1_Login_btnLogin");

await page.goto("https://test.tina5s.cloud/AwareBase/AwareBase-Corp");
// get title --assertion
console.log(await page.title());
// Css
await username.fill("vijay.kumar@awarebase.com");
await next.click();
await password.fill("Net#Wingggdows@2020");
await singin.click();
page.on("request", request => console.log(request.url()));
page.on("response", response => console.log(response.url(),response.status()));
console.log(await page.locator("#info_message").textContent());
await expect(await page.locator("#info_message")).toContainText('incorrect');

});

