<template>
    <div>
        <!-- Navigation -->
        <page-navigation></page-navigation>
        <!-- Heading/Breadcrumbs -->
        <page-breadcrumbs :title="title" :description="description"></page-breadcrumbs>
        <!-- Page Content -->
        <div>
            <services-panels></services-panels>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <services-tabs></services-tabs>
                    </div>
                    <div class="col-lg-4">
                        <services-accordion></services-accordion>
                    </div>
                </div>
            </div>
            <services-list></services-list>
            <services-customers></services-customers>
        </div>
        <!-- Footer -->
        <page-footer></page-footer>
    </div>
</template>

<script>
    import PageNavigation from '~components/layout/header/navigation.vue'
    import PageBreadcrumbs from '~components/layout/header/breadcrumbs.vue'
    import PageFooter from '~components/layout/footer/index.vue'
    import ServicesAccordion from '~components/services/accordion.vue'
    import ServicesList from '~components/services/list.vue'
    import ServicesPanels from '~components/services/panels.vue'
    import ServicesTabs from '~components/services/tabs.vue'
    import ServicesCustomers from '~components/home/customers.vue'


    export default {
        components: {
            PageNavigation,
            PageBreadcrumbs,
            PageFooter,
            ServicesAccordion,
            ServicesList,
            ServicesPanels,
            ServicesTabs,
            ServicesCustomers
        },
        data() {
            return {
                title: 'Services',
                description: 'We Are Professional'
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