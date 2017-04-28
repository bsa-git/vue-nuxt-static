import config from '~/config/index'

// initial state
export default  {
    business: {
        img_url: '/images/about-us.jpg',
        img_alt: '',
        title: 'About Osahan Business',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        text: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni, aperiam vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem corporis eveniet. Odit, temporibus reprehenderit dolorum!</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis?</p>'
    },
    subscribe: {
        about_us: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias',
        get_in_touch: 'Join our mailing list to stay up to date and get notices about our new releases!'
    },
    widgets: [
        {
            title: 'Side Widget Well-1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, perspiciatis adipisci accusamus laudantium odit aliquam repellat tempore quos aspernatur vero.'
        },
        {
            title: 'Side Widget Well-2',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, perspiciatis adipisci accusamus laudantium odit aliquam repellat tempore quos aspernatur vero.'
        },
    ],
    personal_data: {
        copyright: config.personal_data.copyright,
        designed_with: config.personal_data.designed_with,
        designed_with_url: config.personal_data.designed_with_url,
        contact: config.personal_data.contact,
    },
};