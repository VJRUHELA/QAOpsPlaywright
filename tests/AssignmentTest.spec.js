const {test, expect} = require('@playwright/test');



test('My Assignment' ,async ({page})=>

{

    // Reusable login helper function
    const Email = page.getByPlaceholder("you@email.com");
    const Paswword = page.locator("input[id='register-password']");
    const Base_URL = "https://eventhub.rahulshettyacademy.com";


    await page.goto("https://eventhub.rahulshettyacademy.com/login");
    await page.locator(".text-indigo-600").click();
    await page.locator(".text-indigo-600").waitFor();
    await page.getByPlaceholder("you@email.com").fill("ruhelavj@gmail.com")
    await page.locator("input[id='register-password']").fill("Vinish@123");
    await page.getByPlaceholder("Repeat your password").fill("Vinish@123");
    await page.locator("button[id='register-btn']").click();
    await page.locator("button[id='register-btn']").waitFor();
 

});

test('My Event' ,async ({page})=>

{


    //Step 1 — Login

    const base_URL = "https://eventhub.rahulshettyacademy.com";

    await page.goto("https://eventhub.rahulshettyacademy.com/login");
    await page.getByPlaceholder("you@email.com").fill("ruhelavj@gmail.com")
    await page.locator("input[id*='password']").fill("Vinish@123");
    await page.locator("button[type*='submit']").click();
    await page.locator("button[type*='submit']").waitFor();
    //await page.locator("span[id*='user-email-display']").textContent();
    //expect(await page.locator("span[id*='user-email-display']")).toContainText("ruhelavj@gmail.com");
    expect(await page.getByRole("link", {name: "Browse Events →"})).toBeVisible();

   //Step 2 — Create a new event


   // ---------- Helper: Generate future date ----------
   function futureDateValue() {
   const date = new Date();
   date.setDate(date.getDate() + 5); // +5 days in future

  // Format: YYYY-MM-DDTHH:MM (common input type format)

  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const hh = '10';
  const min = '00';

  return `${yyyy}-${mm}-${dd}T${hh}:${min}`;
}


    const eventTitle = 'Test Event ${Date.now()}';

    await page.locator("button.items-center").first().click();
    await page.locator("a[href='/admin/events']").first().click();
    //await page.locator("button:has-text('Add New Event')").click();
    await page.locator("input[id*='event-title-input']").fill(eventTitle);
    await page.getByPlaceholder("Describe the event…").pressSequentially("TesterHub is a platform where all testers gather to share their experience");
    await page.getByLabel("category").selectOption("Workshop");
    await page.getByLabel("city").fill("Delhi");
    await page.getByPlaceholder("Venue name & address").pressSequentially("old Tehsil , Near Yamuna Inter College, Baghpat");
    await page.locator("input[id*='event-date-&-time']").click();
    await page.locator("input[id*='event-date-&-time']").fill(futureDateValue());
    await page.locator("input[id*='price-($)']").fill("550");
    await page.locator("input[id*='total-seats']").fill("70");
    await page.getByText("+ Add Event").click();
    await page.getByText("+ Add Event").waitFor();
    await expect(await page.getByText("Test Event ${Date.now()}").first()).toBeVisible();


    // Step 3 — Find the event card and capture seats

    await page.locator("[id*='nav-events']").click();
    await page.locator("[id*='nav-events']").waitFor();

    const eventCards = await page.locator("[data-testid*='event-card']");
    await expect(eventCards.first()).toBeVisible();

    const targerCard = await eventCards.filter({hasText: eventTitle }).first();
    await expect(targerCard).toBeVisible({timeout: 10000});

    const seatTextBefore = await targerCard.locator(":text('seat')").innerText();
    const seatsBeforeBooking = await parseInt(seatTextBefore.replace(/\D/g, ''),10);

     // Step 4 — Start booking

     await targerCard.locator("[data-testid='book-now-btn']").click();

     // Step 5 — Fill booking form

     await expect(page.locator(".text-2xl").last()).toHaveText("$550");
     await page.getByPlaceholder("Your full name").fill("Vijay Kumar");
     await page.getByPlaceholder("you@email.com").fill("ruhelavj@gmail.com");
     await page.getByPlaceholder("+91 98765 43210").fill("8882955535");
     await page.locator("button[type*='submit']").click();

     //Step 6 — Verify booking confirmation

     const bookingRefElement =  page.locator("div .text-xl").first();
     await expect(bookingRefElement).toBeVisible();
     const bookingRef = (await bookingRefElement.innerText()).trim();

     //Step 7 — Verify in My Bookings

     await page.getByRole('link', {name:'View My Bookings'}).click();
     const bookingcards = page.locator("#booking-card");
     await expect(bookingcards.first()).toBeVisible();

     const targetBookingCard = bookingcards.filter({ hasText: eventTitle }).first();
     await expect(targetBookingCard).toBeVisible();
     await expect(targetBookingCard).toContainText(eventTitle);
    

     //Step 8 — Verify seat reduction

     await page.goto(`${base_URL}/events`);
     await expect(eventCards.first()).toBeVisible();
     //await page.pause();

     const targetCardAfter = eventCards.filter({hasText: eventTitle }).first();
     await expect(targetCardAfter).toBeVisible();

     const seatTextAfter = await targetCardAfter.locator(":text('seat')").innerText();
     const seatsAfterBooking = await parseInt(seatTextAfter.replace(/\D/g, ''),10);

     expect(seatsAfterBooking).toBe(seatsBeforeBooking -1); 
     

});

 


     




