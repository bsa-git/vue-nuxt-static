<template>
    <div>
        <portfolio-col4-list></portfolio-col4-list>
        <portfolio-customers></portfolio-customers>
    </div>
</template>

<script>
import PortfolioCol4List from '~components/portfolio/col4-list.vue'
import PortfolioCustomers from '~components/home/customers.vue'


export default {
    components: {
        PortfolioCol4List,
        PortfolioCustomers
    },
    data() {
        return {
            title: 'Four Column Portfolio',
            description: 'Lorem ipsum dolor sit ame'
        }
    },
    head() {
        return {
            script: [
                { src: '/js/owl-carousel/owl.carousel.js' },
            ],
            link: [
                { rel: 'stylesheet', href: '/js/owl-carousel/owl.carousel.css' },
                { rel: 'stylesheet', href: '/js/owl-carousel/owl.theme.css' },
            ]
        }
    },
    created: function () {
        // Set parent data (title, description)
        this.$parent.title = this.title;
        this.$parent.description = this.description;
    },
}
</script>