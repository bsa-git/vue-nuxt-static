<template>
    <div class="counters">
        <div class="row">
            <div class="col-sm-4"
                 v-for="counter in team.summary">
                <div class="counter-block">
                    <i :class="[ 'fa', counter.icon ]"></i>
                    <h2>{{ counter.sum }}</h2>
                    <p>{{ counter.title }}</p>
                </div>
                <!-- /.counter-block -->
            </div>
        </div>
        <!-- /.row -->
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    created: function () {
        try {
            //--- Team ---//
            this.$store.dispatch('receiveTeamSummary');
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error')
        }
    },
    computed: mapGetters({
        team: 'getTeam',
    }),
}
</script>