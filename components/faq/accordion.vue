<template>
    <div class="panel-group"
         id="accordion">
        <!-- Accordion Item -->
        <div class="panel panel-default"
             v-for="(faq, index) in faq.items">
            <div class="panel-heading">
                <h4 class="panel-title">
                        <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" :href="'#' + faq.id">{{ faq.title }}</a>
                    </h4>
            </div>
            <div :id="faq.id"
                 :class="[ 'panel-collapse', 'collapse', { in: !index }]">
                <div class="panel-body"
                     v-html="faq.text"></div>
            </div>
        </div>
        <!-- End Accordion Item -->
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    created: function () {
        try {
//            const e = new Error('Faq Error');
//            e.name = 'FaqError';
//            e.statusCode = 401;
//            throw e;

            //--- Faq ---//
            this.$store.dispatch('receiveFaq');
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error')
        }
    },
    computed: mapGetters({
        faq: 'getFaq',
    }),
}
</script>