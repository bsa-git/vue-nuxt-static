<template>
    <div class="intro">
        <h1>{{ team.info.title }}</h1>
        <p v-html="team.info.description"></p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    created: function () {
        try {
            //--- Team ---//
            this.$store.dispatch('receiveTeamInfo');
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