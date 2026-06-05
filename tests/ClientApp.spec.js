const {test, expect} = require('@playwright/test');
const { request } = require('node:http');



test.only('Login Page' ,async ({page}) =>

{


await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await page.locator("#userEmail").fill("anshika@gmail.com");
await page.locator("#userPassword").fill("Iamking@000");
await page.locator("#login").click();
//await page.route("**/*.css", route =>route.abort()); // To abort all Css
//await page.route("**/*.{jpg,png,jpeg}", route =>route.abort()); // To abort all imaages like jpg,png and jpeg
page.on("request", request => console.log(request.url()));
page.on("response", response => console.log(response.url(),response.status()));
await page.locator(".card-body b").first().waitFor();
const titles = await page.locator(".card-body b").allTextContents();
console.log(titles);


});


test('Ui Control' ,async ({page}) =>

{


await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const username = page.locator("#username");
const password = page.locator("#password");
const DocumentLink = page.locator("[href*='documents-request']");
await username.fill("anshika@gmail.com");
await password.fill("Iamking@000");
const dropdown = page.locator("select.form-control");
dropdown.selectOption("consult");
console.log(dropdown);
await page.locator(".radiotextsty").last().click();
await page.locator("#okayBtn").click();
console.log(await page.locator(".radiotextsty").last().isChecked());
await expect(page.locator(".radiotextsty").last()).toBeChecked();
// assertion
await page.locator("#terms").click();
await expect(page.locator("#terms")).toBeChecked();
await page.locator("#terms").uncheck();
expect( await page.locator("#terms").isChecked()).toBeFalsy();
await expect(DocumentLink).toHaveAttribute("class","blinkingText");



});

test('Child Window Handle' ,async ({browser}) =>

{

const context = await browser.newContext();
const page = await context.newPage();
const username = page.locator("#username");
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const DocumentLink = page.locator("[href*='documents-request']");

const [newPage] = await Promise.all([

context.waitForEvent('page'),  // listen for any new page pending,rejected,fullfilled
DocumentLink.click(),  // new page opened
]) 

const text = await newPage.locator(".red").textContent();
const arrayText = text.split("@")
const domain = arrayText[1].split(" ")[0]
//console.log(domain);
await page.locator("#username").fill(domain);
await page.pause();
console.log(await page.locator("#username").inputValue());





});
