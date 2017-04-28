<template>
    <div class="footer-widget contact-widget">
        <h4>Contact Us<span class="head-line"></span></h4>
        <ul>
            <li><span><i class="fa fa-map-marker"></i> Location:</span> {{ about.personal_data.contact.location }} </li>
            <li><span><i class="fa fa-phone"></i> Phone Number:</span> {{ about.personal_data.contact.phone }}</li>
            <li><span><i class="fa fa-envelope-o"></i> Email:</span> {{ about.personal_data.contact.email }}</li>
            <li><span><i class="fa fa-globe"></i> Website:</span> {{ about.personal_data.contact.website }}</li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

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
}
</script>