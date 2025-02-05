require("dotenv").config();

module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run start",
      numberOfRuns: 3,
      url: process.env.URLS.split(","),
      chromePath: "/usr/bin/google-chrome",
      puppeteerScript: "./set-cookie.js",
    },
    assert: {
      preset: "lighthouse:recommended",
    },
    upload: {
      target: "filesystem",
      outputDir: "./lighthouse-reports",
    },
  },
};
