<template>
    <div>
        <!-- Navigation -->
        <page-navigation groupMenu="portfolio"></page-navigation>
        <!-- Heading/Breadcrumbs -->
        <page-breadcrumbs :title="title"
                          :description="description"></page-breadcrumbs>
        <!-- Page Content -->
        <div>
            <portfolio-col3-list></portfolio-col3-list>
            <portfolio-customers></portfolio-customers>
        </div>
        <!-- Footer -->
        <page-footer></page-footer>
    </div>
</template>

<script>
import PageNavigation from '~components/layout/header/navigation.vue'
import PageBreadcrumbs from '~components/layout/header/breadcrumbs.vue'
import PageFooter from '~components/layout/footer/index.vue'
import PortfolioCol3List from '~components/portfolio/col3-list.vue'
import PortfolioCustomers from '~components/home/customers.vue'


export default {
    components: {
        PageNavigation,
        PageBreadcrumbs,
        PageFooter,
        PortfolioCol3List,
        PortfolioCustomers
    },
    data() {
        return {
            title: 'Three Column Portfolio', description: 'Lorem ipsum dolor sit ame'
        }
    }, head() {
        return {
            title: this.title,
            meta: [{ hid: 'description', name: 'description', content: this.description }],
            script: [
                { src: '/js/owl-carousel/owl.carousel.js' },
            ],
            link: [
                { rel: 'stylesheet', href: '/js/owl-carousel/owl.carousel.css' },
                { rel: 'stylesheet', href: '/js/owl-carousel/owl.theme.css' },
            ]
        }
    },
}
</script>