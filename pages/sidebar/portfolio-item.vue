<template>
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
</template>

<script>
import PortfolioSlider from '~components/home/slider.vue'
import PortfolioItemContent from '~components/portfolio/item-content.vue'
import PortfolioSocial from '~components/portfolio/social.vue'
import PortfolioRelatedProjects from '~components/portfolio/related-projects.vue'

export default {
    components: {
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