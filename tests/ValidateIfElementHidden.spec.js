const { test, expect } = require('@playwright/test');


//test.describe.configure({ mode: 'parallel' }); // this will run all the tests in the file sequentially, if we have multiple test files then they will run in parallel, so we can use test.describe to group test cases and run them sequentially
//test.describe.configure({ mode: 'serial' }); 
test('@webTests Validations', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    //await page.goto("https://www.google.com/");
    //await page.goBack();
    //await page.goForward();
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();
    //await page.pause();
    page.on('dialog', dialog => dialog.accept());
    await page.locator("#confirmbtn").click();
    await page.locator("#mousehover").hover();
    const framesPage = page.frameLocator("#courses-iframe")
    await framesPage.locator("li a[href*='lifetime-access']:visible").click();
    const textCheck = await framesPage.locator(".text h2").textContent();
    console.log(textCheck.split(" ")[1]);


}

);

test('Screenshot & Visual Comparision', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    //await page.goto("https://www.google.com/");
    //await page.goBack();
    //await page.goForward();
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#displayed-text").screenshot({path: "PartialScreenShot.png"});
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();
    await page.screenshot({path:"screenshot.png"});




});


test('Visual Testing', async ({ page }) => {

    await page.goto("https://www.flightaware.com/");
    expect(await page.screenshot()).toMatchSnapshot("landing.png");
   




});
