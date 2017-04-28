<template>
    <div>
        <!-- Navigation -->
        <page-navigation></page-navigation>
        <!-- Heading/Breadcrumbs -->
        <page-breadcrumbs :title="title" :description="description"></page-breadcrumbs>
        <!-- Page Content -->
        <div>
            <div class="container">
                <div class="row">
                    <contact-form></contact-form>
                    <contact-info></contact-info>
                </div>
            </div>
            <contact-map></contact-map>
        </div>
        <!-- Footer -->
        <page-footer></page-footer>
    </div>
</template>

<script>
    import PageNavigation from '~components/layout/header/navigation.vue'
    import PageBreadcrumbs from '~components/layout/header/breadcrumbs.vue'
    import PageFooter from '~components/layout/footer/index.vue'
    import ContactForm from '~components/contact/form.vue'
    import ContactInfo from '~components/contact/info.vue'
    import ContactMap from '~components/contact/map.vue'

    export default {
        components: {
            PageNavigation,
            PageBreadcrumbs,
            PageFooter,
            ContactForm,
            ContactInfo,
            ContactMap
        },
        data() {
            return {
                title: 'Contact',
                description: 'Our contact information'
            }
        },
        head() {
            return {
                title: this.title,
                meta: [
                    { hid: 'description', name: 'description', content: this.description }
                ],
                script: [
                    { src: '/js/jquery-plugins/jqBootstrapValidation.js' },
                ],
            }
        },
    }
</script>