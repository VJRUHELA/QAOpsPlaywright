const {test, expect} = require('@playwright/test');


    // Configurations
const BASE_URL = 'https://eventhub.rahulshettyacademy.com';
const EMAIL = 'ruhelavj@gmail.com'; // Replace with your own credentials
const PASSWORD = 'Vinish@123';     // Replace with your own credentials

// Reusable Helper Functions
async function login(page) {
  // Navigate to /login
  await page.goto(`${BASE_URL}/login`);
  
  // Fill email field (locate by placeholder you@email.com)
  await page.getByPlaceholder('you@email.com').fill(EMAIL);
  
  // Fill password field (locate by label Password)
  await page.getByLabel('Password', { exact: true }).fill(PASSWORD);
  
  // Click the login button (locate by id #login-btn)
  await page.locator('#login-btn').click();
  
  // Assert: link with text Browse Events → is visible (confirms login success)
  await expect(page.getByRole('link', { name: 'Browse Events →' })).toBeVisible();
  
}

  
  test('Test 1 — Single ticket booking is eligible for refund', async ({ page })=>{

 
    //Test 1 — Single ticket booking is eligible for refund
    // --- STEP 1: Login ---

     await login(page);

    // --- STEP 2: Book first event with 1 ticket (default) ---

     await page.goto(`${BASE_URL}/events`);
     const firstEventCard = await page.locator("[data-testid='event-card']").first();
     await firstEventCard.locator("[data-testid='book-now-btn']").click();

     await page.getByPlaceholder("Your full name").fill("Vijay Kumar");
     await page.getByPlaceholder("you@email.com").fill("ruhelavj@gmail.com");
     await page.getByPlaceholder("+91 98765 43210").fill("8882955535");
     await page.locator(".confirm-booking-btn").click();

     // --- STEP 3: Navigate to booking detail ---

     await page.getByRole('link', {name: "View My Bookings"}).click();
     await expect(page).toHaveURL(`${BASE_URL}/bookings`);
     //const firstbookingCard = await page.locator("[data-testid='booking-card']");
     await page.getByRole('link',{name: 'View Details'}).first().click();
     await expect(page.getByText("Booking Information")).toBeVisible();
     //await page.pause();
    

     // --- STEP 4: Validate booking ref ---

     const bookingRefText = (await page.locator("nav .font-mono").innerText()).trim();
     const eventRefText = (await page.locator("h1.font-bold").innerText()).trim();
     await expect(bookingRefText.charAt(0)).toBe(eventRefText.charAt(0));

      // --- STEP 5: Check refund eligibility ---

      await page.locator("#check-refund-btn").click();

      await expect(page.locator("#refund-spinner")).toBeVisible();
      await expect(page.locator("#refund-spinner")).toBeHidden({timeout: 6000});

       // --- STEP 6: Validate result ---

       const resultElement = await page.locator("#refund-result");
       await expect(resultElement).toBeVisible();
       await expect(resultElement).toContainText("Eligible for refund");
       await expect(resultElement).toContainText(" Single-ticket bookings qualify for a full refund.");

 }
  );


  test.only('Test 2 — Group ticket booking is NOT eligible for refund', async ({ page })=>{

 
    //Test 2 — Group ticket booking is NOT eligible for refund


    // --- STEP 1: Login ---

     await login(page);

    // --- STEP 2: Book first event with 1 ticket (default) ---

     await page.goto(`${BASE_URL}/events`);
     const firstEventCard = await page.locator("[data-testid='event-card']").first();
     await firstEventCard.locator("[data-testid='book-now-btn']").click();
     const increamentBtn = await page.locator("button:has-text('+')");
     await increamentBtn.click();
     await increamentBtn.click();
     await page.getByPlaceholder("Your full name").fill("Vijay Kumar");
     await page.getByPlaceholder("you@email.com").fill("ruhelavj@gmail.com");
     await page.getByPlaceholder("+91 98765 43210").fill("8882955535");
     await page.locator(".confirm-booking-btn").click();

      // --- STEP 3: Navigate to booking detail ---

     await page.getByRole('link', {name: "View My Bookings"}).click();
     await expect(page).toHaveURL(`${BASE_URL}/bookings`);
     //const firstbookingCard = await page.locator("[data-testid='booking-card']");
     await page.getByRole('link',{name: 'View Details'}).first().click();
     await expect(page.getByText("Booking Information")).toBeVisible();
     //await page.pause();
    

     // --- STEP 4: Validate booking ref ---

     const bookingRefText = (await page.locator("nav .font-mono").innerText()).trim();
     const eventRefText = (await page.locator("h1.font-bold").innerText()).trim();
     await expect(bookingRefText.charAt(0)).toBe(eventRefText.charAt(0));

      // --- STEP 5: Check refund eligibility ---

      await page.locator("#check-refund-btn").click();

      await expect(page.locator("#refund-spinner")).toBeVisible();
      await expect(page.locator("#refund-spinner")).toBeHidden({timeout: 6000});

       // --- STEP 6: Validate result (different assertions) ---

       const resultElement = await page.locator("#refund-result");
       await expect(resultElement).toBeVisible();
       await expect(resultElement).toContainText("Not eligible for refund");
       await expect(resultElement).toContainText(" Group bookings (3 tickets) are non-refundable.");

  
  });