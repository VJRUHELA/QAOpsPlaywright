# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClientAppPOM.spec.js >> @webTests LoginPagePOM for ADIDAS ORIGINAL
- Location: tests\ClientAppPOM.spec.js:15:1

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('.card-body').first().locator('text= Add To Cart')
    - locator resolved to <button _ngcontent-vrl-c39="" class="btn w-10 rounded">…</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable

```

# Test source

```ts
  1  | class DashboardPage {
  2  | 
  3  |     constructor(page) {
  4  | 
  5  | 
  6  |         this.products = page.locator(".card-body");
  7  |         this.productsText = page.locator(".card-body b");
  8  |         this.cart = page.locator("[routerlink*='cart']");
  9  | 
  10 | 
  11 | 
  12 |     }
  13 | 
  14 |     async  searchProductAddCart(productName)
  15 |     {
  16 | 
  17 |         const titles = await this.productsText.allTextContents();
  18 |         console.log(titles);
  19 |         const count = await this.products.count();
  20 |         for(let i=0; i<count; ++i)
  21 |             {
  22 |         if(await this.products.nth(i).locator("b").textContent() ===productName){
  23 |         
> 24 |             await this.products.nth(i).locator("text = Add To Cart").click();
     |                                                                      ^ Error: locator.click: Target page, context or browser has been closed
  25 |             
  26 |             break;
  27 |             
  28 |         }
  29 |         
  30 |         }
  31 | 
  32 | 
  33 | 
  34 |     }
  35 | 
  36 |     async navigateToCart()
  37 |     
  38 |     {
  39 | 
  40 |         await this.cart.click();
  41 | 
  42 |     }
  43 | 
  44 | }
  45 | 
  46 | module.exports = {DashboardPage};
```