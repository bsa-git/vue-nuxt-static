<template>
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
</template>

<script>
import FaqBlogPopular from '~components/blog/popular.vue'
import FaqAccordion from '~components/faq/accordion.vue'


export default {
    components: {
        FaqBlogPopular,
        FaqAccordion
    },
    data() {
        return {
            title: 'FAQ',
            description: 'A list of questions and answers'
        }
    },
    created: function () {
        // Set parent data (title, description)
        this.$parent.title = this.title;
        this.$parent.description = this.description;
    },
}
</script>