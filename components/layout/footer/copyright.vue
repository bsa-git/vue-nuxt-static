<template>
    <div class="copyright-section">
        <div class="row">
            <div class="col-md-6">
                <p>{{ about.personal_data.copyright }} &nbsp;&nbsp; | &nbsp;&nbsp; Designed With <i class="fa fa-heart red"></i> By
                    <a target="_blank" :href="about.personal_data.designed_with_url"> {{ about.personal_data.designed_with }}</a>
                </p>
            </div>
            <!-- .col-md-6 -->
            <div class="col-md-6">
                <ul class="footer-nav">
                    <li><a href="/"><i class="fa fa-home"></i></a>
                        <li v-for="item in footer_nav">
                            <a :href="item.url">{{ item.title }}</a>
                        </li>
                </ul>
            </div>
            <!-- .col-md-6 -->
        </div>
        <!-- .row -->
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    created: function () {
        try {
            //--- Personal data ---//
            this.$store.dispatch('receivePersonalData');
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error')
        }
    },
    computed: mapGetters({
        about: 'getAbout',
    }),
    data: function () {
        return {
            footer_nav: [
                { url: '/about', title: 'About Us' },
                { url: '#', title: 'Sitemap' },
                { url: '#', title: 'Privacy Policy' },
                { url: '/contact', title: 'Contact' },
            ]
        }
    },
}
</script>