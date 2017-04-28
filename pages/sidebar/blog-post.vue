<template>
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
</template>

<script>
import BlogPostContent from '~components/blog/post-content.vue'
import BlogSearch from '~components/blog/search.vue'
import BlogCategories from '~components/blog/categories.vue'
import BlogPopular from '~components/blog/popular.vue'
import BlogSideWidget from '~components/blog/side-widget.vue'


export default {
    components: {
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
    created: function () {
        // Set parent data (title, description)
        this.$parent.title = this.title;
        this.$parent.description = this.description;
    },
    fetch({ store, error }) {
        try {
            //--- Blog ---//
            store.dispatch('receiveBlogPost', 1);
        } catch (e) {
            error(e)
        }
    },
}
</script>