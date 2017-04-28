<template>
    <div id="osahan-slider"
         class="owl-carousel owl-theme">
        <div class="item"
             v-for="item in slider.items">
            <img class="slider-img"
                 :src="item.img.src"
                 :title="item.img.title"
                 :alt="item.img.alt">
            <div class="carousel-text">
                <div class="line">
                    <img :src="item.body.img_src"
                         :title="item.body.img_title"
                         alt="item.body.img_alt">
                    <h1 v-html="item.body.title"></h1>
                    <p v-html="item.body.description"></p>
                    <div class="carousel-btns">
                        <a :href="item.body.read_more_url"
                           class="btn btn-default btn-lg">Read More</a>
                        <a :href="item.body.live_demo_url"
                           class="btn btn-primary btn-lg">Live Demo</a>
                    </div>
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
            //--- Slider ---//
            this.$store.dispatch('receiveSlider');
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error')
        }
    },
    mounted: function () {
        try {
            this.iniSlider({
                id: "#osahan-slider",
                opts: {
                    slideSpeed: 300,
                    autoPlay: true,
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
        slider: 'getSlider',
    }),
    methods: {
        ...mapActions([
            'iniSlider'
        ])
    }
}
</script>