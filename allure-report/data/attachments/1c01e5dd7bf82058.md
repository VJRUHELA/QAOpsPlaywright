# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AssignmentTest1.spec.js >> Test 2 — Group ticket booking is NOT eligible for refund
- Location: tests\AssignmentTest1.spec.js:82:8

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('link', { name: 'View My Bookings' })

```

# Test source

```ts
  7   | const PASSWORD = 'Vinish@123';     // Replace with your own credentials
  8   | 
  9   | // Reusable Helper Functions
  10  | async function login(page) {
  11  |   // Navigate to /login
  12  |   await page.goto(`${BASE_URL}/login`);
  13  |   
  14  |   // Fill email field (locate by placeholder you@email.com)
  15  |   await page.getByPlaceholder('you@email.com').fill(EMAIL);
  16  |   
  17  |   // Fill password field (locate by label Password)
  18  |   await page.getByLabel('Password', { exact: true }).fill(PASSWORD);
  19  |   
  20  |   // Click the login button (locate by id #login-btn)
  21  |   await page.locator('#login-btn').click();
  22  |   
  23  |   // Assert: link with text Browse Events → is visible (confirms login success)
  24  |   await expect(page.getByRole('link', { name: 'Browse Events →' })).toBeVisible();
  25  |   
  26  | }
  27  | 
  28  |   
  29  |   test('Test 1 — Single ticket booking is eligible for refund', async ({ page })=>{
  30  | 
  31  |  
  32  |     //Test 1 — Single ticket booking is eligible for refund
  33  |     // --- STEP 1: Login ---
  34  | 
  35  |      await login(page);
  36  | 
  37  |     // --- STEP 2: Book first event with 1 ticket (default) ---
  38  | 
  39  |      await page.goto(`${BASE_URL}/events`);
  40  |      const firstEventCard = await page.locator("[data-testid='event-card']").first();
  41  |      await firstEventCard.locator("[data-testid='book-now-btn']").click();
  42  | 
  43  |      await page.getByPlaceholder("Your full name").fill("Vijay Kumar");
  44  |      await page.getByPlaceholder("you@email.com").fill("ruhelavj@gmail.com");
  45  |      await page.getByPlaceholder("+91 98765 43210").fill("8882955535");
  46  |      await page.locator(".confirm-booking-btn").click();
  47  | 
  48  |      // --- STEP 3: Navigate to booking detail ---
  49  | 
  50  |      await page.getByRole('link', {name: "View My Bookings"}).click();
  51  |      await expect(page).toHaveURL(`${BASE_URL}/bookings`);
  52  |      //const firstbookingCard = await page.locator("[data-testid='booking-card']");
  53  |      await page.getByRole('link',{name: 'View Details'}).first().click();
  54  |      await expect(page.getByText("Booking Information")).toBeVisible();
  55  |      //await page.pause();
  56  |     
  57  | 
  58  |      // --- STEP 4: Validate booking ref ---
  59  | 
  60  |      const bookingRefText = (await page.locator("nav .font-mono").innerText()).trim();
  61  |      const eventRefText = (await page.locator("h1.font-bold").innerText()).trim();
  62  |      await expect(bookingRefText.charAt(0)).toBe(eventRefText.charAt(0));
  63  | 
  64  |       // --- STEP 5: Check refund eligibility ---
  65  | 
  66  |       await page.locator("#check-refund-btn").click();
  67  | 
  68  |       await expect(page.locator("#refund-spinner")).toBeVisible();
  69  |       await expect(page.locator("#refund-spinner")).toBeHidden({timeout: 6000});
  70  | 
  71  |        // --- STEP 6: Validate result ---
  72  | 
  73  |        const resultElement = await page.locator("#refund-result");
  74  |        await expect(resultElement).toBeVisible();
  75  |        await expect(resultElement).toContainText("Eligible for refund");
  76  |        await expect(resultElement).toContainText(" Single-ticket bookings qualify for a full refund.");
  77  | 
  78  |  }
  79  |   );
  80  | 
  81  | 
  82  |   test.only('Test 2 — Group ticket booking is NOT eligible for refund', async ({ page })=>{
  83  | 
  84  |  
  85  |     //Test 2 — Group ticket booking is NOT eligible for refund
  86  | 
  87  | 
  88  |     // --- STEP 1: Login ---
  89  | 
  90  |      await login(page);
  91  | 
  92  |     // --- STEP 2: Book first event with 1 ticket (default) ---
  93  | 
  94  |      await page.goto(`${BASE_URL}/events`);
  95  |      const firstEventCard = await page.locator("[data-testid='event-card']").first();
  96  |      await firstEventCard.locator("[data-testid='book-now-btn']").click();
  97  |      const increamentBtn = await page.locator("button:has-text('+')");
  98  |      await increamentBtn.click();
  99  |      await increamentBtn.click();
  100 |      await page.getByPlaceholder("Your full name").fill("Vijay Kumar");
  101 |      await page.getByPlaceholder("you@email.com").fill("ruhelavj@gmail.com");
  102 |      await page.getByPlaceholder("+91 98765 43210").fill("8882955535");
  103 |      await page.locator(".confirm-booking-btn").click();
  104 | 
  105 |       // --- STEP 3: Navigate to booking detail ---
  106 | 
> 107 |      await page.getByRole('link', {name: "View My Bookings"}).click();
      |                                                               ^ Error: locator.click: Target page, context or browser has been closed
  108 |      await expect(page).toHaveURL(`${BASE_URL}/bookings`);
  109 |      //const firstbookingCard = await page.locator("[data-testid='booking-card']");
  110 |      await page.getByRole('link',{name: 'View Details'}).first().click();
  111 |      await expect(page.getByText("Booking Information")).toBeVisible();
  112 |      //await page.pause();
  113 |     
  114 | 
  115 |      // --- STEP 4: Validate booking ref ---
  116 | 
  117 |      const bookingRefText = (await page.locator("nav .font-mono").innerText()).trim();
  118 |      const eventRefText = (await page.locator("h1.font-bold").innerText()).trim();
  119 |      await expect(bookingRefText.charAt(0)).toBe(eventRefText.charAt(0));
  120 | 
  121 |       // --- STEP 5: Check refund eligibility ---
  122 | 
  123 |       await page.locator("#check-refund-btn").click();
  124 | 
  125 |       await expect(page.locator("#refund-spinner")).toBeVisible();
  126 |       await expect(page.locator("#refund-spinner")).toBeHidden({timeout: 6000});
  127 | 
  128 |        // --- STEP 6: Validate result (different assertions) ---
  129 | 
  130 |        const resultElement = await page.locator("#refund-result");
  131 |        await expect(resultElement).toBeVisible();
  132 |        await expect(resultElement).toContainText("Not eligible for refund");
  133 |        await expect(resultElement).toContainText(" Group bookings (3 tickets) are non-refundable.");
  134 | 
  135 |   
  136 |   });
```