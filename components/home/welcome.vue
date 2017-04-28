<template>
    <div class="section welcome-panel">
        <div class="container">
            <div class="row">
                <div class="col-md-4"
                     v-for="item in welcome.items">
                    <div :class="['panel', 'panel-' + item.class]">
                        <div class="panel-heading">
                            <h4><i :class="['fa', 'fa-fw', item.icon]"></i> {{ item.head }}</h4>
                        </div>
                        <div class="panel-body">
                            <p v-html="item.body"></p>
                            <a :class="['btn', 'btn-' + item.class]"
                               :href="item.url"
                               target="_blank">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.row -->
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    created: function () {
        try {
            //--- Welcome ---//
            this.$store.dispatch('receiveWelcome');
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error')
        }
    },
    computed: mapGetters({
        welcome: 'getWelcome',
    }),
}
</script>