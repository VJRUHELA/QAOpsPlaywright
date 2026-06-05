const excelJS = require("excelJS");

 const {test,expect} = require('@playwright/test');


async function WritreExcelTest(searchText,replaceText,filePath) {

  
    const workbook = new excelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet("Sheet1");
    const output = await readExcel(worksheet,searchText);

    

    const cell = worksheet.getCell(output.row,output.column);
    cell.value = replaceText;
    await workbook.xlsx.writeFile(filePath);



}

async function readExcel(worksheet,searchText)
{
      let output = {row:-1, column:-1};

    worksheet.eachRow((row, rowNumber) => 
        {
        row.eachCell((cell, colNumber) => {

            if (cell.value === searchText) {

                output.row = rowNumber;
                output.column = colNumber;
            }

        })

    })

    return output;

}
//WritreExcelTest("Mango","Test","C:/Users/vijay.kumar/Documents/TestDownload.xlsx");

test("Uplaod & Download File Validation", async ({page})=>
    {

const textSearch = "Mango";
const updatedValue = "Zanzabar";
await page.goto("https://rahulshettyacademy.com/upload-download-test/");
const downloadPromise = page.waitForEvent("download");
await page.getByRole("button",{name:"Download"}).click();
await downloadPromise;
await WritreExcelTest(textSearch,updatedValue,"C:/Users/vijay.kumar/Documents/download.xlsx");
await page.locator("#fileinput").click();
await page.locator("#fileinput").setInputFiles("C:/Users/vijay.kumar/Documents/download.xlsx");

const beforeTextSearch = await page.locator("#cell-2-undefined").first();

await expect(beforeTextSearch).toContainText(updatedValue);










});










