<template>
    <div>
        <!-- Navigation -->
        <page-navigation groupMenu="other-pages"></page-navigation>
        <!-- Heading/Breadcrumbs -->
        <page-breadcrumbs :title="title" :description="description"></page-breadcrumbs>
        <!-- Page Content -->
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div class="list-group">
                        <nuxt-link to="/sidebar" :class="['list-group-item', { 'active': $route.name == 'sidebar' }]">Home</nuxt-link>
                        <nuxt-link to="/sidebar/about" :class="['list-group-item', { 'active': $route.name == 'sidebar-about' }]">About</nuxt-link>
                        <nuxt-link to="/sidebar/services" :class="['list-group-item', { 'active': $route.name == 'sidebar-services' }]">Services</nuxt-link>
                        <nuxt-link to="/sidebar/portfolio-1" :class="['list-group-item', { 'active': $route.name == 'sidebar-portfolio-1' }]">1 Column Portfolio</nuxt-link>
                        <nuxt-link to="/sidebar/portfolio-2" :class="['list-group-item', { 'active': $route.name == 'sidebar-portfolio-2' }]">2 Column Portfolio</nuxt-link>
                        <nuxt-link to="/sidebar/portfolio-3" :class="['list-group-item', { 'active': $route.name == 'sidebar-portfolio-3' }]">3 Column Portfolio</nuxt-link>
                        <nuxt-link to="/sidebar/portfolio-4" :class="['list-group-item', { 'active': $route.name == 'sidebar-portfolio-4' }]">4 Column Portfolio</nuxt-link>
                        <nuxt-link to="/sidebar/portfolio-item" :class="['list-group-item', { 'active': $route.name == 'sidebar-portfolio-item' }]">Single Portfolio Item</nuxt-link>
                        <nuxt-link to="/sidebar/blog-home1" :class="['list-group-item', { 'active': $route.name == 'sidebar-blog-home1' }]">Blog Home 1</nuxt-link>
                        <nuxt-link to="/sidebar/blog-home2" :class="['list-group-item', { 'active': $route.name == 'sidebar-blog-home2' }]">Blog Home 2</nuxt-link>
                        <nuxt-link to="/sidebar/blog-post" :class="['list-group-item', { 'active': $route.name == 'sidebar-blog-post' }]">Blog Post</nuxt-link>
                        <nuxt-link to="/sidebar/full-width" :class="['list-group-item', { 'active': $route.name == 'sidebar-full-width' }]">Full Width Page</nuxt-link>
                        <nuxt-link to="/sidebar/faq" :class="['list-group-item', { 'active': $route.name == 'sidebar-faq' }]">FAQ</nuxt-link>
                        <nuxt-link to="/sidebar/error-404" :class="['list-group-item', { 'active': $route.name == 'sidebar-error-404' }]">404</nuxt-link>
                        <nuxt-link to="/sidebar/pricing" :class="['list-group-item', { 'active': $route.name == 'sidebar-pricing' }]">Pricing Table</nuxt-link>
                        <nuxt-link to="/sidebar/contact" :class="['list-group-item', { 'active': $route.name == 'sidebar-contact' }]">Contact</nuxt-link>
                    </div>
                </div>
                <div class="col-md-9">
                    <nuxt-child></nuxt-child>
                </div>
            </div>
        </div>
        <!-- Footer -->
        <page-footer></page-footer>
    </div>
</template>

<script>
    import PageNavigation from '~components/layout/header/navigation.vue'
    import PageBreadcrumbs from '~components/layout/header/breadcrumbs.vue'
    import PageFooter from '~components/layout/footer/index.vue'

    export default {
        components: {
            PageNavigation,
            PageBreadcrumbs,
            PageFooter,
        },
        data() {
            return {
                title: 'Sidebar',
                description: 'Lorem ipsum dolor sit ame'
            }
        },
        head() {
            return {
                title: this.title,
                meta: [
                    { hid: 'description', name: 'description', content: this.description }
                ],
            }
        },
    }
</script>