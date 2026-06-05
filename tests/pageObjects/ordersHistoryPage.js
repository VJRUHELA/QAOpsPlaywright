class OrdersHistoryPage {


    constructor(page) {

        this.page = page;
        this.orderTable = page.locator("tbody");
        this.rows = page.locator("tbody tr");
        this.orderIdDetails = page.locator(".col-text");

    }

    async searchOrderAndSelect(orderid) {

        await this.orderTable.waitFor();
        for (let i = 0; i < await this.rows.count(); ++i) {
            const roworderid = await this.rows.nth(i).locator("th").textContent();
            if (orderid.includes(roworderid)) {
                await this.rows.nth(i).locator("button").first().click();
                break;

            }



        }

    }

    async getOrderId() {
          return await this.orderIdDetails.textContent();
    }



}
module.exports = { OrdersHistoryPage };