<template>
    <div>
        <!-- Navigation -->
        <page-navigation groupMenu="blog"></page-navigation>
        <!-- Heading/Breadcrumbs -->
        <page-breadcrumbs :title="title" :description="description"></page-breadcrumbs>
        <!-- Page Content -->
        <div class="container">
            <blog-post-list></blog-post-list>
            <blog-pager></blog-pager>
        </div>
        <!-- Footer -->
        <page-footer></page-footer>
    </div>
</template>

<script>
    import PageNavigation from '~components/layout/header/navigation.vue'
    import PageBreadcrumbs from '~components/layout/header/breadcrumbs.vue'
    import PageFooter from '~components/layout/footer/index.vue'
    import BlogPostList from '~components/blog/home2-post-list.vue'
    import BlogPager from '~components/blog/pager.vue'

    export default {
        components: {
            PageNavigation,
            PageBreadcrumbs,
            PageFooter,
            BlogPostList,
            BlogPager,
        },
        data() {
            return {
                title: 'Blog Home Two',
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