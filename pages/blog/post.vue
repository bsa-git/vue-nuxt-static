<template>
    <div>
        <!-- Navigation -->
        <page-navigation groupMenu="blog"></page-navigation>
        <!-- Heading/Breadcrumbs -->
        <page-breadcrumbs :title="title"
                          :description="description"></page-breadcrumbs>
        <!-- Page Content -->
        <div class="container">
            <!-- Content Row -->
            <div class="row">
                <div class="col-lg-8">
                    <blog-post-content></blog-post-content>
                </div>
                <div class="col-md-4">
                    <blog-search></blog-search>
                    <blog-categories></blog-categories>
                    <blog-popular></blog-popular>
                    <blog-side-widget></blog-side-widget>
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
import BlogPostContent from '~components/blog/post-content.vue'
import BlogSearch from '~components/blog/search.vue'
import BlogCategories from '~components/blog/categories.vue'
import BlogPopular from '~components/blog/popular.vue'
import BlogSideWidget from '~components/blog/side-widget.vue'


export default {
    components: {
        PageNavigation,
        PageBreadcrumbs,
        PageFooter,
        BlogPostContent,
        BlogSearch,
        BlogCategories,
        BlogPopular,
        BlogSideWidget
    },
    data() {
        return {
            title: 'Blog Post',
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
    fetch({ store, error }) {
        try {
            store.dispatch('receiveBlogPost', 1);
        } catch (e) {
            error(e)
        }
    },
}
</script>