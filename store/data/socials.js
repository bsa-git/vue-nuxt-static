import config from '~/config/index'

// initial state
export default {
    my: config.personal_data.socials,
    share: {
        facebook: {url: '#', icon: 'fa-facebook'},
        twitter: {url: '#', icon: 'fa-twitter'},
        google: {url: '#', icon: 'fa-google-plus'},
        linkdin: {url: '#', icon: 'fa-linkedin'},
        flickr: {url: '#', icon: 'fa-flickr'},
        skype: {url: '#', icon: 'fa-skype'}
    },
    twitter: {
        url: config.personal_data.twitter.url,
        tag: config.personal_data.twitter.tag,
        msgs: [
            {
                title: 'Lorem ipsum dolor et, consectetur adipiscing eli.',
                date: '28 February 2014'
            },
            {
                title: 'Lorem ipsum dolor et, consectetur adipiscing eli.An Fusce eleifend aliquet nis application.',
                date: '28 February 2014'
            },
            {
                title: 'Lorem ipsum dolor et, consectetur adipiscing eli.',
                date: '28 February 2014'
            },
        ]
    },

};
