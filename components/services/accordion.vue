<template>
    <div>
        <h2 class="page-header">Accordion</h2>
        <div class="panel-group"
             id="accordion">
            <!-- Accordion Item -->
            <div class="panel panel-default"
                 v-for="(service, index) in services.accordion.items">
                <div class="panel-heading">
                    <h4 class="panel-title">
                            <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" :href="'#' + service.id">{{ service.title }}</a>
                        </h4>
                </div>
                <div :id="service.id"
                     :class="[ 'panel-collapse', 'collapse', { in: !index }]">
                    <div class="panel-body"
                         v-html="service.text">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    created: function () {
        try {
            //--- Services ---//
            this.$store.dispatch('receiveServicesAccordion');
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