<template>
    <div class="section service">
        <div class="container">
            <div class="title text-center">
                <span>{{ services.home.title2 }}</span>
                <h1>{{ services.home.title1 }}</h1>
                <p>{{ services.home.title3 }}</p>
            </div>
            <div class="row">
                <div :data-wow-duration="service.duration"
                     :style="{ 'visibility': 'visible', 'animation-duration': service.duration, 'animation-name': 'flipInY' }"
                     class="col-md-3 col-sm-6 service-box service-center flipInY animated"
                     v-for="service in services.home.items">
                    <div class="service-icon">
                        <i :class="['fa', service.icon]"></i>
                    </div>
                    <div class="service-content">
                        <h4>{{ service.title }}</h4>
                        <p>{{ service.description }}</p>
                    </div>
                </div>
            </div>
            <!-- .row -->
        </div>
        <!-- .container -->
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    created: function () {
        try {
            //--- Services ---//
            this.$store.dispatch('receiveServicesHome');
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error')
        }
    },
    computed: mapGetters({
        services: 'getServices',
    }),
}
</script>