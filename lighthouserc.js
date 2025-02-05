require("dotenv").config();
const fs = require('fs');


module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run start",
      numberOfRuns: 2,
      url: process.env.URLS.split(","),
      chromePath: 'C:\\Program Files\\Google\\Chrome Dev\\Application\\chrome.exe',
      puppeteerScript: "./set-cookie.js",
    },
    server: {
        basicAuth:{
            username: "username",
            password: "test"
        },
    },
    assert: {
      preset: "lighthouse:recommended",
    },
    upload: {
      //target: "temporary-public-storage",
      target: 'lhci',
      serverBaseUrl: 'http://localhost:9001/',
      token: '32ccc138-f82c-4163-9e38-3cf1fbbd2a74'
    },
  },
};
