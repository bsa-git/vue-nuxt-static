<template>
    <div class="section testimonials">
        <div class="container text-center">
            <div class="title text-center">
                <span>{{ testimonials.title2 }}</span>
                <h1>{{ testimonials.title1 }}</h1>
                <p>{{ testimonials.title3 }}</p>
            </div>
            <!-- /.title -->
            <div id="testimonials"
                 class="owl-carousel owl-theme">
                <div class="item"
                     v-for="testimonial in testimonials.items">
                    <p class="s-12 m-12 l-8 center"
                       v-html="testimonial.author_text"></p>
                    <div class="testimonial-author"><span>{{ testimonial.author_name }}</span> - {{ testimonial.author_position }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    created: function () {
        try {
            //--- Testimonials ---//
            this.$store.dispatch('receiveTestimonials');
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error')
        }
    },
    mounted: function () {
        try {
            this.iniSlider({
                id: "#testimonials",
                opts: {
                    slideSpeed: 300,
                    autoPlay: true,
                    navigation: false,
                    pagination: true,
                    singleItem: true
                }
            })
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error')
        }
    },
    computed: mapGetters({
        testimonials: 'getTestimonials',
    }),
    methods: {
        ...mapActions([
            'iniSlider'
        ])
    }
}
</script>