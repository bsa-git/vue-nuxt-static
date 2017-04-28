<template>
    <div class="widget widget-categories">
        <h2 class="page-header">Categories</h2>
        <ul>
            <li v-for="category in blog.categories">
                <a :href="category.url">{{ category.type }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    created: function () {
        try {
            //--- Blog ---//
            this.$store.dispatch('receiveBlogCategories');
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error')
        }
    },
    computed: mapGetters({
        blog: 'getBlog',
    }),
}
</script>