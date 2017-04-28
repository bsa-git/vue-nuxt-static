<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 blog-listing">
                <blog-post-list></blog-post-list>
                <blog-pager></blog-pager>
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
import BlogPostList from '~components/blog/home1-post-list.vue'
import BlogPager from '~components/blog/pager.vue'
import BlogSearch from '~components/blog/search.vue'
import BlogCategories from '~components/blog/categories.vue'
import BlogPopular from '~components/blog/popular.vue'
import BlogSideWidget from '~components/blog/side-widget.vue'


export default {
    components: {
        BlogPostList,
        BlogPager,
        BlogSearch,
        BlogCategories,
        BlogPopular,
        BlogSideWidget
    },
    data() {
        return {
            title: 'Blog Home One',
            description: 'Lorem ipsum dolor sit ame'
        }
    },
    created: function () {
        // Set parent data (title, description)
        this.$parent.title = this.title;
        this.$parent.description = this.description;
    },
}
</script>