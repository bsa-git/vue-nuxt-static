<template>
    <div>
        <about-business></about-business>
        <about-team></about-team>
        <about-purchase></about-purchase>
        <about-customers></about-customers>
    </div>
</template>

<script>
import AboutBusiness from '~components/about/business.vue'
import AboutPurchase from '~components/about/purchase.vue'
import AboutTeam from '~components/home/team.vue'
import AboutCustomers from '~components/home/customers.vue'


export default {
    components: {
        AboutBusiness,
        AboutPurchase,
        AboutTeam,
        AboutCustomers
    },
    data() {
        return {
            title: 'About',
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