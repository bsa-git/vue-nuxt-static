// The values in the configuration files "/config"
// will be overwritten by the values of "env.js" file
export default {
    env: 'testing',// development, production, testing
    debug: true,
    personal_data: {
        copyright: '© 2016 OSAHAN - All Rights Reserved',
        designed_with: 'Osahan Studio',
        designed_with_url: 'https://www.facebook.com/iamgurdeeposahan',
        contact: {
            location: '795 Folsom Ave, Suite 600',
            phone: '+01 234 567 890',
            fax: '+01 234 567 890',
            email: 'company@company.com',
            website: 'www.yourdomain.com'
        },
        twitter: { url: '#', tag: '@Osahan' },
        socials: {
            facebook: { url: '#', icon: 'fa-facebook' },
            twitter: { url: '#', icon: 'fa-twitter' },
            google: { url: '#', icon: 'fa-google-plus' },
            linkdin: { url: '#', icon: 'fa-linkedin' },
            flickr: { url: '#', icon: 'fa-flickr' },
            skype: { url: '#', icon: 'fa-skype' }
        },
        blog: {
            url: '/blog/home1',
            total: 3 // Count of posts on page
        },
        portfolio: {
            url: '/portfolio/col-1',
            total: 6, // Count of items on page
        }
    }
}

