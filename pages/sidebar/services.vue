<template>
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
</template>

<script>
import ServicesAccordion from '~components/services/accordion.vue'
import ServicesList from '~components/services/list.vue'
import ServicesPanels from '~components/services/panels.vue'
import ServicesTabs from '~components/services/tabs.vue'
import ServicesCustomers from '~components/home/customers.vue'


export default {
    components: {
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