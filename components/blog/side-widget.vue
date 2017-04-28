<template>
    <div>
        <div class="well"
             v-for="widget in about.widgets">
            <h4>{{ widget.title }}</h4>
            <p v-html="widget.content"></p>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    created: function () {
        try {
            //--- About ---//
            this.$store.dispatch('receiveWidgetsData');
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