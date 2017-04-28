<template>
    <div>
        <h3 style="margin: 0 0 8px;">{{ portfolio.item.details.title }}</h3>
        <div v-html="portfolio.item.details.text"></div>
        <h3 style="margin: 17px 0 8px;">{{ portfolio.item.details2.title }}</h3>
        <ul>
            <li><strong>Client:</strong> {{ portfolio.item.details2.client }}</li>
            <li><strong>Status:</strong> {{ portfolio.item.details2.status }}</li>
            <li><strong>Skills:</strong> {{ portfolio.item.details2.skills }}</li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    created: function () {
        try {
            //--- Portfolio ---//
            this.$store.dispatch('receivePortfolioItem', 1);
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error')
        }
    },
    computed: mapGetters({
        portfolio: 'getPortfolio',
    }),
}
</script>