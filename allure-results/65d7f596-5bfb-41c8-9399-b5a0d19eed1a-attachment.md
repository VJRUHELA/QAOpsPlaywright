# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AssignmentTest1.spec.js >> Test 2 — Group ticket booking is NOT eligible for refund
- Location: tests\AssignmentTest1.spec.js:82:8

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'View My Bookings' })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e4]:
      - link "EventHub" [ref=e5] [cursor=pointer]:
        - /url: /
        - img [ref=e7]
        - generic [ref=e9]: EventHub
      - generic [ref=e10]:
        - link "Home" [ref=e11] [cursor=pointer]:
          - /url: /
        - link "Events" [ref=e12] [cursor=pointer]:
          - /url: /events
        - link "My Bookings" [ref=e13] [cursor=pointer]:
          - /url: /bookings
        - link "API Docs" [ref=e14] [cursor=pointer]:
          - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
        - button "Admin" [ref=e16] [cursor=pointer]:
          - text: Admin
          - img [ref=e17]
        - generic [ref=e19]:
          - generic "ruhelavj@gmail.com" [ref=e20]
          - button "Logout" [ref=e21] [cursor=pointer]
  - main [ref=e22]:
    - generic [ref=e23]:
      - navigation [ref=e24]:
        - link "Events" [ref=e25] [cursor=pointer]:
          - /url: /events
        - generic [ref=e26]: /
        - generic [ref=e27]: Dilli Diwali Mela
      - generic [ref=e28]:
        - generic [ref=e29]:
          - img "Dilli Diwali Mela" [ref=e31]
          - generic [ref=e32]:
            - generic [ref=e33]:
              - generic [ref=e34]: Festival
              - generic [ref=e35]: Featured
            - heading "Dilli Diwali Mela" [level=1] [ref=e36]
            - generic [ref=e37]:
              - img [ref=e38]
              - text: This is a featured event — always available for practice
            - generic [ref=e40]:
              - generic [ref=e41]:
                - generic [ref=e42]: 📅
                - generic [ref=e43]:
                  - paragraph [ref=e44]: Date
                  - paragraph [ref=e45]: Tuesday, 20 October
              - generic [ref=e46]:
                - generic [ref=e47]: 🕐
                - generic [ref=e48]:
                  - paragraph [ref=e49]: Time
                  - paragraph [ref=e50]: 10:30 pm
              - generic [ref=e51]:
                - generic [ref=e52]: 📍
                - generic [ref=e53]:
                  - paragraph [ref=e54]: Venue
                  - paragraph [ref=e55]: Pragati Maidan Exhibition Grounds
              - generic [ref=e56]:
                - generic [ref=e57]: 🌆
                - generic [ref=e58]:
                  - paragraph [ref=e59]: City
                  - paragraph [ref=e60]: Delhi
              - generic [ref=e61]:
                - generic [ref=e62]: 🎫
                - generic [ref=e63]:
                  - paragraph [ref=e64]: Available
                  - paragraph [ref=e65]: 9986 / 10000 seats
              - generic [ref=e66]:
                - generic [ref=e67]: 💰
                - generic [ref=e68]:
                  - paragraph [ref=e69]: Price per ticket
                  - paragraph [ref=e70]: $300
            - generic [ref=e71]:
              - heading "About this event" [level=2] [ref=e72]
              - paragraph [ref=e73]: Celebrate the Festival of Lights at the grandest Diwali Mela in North India. Enjoy 200+ stalls of artisanal crafts, street food, folk performances, fireworks, and cultural showcases spanning three vibrant evenings.
        - generic [ref=e75]:
          - generic [ref=e76]:
            - heading "Book Tickets" [level=2] [ref=e77]
            - generic [ref=e78]: $300
          - paragraph [ref=e79]: per ticket
          - generic [ref=e80]:
            - generic [ref=e81]:
              - generic [ref=e82]: Tickets
              - generic [ref=e83]:
                - button "−" [ref=e84] [cursor=pointer]
                - generic [ref=e85]: "3"
                - button "+" [ref=e86] [cursor=pointer]
                - generic [ref=e87]: (max 10)
            - generic [ref=e88]:
              - generic [ref=e89]: Full Name*
              - textbox "Full Name*" [ref=e90]:
                - /placeholder: Your full name
                - text: Vijay Kumar
            - generic [ref=e91]:
              - generic [ref=e92]: Email*
              - textbox "Email*" [ref=e93]:
                - /placeholder: you@email.com
                - text: ruhelavj@gmail.com
            - generic [ref=e94]:
              - generic [ref=e95]: Phone Number*
              - textbox "Phone Number*" [ref=e96]:
                - /placeholder: +91 98765 43210
                - text: "8882955535"
            - generic [ref=e97]:
              - generic [ref=e98]:
                - generic [ref=e99]: $300 × 3 tickets
                - generic [ref=e100]: $900
              - generic [ref=e101]:
                - generic [ref=e102]: Total
                - generic [ref=e103]: $900
            - button "Confirm Booking" [ref=e104] [cursor=pointer]
  - contentinfo [ref=e105]:
    - generic [ref=e106]:
      - generic [ref=e107]:
        - generic [ref=e108]:
          - heading "Rahul Shetty Academy" [level=3] [ref=e109]
          - paragraph [ref=e110]: India's leading QA automation training academy — empowering engineers to build real-world testing skills.
        - generic [ref=e111]:
          - heading "Popular Courses" [level=3] [ref=e112]
          - list [ref=e113]:
            - listitem [ref=e114]:
              - link "Selenium WebDriver with Java" [ref=e115] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e116]:
              - link "Playwright with JavaScript" [ref=e117] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e118]:
              - link "RestAssured API Testing" [ref=e119] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e120]:
              - link "Cypress End-to-End Testing" [ref=e121] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e122]:
              - link "Appium Mobile Testing" [ref=e123] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
        - generic [ref=e124]:
          - heading "QA Job Hiring Platform" [level=3] [ref=e125]
          - paragraph [ref=e126]: Get hired faster — take skill assessments trusted by top QA employers worldwide.
          - link "techsmarthire.com →" [ref=e127] [cursor=pointer]:
            - /url: https://techsmarthire.com
        - generic [ref=e128]:
          - heading "EventHub Practice App" [level=3] [ref=e129]
          - list [ref=e130]:
            - listitem [ref=e131]:
              - link "Browse Events" [ref=e132] [cursor=pointer]:
                - /url: /events
            - listitem [ref=e133]:
              - link "My Bookings" [ref=e134] [cursor=pointer]:
                - /url: /bookings
            - listitem [ref=e135]:
              - link "Manage Events" [ref=e136] [cursor=pointer]:
                - /url: /admin/events
            - listitem [ref=e137]:
              - link "API Documentation" [ref=e138] [cursor=pointer]:
                - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
      - generic [ref=e139]:
        - paragraph [ref=e140]: © 2026 Rahul Shetty Academy. All rights reserved.
        - generic [ref=e141]:
          - link "rahulshettyacademy.com →" [ref=e142] [cursor=pointer]:
            - /url: https://rahulshettyacademy.com
          - link "techsmarthire.com →" [ref=e143] [cursor=pointer]:
            - /url: https://techsmarthire.com
  - alert [ref=e144]
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
      |                                                               ^ Error: locator.click: Test timeout of 30000ms exceeded.
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