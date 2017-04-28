<template>
    <div>
        <!-- Navigation -->
        <page-navigation groupMenu="other-pages"></page-navigation>
        <!-- Heading/Breadcrumbs -->
        <page-breadcrumbs :title="title" :description="description"></page-breadcrumbs>
        <!-- Page Content -->
        <div class="container faqs">
            <div class="row">
                <div class="col-md-4">
                    <faq-blog-popular></faq-blog-popular>
                </div>
                <div class="col-lg-8">
                    <faq-accordion></faq-accordion>
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
    import FaqBlogPopular from '~components/blog/popular.vue'
    import FaqAccordion from '~components/faq/accordion.vue'


    export default {
        components: {
            PageNavigation,
            PageBreadcrumbs,
            PageFooter,
            FaqBlogPopular,
            FaqAccordion
        },
        data() {
            return {
                title: 'FAQ',
                description: 'A list of questions and answers'
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