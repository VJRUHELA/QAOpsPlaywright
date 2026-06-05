const {test, expect} = require('@playwright/test');



test('Register Page' ,async ({page}) =>

{


await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
const regsiterlink =  page.locator(".text-reset ");
const firstname = page.locator("#firstName");
const lastname = page.locator("#lastName");
const email = page.locator("#userEmail");
const phonenumber = page.locator("#userMobile");
const occupation = page.locator(".custom-select");
const radiobutton = page.locator("[value='Male']");
const passwrod = page.locator("#userPassword");
const confrmpassword = page.locator("#confirmPassword");
const radio1 = page.locator("[type='checkbox']");
const register = page.locator("[type='submit']");
await regsiterlink.click();
await page.locator(".login-title").textContent();
await expect(page.locator(".login-title")).toContainText("Register");
console.log(await page.locator(".login-title").textContent());
await firstname.fill("vijay");
await lastname.fill("kumar");
await email.fill("ruhelavj@gmail.com");
await phonenumber.fill("8888888888");
await occupation.selectOption("Student");
await radiobutton.check();
await passwrod.fill("Vinish@123");
await confrmpassword.fill("Vinish@123");
await radio1.check();
await register.click();
await page.locator(".headcolor").textContent();
await expect(page.locator(".headcolor")).toContainText("Account Created Successfully");
console.log(page.locator(".headcolor").textContent());
await page.pause();

});



test('Login Page' ,async ({page}) =>

{


await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await page.locator("#userEmail").fill("ruhelavj@gmail.com");
await page.locator("#userPassword").fill("Vinish@123");
await page.locator("#login").click();
await page.locator(".card-body b").first().waitFor();
const titles = await page.locator(".card-body b").allTextContents();
console.log(titles.length);
for (var i = 0; i < await titles.length; ++i)
{ 
    await page.locator("button.btn.w-10.rounded").nth(i).click();
   
}


const title11 = await page.locator("[style*='margin-top: -10px']").allTextContents();
console.log(title11.length);

for(var i =0; i < await title11.length; ++i ){


 await page.locator("[style*='margin-top: -10px']").nth(2).click();
}



const orderid = await page.locator(".itemNumber").nth(0).textContent();
await expect(page.locator(".itemNumber").nth(0)).toContainText("#6960eae1c941646b7a8b3ed3");
console.log(orderid);

const orderid1 = await page.locator(".itemNumber").nth(1).textContent();
await expect(page.locator(".itemNumber").nth(1)).toContainText("#6960eac0c941646b7a8b3e68");
console.log(orderid1);

const orderid2 = await page.locator(".itemNumber").nth(2).textContent();
await expect(page.locator(".itemNumber").nth(2)).toContainText("#6960ea76c941646b7a8b3dd5");
console.log(orderid2);

await page.locator("[type*='button']").nth(1).click();
await page.pause();

});



test.only('Shopping product' ,async ({page}) =>

{

 // Go to Add to Cart   
const email = 'ruhelavj@gmail.com';
const ProductName = 'ZARA COAT 3';
const products = page.locator(".card-body");
await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await page.locator("#userEmail").fill(email);
await page.locator("#userPassword").fill("Vinish@123");
await page.locator("#login").click();
await page.locator(".card-body b").first().waitFor();
const titles = await page.locator(".card-body b").allTextContents();
console.log(titles);
const count = await products.count();
for(let i=0; i<count; ++i)
    {
if(await products.nth(i).locator("b").textContent() ===ProductName){

    await products.nth(i).locator("text = Add To Cart").click();
    
    break;
    
}

}

// Go To CheckOut Page


await page.locator("[routerlink*='cart']").click();
await page.locator("div li").first().waitFor();
const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
await expect(bool).toBeTruthy();

await page.locator("text=Checkout").click();

await page.locator("[placeholder*='Country']").pressSequentially("ind",{delay:150});
const DropDown = page.locator(".ta-results");
await DropDown.waitFor(); 
const optionsCount = await DropDown.locator("button").count();
for(let i=0; i< optionsCount; ++i)
    
    {
     const text = await DropDown.locator("button").nth(i).textContent();
     if(text === " India")
     {

        await DropDown.locator("button").nth(i).click();
        break;
       
     }

}
await expect(page.locator(".user__name  [type='text']").first()).toHaveText(email);
await page.locator(".ng-untouched .input").nth(4).fill("vijay Kumar");
await page.locator(".action__submit").click();
await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
const orderid = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
console.log(orderid);


// Go To My Order


await page.locator("button[routerlink*='myorders']").click();
await page.locator("tbody").waitFor();
const rows = await page.locator("tbody tr");

for(let i=0; i < await rows.count(); ++i)
    
    { 
        const roworderid = await rows.nth(i).locator("th").textContent();
        if(orderid.includes(roworderid))
            
            {
             await rows.nth(i).locator("button").first().click();
             break;

        }



}

const orderIdDetails = await page.locator(".col-text").textContent();
//await page.pause();
expect(orderid.includes(orderIdDetails)).toBeTruthy();



});










