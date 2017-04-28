<template>
    <div class="footer-widget instagram-widget">
        <h4>Insta <i class="fa fa-instagram"></i> Gram<span class="head-line"></span></h4>
        <ul class="instagram-list">
    
            <li v-for="img in gallery.instagram">
                <a class="lightbox"
                   :href="img">
                    <img :src="img"
                         alt="">
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    created: function () {
        try {
            //--- Gallery instagram ---//
            this.$store.dispatch('receiveInstagram');
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error')
        }
    },
    computed: mapGetters({
        gallery: 'getGallery',
    }),
}
</script>