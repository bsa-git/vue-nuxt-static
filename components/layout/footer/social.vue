<template>
    <div class="footer-widget social-widget">
        <h4>Follow Us<span class="head-line"></span></h4>
        <ul class="social-icons">
            <li v-for="(val, key) in socials.my">
                <a :href="val.url"
                   :class="key"><i :class="['fa', val.icon]"></i></a>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    created: function () {
        try {
            //--- Socials ---//
            this.$store.dispatch('receiveMySocials');
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error')
        }
    },
    computed: mapGetters({
        socials: 'getSocials',
    }),
}
</script>