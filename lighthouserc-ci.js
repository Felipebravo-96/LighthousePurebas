module.exports = {
    ci: {
        collect: {
            startServerCommand: 'npm run start',
            numberOfRuns: 3,
            url: [
                'https://qadev--redcloudone.myvtex.com/',
                'https://qadev--redcloudone.myvtex.com/canned-tuna/p',
            ],
            puppeteerScript: "./set-cookie.js"
        },
        asserts: {
            assertions: {
                'categories:performance':['error', {minScore: .6}],
                'categories:accessibility':['error', {minScore: .6}],
                'categories:best-practices':['error', {minScore: .6}],
                'categories:seo':['error', {minScore: .6}],
                'categories:pwa': 'off',
            }
        },
        upload: {
            target: 'temporary-public-storage'
        }
    }
}