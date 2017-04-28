<template>
    <div class="container">
    
        <!-- Projects Row -->
        <div class="row"
             v-for="item in portfolio.items">
            <div class="col-md-3 img-portfolio">
                <a :href="item.item1.url">
                    <img class="img-responsive img-hover"
                         :src="item.item1.img"
                         alt="">
                </a>
            </div>
            <div class="col-md-3 img-portfolio">
                <a :href="item.item2.url">
                    <img class="img-responsive img-hover"
                         :src="item.item2.img"
                         alt="">
                </a>
            </div>
            <div class="col-md-3 img-portfolio">
                <a :href="item.item3.url">
                    <img class="img-responsive img-hover"
                         :src="item.item3.img"
                         alt="">
                </a>
            </div>
            <div class="col-md-3 img-portfolio">
                <a :href="item.item4.url">
                    <img class="img-responsive img-hover"
                         :src="item.item4.img"
                         alt="">
                </a>
            </div>
        </div>
        <!-- /.row -->
    
        <hr>
    
        <!-- Pagination -->
        <portfolio-pager></portfolio-pager>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PortfolioPager from '~components/portfolio/pager.vue'

export default {
    components: {
        PortfolioPager,
    },
    created: function () {
        try {
            //--- Portfolio ---//
            this.$store.dispatch('receivePortfolioItems', { id: 1, nCol: 4 });
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