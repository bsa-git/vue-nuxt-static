<template>
    <div>
        <portfolio-col2-list></portfolio-col2-list>
        <portfolio-customers></portfolio-customers>
    </div>
</template>

<script>
import PortfolioCol2List from '~components/portfolio/col2-list.vue'
import PortfolioCustomers from '~components/home/customers.vue'


export default {
    components: {
        PortfolioCol2List,
        PortfolioCustomers
    },
    data() {
        return {
            title: 'Two Column Portfolio',
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