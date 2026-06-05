const { test, expect } = require('@playwright/test');
//const { request } = require('node:http');
const { POManager } = require("./pageObjects/poManager");
const { customtest } = require('../Utils/testdata-based');

//json-->String-->Js-->Object
// How to drive test data from external files for playwright tests

const dataset = JSON.parse(JSON.stringify(require("../Utils/ClientAppPOMTestData.json")));

for(const data of dataset )
    
    {

test(`@webTests LoginPagePOM for ${data.productName}`, async ({ page }) => {

    const poManager = new POManager(page);

    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validateLogin(data.userName, data.password);

    // Go to Dashboard Page
    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.searchProductAddCart(data.productName);
    await dashboardPage.navigateToCart();


    const cartPage = poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(data.productName);
    await cartPage.Checkout();

    
    const ordersReviewPage = poManager.getOrdersReviewPage();
    console.log(ordersReviewPage);
    await ordersReviewPage.searchCountryAndSelect("ind", "India");
    const orderId = await ordersReviewPage.SubmitAndGetOrderId();
    console.log(orderId);
    await ordersReviewPage.navigateToOrders();

    
    const ordersHistoryPage = poManager.getOrdersHistoryPage();
    await ordersHistoryPage.searchOrderAndSelect(orderId);
    expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();

});

}


// This test case use fixture as testdata instead of json file to use test data
customtest("LoginPagePOM", async ({ page,testDataForOrder }) => {

    const poManager = new POManager(page);

    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validateLogin(testDataForOrder.userName, testDataForOrder.password);

    // Go to Dashboard Page
    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.searchProductAddCart(testDataForOrder.productName);
    await dashboardPage.navigateToCart();


    const cartPage = poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(testDataForOrder.productName);
    await cartPage.Checkout();

})

// test files will trigger parallel execution of test cases, so we can use test.describe to group test cases and run them sequentially
// individual tests in the file will run sequencially






