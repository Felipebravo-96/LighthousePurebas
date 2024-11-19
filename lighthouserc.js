module.exports = {
    ci: {
        collect: {
            startServerCommand: 'npm run start',
            numberOfRuns: 1,
            url: [
                'https://qadev--redcloudone.myvtex.com/',
                'https://qadev--redcloudone.myvtex.com/canned-tuna/p',
            ],
            chromePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
            puppeteerScript: "./set-cookie.js"
        },
        upload: {
            target: 'temporary-public-storage'
        }
    }
}