<template>
    <div class="container">
        <blog-post-list></blog-post-list>
        <blog-pager></blog-pager>
    </div>
</template>

<script>
import BlogPostList from '~components/blog/home2-post-list.vue'
import BlogPager from '~components/blog/pager.vue'

export default {
    components: {
        BlogPostList,
        BlogPager,
    },
    data() {
        return {
            title: 'Blog Home Two',
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