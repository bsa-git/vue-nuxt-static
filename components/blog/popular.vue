<template>
    <div class="widget widget-popular-posts">
        <h2 class="page-header">Popular Post</h2>
        <ul>
            <li v-for="post in blog.popular">
                <div class="widget-thumb">
                    <a :href="post.url"><img alt=""
                             :src="post.img"></a>
                </div>
                <div class="widget-content">
                    <h5><a :href="post.url">{{ post.content }}</a></h5>
                    <span>{{ post.creation_date }}</span>
                </div>
                <div class="clearfix"></div>
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
            this.$store.dispatch('receiveBlogPopular');
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