module.exports = {
    ci: {
        collect: {
            startServerCommand: 'npm run start',
            numberOfRuns: 3,
            url: [
                'https://qadev--redcloudone.myvtex.com/',
                'https://qadev--redcloudone.myvtex.com/canned-tuna/p',
            ],
            chromePath: '/usr/bin/google-chrome-stable',
            puppeteerScript: "./set-cookie.js"
        },
        assert: {
            assertions: {
                'categories:performance':['error', {minScore: .6}],
                'categories:accessibility':['error', {minScore: .6}],
                'categories:best-practices':['error', {minScore: .6}],
                'categories:seo':['error', {minScore: .6}],
                'categories:pwa':'off',
                'audits':{
                    'first-contentful-paint': {
                        'score': {
                            'max': 1.8
                        },
                        'error': {
                            'min': 3.0
                        }
                    }
                }
            }
        },
        upload: {
            target: 'temporary-public-storage'
        }
    }
}