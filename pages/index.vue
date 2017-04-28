<template>
  <div>
    <!-- Navigation -->
    <page-navigation></page-navigation>
    <!-- Heading/Breadcrumbs -->
    <page-breadcrumbs :title="title"
                      :description="description"></page-breadcrumbs>
    <!-- Page Content -->
    <div>
      <div id="carousel">
        <home-slider></home-slider>
      </div>
      <home-welcome></home-welcome>
      <home-service></home-service>
      <home-gallery></home-gallery>
      <home-team></home-team>
      <home-blog></home-blog>
      <home-testimonials></home-testimonials>
      <home-customers></home-customers>
    </div>
    <!-- Footer -->
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageNavigation from '~components/layout/header/navigation.vue'
import PageBreadcrumbs from '~components/layout/header/breadcrumbs.vue'
import PageFooter from '~components/layout/footer/index.vue'
import HomeBlog from '~components/home/blog.vue'
import HomeCustomers from '~components/home/customers.vue'
import HomeGallery from '~components/home/gallery.vue'
import HomeService from '~components/home/service.vue'
import HomeSlider from '~components/home/slider.vue'
import HomeTeam from '~components/home/team.vue'
import HomeTestimonials from '~components/home/testimonials.vue'
import HomeWelcome from '~components/home/welcome.vue'

export default {
  components: {
    PageNavigation,
    PageBreadcrumbs,
    PageFooter,
    HomeBlog,
    HomeCustomers,
    HomeGallery,
    HomeService,
    HomeSlider,
    HomeTeam,
    HomeTestimonials,
    HomeWelcome
  },
  data() {
    return {
      title: 'VueNuxt',
      description: 'Universal Vue.js Applications'
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