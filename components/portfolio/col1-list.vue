<template>
    <div class="container">
        <!-- Project One -->
        <div v-for="item in portfolio.items">
            <div class="row">
                <div class="col-md-7">
                    <a :href="item.url">
                        <img class="img-responsive img-hover"
                             :src="item.img"
                             alt="">
                    </a>
                </div>
                <div class="col-md-5">
                    <h3>{{ item.title }}</h3>
                    <h4>{{ item.subheading }}</h4>
                    <p v-html="item.content"></p>
                    <!-- Share Social -->
                    <portfolio-social></portfolio-social>
                    <a class="btn btn-primary"
                       :href="item.url">View Project</a>
                </div>
            </div>
            <!-- /.row -->
            <hr>
        </div>
        <!-- Pager -->
        <portfolio-pager></portfolio-pager>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PortfolioPager from '~components/portfolio/pager.vue'
import PortfolioSocial from '~components/portfolio/social.vue'

export default {
    components: {
        PortfolioSocial,
        PortfolioPager,
    },
    created: function () {
        try {
            //--- Portfolio ---//
            this.$store.dispatch('receivePortfolioItems', { id: 1, nCol: 1 });
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