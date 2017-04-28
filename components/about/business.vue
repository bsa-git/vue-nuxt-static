<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <img class="img-responsive"
                     :src="about.business.img_url"
                     :alt="about.business.img_alt">
            </div>
            <div class="col-md-6">
                <h1>{{ about.business.title }}</h1>
                <h3 style="margin: 8px 0;">{{ about.business.summary }}</h3>
                <div v-html="about.business.text"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    created: function () {
        try {
            //--- Personal data ---//
            this.$store.dispatch('receiveBusinessData');
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error')
        }
    },
    computed: mapGetters({
        about: 'getAbout',
    }),
}
</script>