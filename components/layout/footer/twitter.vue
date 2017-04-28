<template>
    <div class="footer-widget twitter-widget">
        <h4>Twitter <i class="fa fa-twitter-square"></i> Feed<span class="head-line"></span></h4>
        <ul>
            <li v-for="msg in socials.twitter.msgs">
                <p><a :href="socials.twitter.url">{{ socials.twitter.tag }} </a> {{ msg.title }}</p>
                <span><i class="fa fa-clock-o"></i> {{ msg.date }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    created: function () {
        try {
            //--- Twitter ---//
            this.$store.dispatch('receiveTwitter');
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