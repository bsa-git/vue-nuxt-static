<template>
    <div style="margin-top: 19px;"
         class="social-widget portfolio-share">
        <h4 style="margin: 0 0 7px;"> Share This:</h4>
        <ul class="social-icons">
            <li v-for="(val, key) in socials.share">
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
            this.$store.dispatch('receiveShareSocials');
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