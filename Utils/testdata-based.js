const base  = require('@playwright/test');

exports.customtest = base.test.extend(
    {

        testDataForOrder:
         {

            userName: "ruhelavj@gmail.com",
            password: "Vinish@123",
            productName: "ZARA COAT 3"

        }


    }
)