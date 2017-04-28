<template>
  <div>
    <!-- Navigation -->
    <page-navigation></page-navigation>
    <!-- Heading/Breadcrumbs -->
    <page-breadcrumbs :title="title"
                      :description="description"></page-breadcrumbs>
    <!-- Page Content -->
    <div>
      <about-business></about-business>
      <about-team></about-team>
      <about-purchase></about-purchase>
      <about-customers></about-customers>
    </div>
    <!-- Footer -->
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageNavigation from '~components/layout/header/navigation.vue'
import PageBreadcrumbs from '~components/layout/header/breadcrumbs.vue'
import PageFooter from '~components/layout/footer/index.vue'
import AboutBusiness from '~components/about/business.vue'
import AboutPurchase from '~components/about/purchase.vue'
import AboutTeam from '~components/home/team.vue'
import AboutCustomers from '~components/home/customers.vue'


export default {
  components: {
    PageNavigation,
    PageBreadcrumbs,
    PageFooter,
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