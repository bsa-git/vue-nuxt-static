<template>
    <div class="col-md-4">
        <div class="Contact-Info">
            <h2 class="page-header">Contact Details</h2>
            <div class="tex-contact">
                <div v-html="about.subscribe.about_us"></div>
            </div>
            <div class="block-contact">
                <p>Address :</p>
                <ul>
                    <li>
                        <i class="fa fa-map-marker"></i>
                        <span> {{ about.personal_data.contact.location }}</span>
                    </li>
                </ul>
            </div>
            <div class="block-contact">
                <p>Phone :</p>
                <ul>
                    <li>
                        <i class="fa fa-phone"></i>
                        <span> {{ about.personal_data.contact.phone }}</span>
                    </li>
                    <li>
                        <i class="fa fa-fax"></i>
                        <span> {{ about.personal_data.contact.fax }}</span>
                    </li>
                </ul>
            </div>
            <div class="block-contact">
                <p>Email :</p>
                <ul>
                    <li>
                        <i class="fa fa-envelope"></i>
                        <span> {{ about.personal_data.contact.email }}</span>
                    </li>
                </ul>
            </div>
            <div class="block-contact">
                <p>Website :</p>
                <ul>
                    <li>
                        <i class="fa fa-globe"></i>
                        <span> {{ about.personal_data.contact.website }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    created: function () {
        try {
            //--- About ---//
            this.$store.dispatch('receivePersonalData');
            this.$store.dispatch('receiveSubscribeData');
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