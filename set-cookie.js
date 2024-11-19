require('dotenv').config();

module.exports = async (browser, context) => {
    const page = await browser.newPage();
    await page.goto(context.url, { waitUntil: "domcontentloaded" });

    await page.setCookie(
        {
            name: "VtexIdclientAutCookie",
            value: process.env.VTEX_ID_CLIENT_AUT_COOKIE,
            domain: new URL(context.url).hostname,
        }
    )
    
    await page.close();
}