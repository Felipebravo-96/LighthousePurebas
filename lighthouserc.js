require("dotenv").config();

module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run start",
      numberOfRuns: 2,
      url: process.env.URLS.split(","),
      chromePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
      puppeteerScript: "./set-cookie.js",
    },
    assert: {
      preset: "lighthouse:recommended",
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
