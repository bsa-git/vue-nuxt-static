<template>
    <div class="section section-blog">
        <div class="spacer">
            <div class="container">
                <div class="title text-center">
                    <span>{{ blog.title2 }}</span>
                    <h1>{{ blog.title1 }}</h1>
                    <p>{{ blog.title3 }}</p>
                </div>
                <!-- /.title -->
                <div class="row">
                    <div class="col-sm-4"
                         v-for="post in blog.posts">
                        <div class="blog-post post-image">
                            <a class="blog-title"
                               :href="post.url">
                                <img class="img-responsive"
                                     :src="post.img"
                                     alt=""> {{ post.title }}
                            </a>
                            <span class="small-text blog-time">{{ post.date }}</span>
                            <p v-html="post.content"></p>
                        </div>
                        <!-- /.blog-post -->
                    </div>
                </div>
                <!-- /.row -->
                <div class="text-center blog-btns">
                    <a :href="blog.url"
                       class="btn btn-primary btn-lg">view blog</a>
                </div>
            </div>
            <!-- /.container-fluid -->
        </div>
        <!-- /.spacer -->
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