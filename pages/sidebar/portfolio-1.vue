<template>
    <div>
        <portfolio-col1-list></portfolio-col1-list>
        <portfolio-customers></portfolio-customers>
    </div>
</template>

<script>
import PortfolioCol1List from '~components/portfolio/col1-list.vue'
import PortfolioCustomers from '~components/home/customers.vue'


export default {
    components: {
        PortfolioCol1List,
        PortfolioCustomers
    },
    data() {
        return {
            title: 'One Column Portfolio',
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