require('dotenv').config();
console.log("Array de urls: " + process.env.URLS.split(','))
module.exports = {
    ci: {
        collect: {
            startServerCommand: 'npm run start',
            numberOfRuns: 1,
            url: process.env.URLS.split(','),
            chromePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
            puppeteerScript: "./set-cookie.js"
        },
        upload: {
            target: 'temporary-public-storage'
        }
    }
}