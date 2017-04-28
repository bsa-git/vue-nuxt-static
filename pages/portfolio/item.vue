<template>
    <div>
        <!-- Navigation -->
        <page-navigation groupMenu="portfolio"></page-navigation>
        <!-- Heading/Breadcrumbs -->
        <page-breadcrumbs :title="title" :description="description"></page-breadcrumbs>
        <!-- Page Content -->
        <div>
            <div class="container">
                <!-- Portfolio Item Row -->
                <div class="row">
                    <div class="col-md-8">
                        <portfolio-slider></portfolio-slider>
                    </div>
                    <div class="col-md-4">
                        <portfolio-item-content></portfolio-item-content>
                        <portfolio-social></portfolio-social>
                    </div>
                </div>
                <!-- /.row -->
            </div>
            <portfolio-related-projects></portfolio-related-projects>
        </div>
        <!-- Footer -->
        <page-footer></page-footer>
    </div>
</template>

<script>
    import PageNavigation from '~components/layout/header/navigation.vue'
    import PageBreadcrumbs from '~components/layout/header/breadcrumbs.vue'
    import PageFooter from '~components/layout/footer/index.vue'
    import PortfolioSlider from '~components/home/slider.vue'
    import PortfolioItemContent from '~components/portfolio/item-content.vue'
    import PortfolioSocial from '~components/portfolio/social.vue'
    import PortfolioRelatedProjects from '~components/portfolio/related-projects.vue'

    export default {
        components: {
            PageNavigation,
            PageBreadcrumbs,
            PageFooter,
            PortfolioSlider,
            PortfolioItemContent,
            PortfolioSocial,
            PortfolioRelatedProjects
        },
        data() {
            return {
                title: 'Portfolio Item',
                description: 'Lorem ipsum dolor sit ame'
            }
        },
        head() {
            return {
                title: this.title,
                meta: [
                    { hid: 'description', name: 'description', content: this.description }
                ],
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