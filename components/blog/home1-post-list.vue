<template>
    <div>
        <!-- Posts -->
        <div v-for="post in blog.posts">
            <h2>
                    <a :href="post.url">{{ post.title }}</a>
                </h2>
            <ul class="post-meta">
                <li><i class="fa fa-user"></i> By <a :href="post.meta.user.url">{{ post.meta.user.name }}</a></li>
                <li><i class="fa fa-clock-o"></i>Posted on {{ post.meta.date }}</li>
                <li><i class="fa fa-tag"></i> <a :href="tag.url"
                       v-for="(tag, index) in post.meta.tags"><span v-if="index">, </span>{{ tag.item }}</a></li>
                <li><i class="fa fa-comment-o"></i> <a :href="post.meta.comments.url">{{ post.meta.comments.count }} Comments</a></li>
            </ul>
    
            <hr>
    
            <a :href="post.url">
                <img class="img-responsive img-hover"
                     :src="post.img"
                     alt="">
            </a>
    
            <hr>
    
            <p v-html="post.content"></p>
            <a class="btn btn-primary"
               :href="post.url">Read More <i class="fa fa-angle-right"></i></a>
    
            <hr>
    
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    created: function () {
        try {
            //--- Blog ---//
            this.$store.dispatch('receiveBlogPosts', 1);
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