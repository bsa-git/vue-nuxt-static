<template>
    <div class="container portfolio-2-col">
        <!-- Projects Row -->
        <div class="row"
             v-for="item in portfolio.items">
            <div class="col-md-6 img-portfolio">
                <a :href="item.item1.url">
                    <img class="img-responsive img-hover"
                         :src="item.item1.img"
                         alt="">
                </a>
                <h3>
                        <a :href="item.item1.url">{{ item.item1.title }}</a>
                    </h3>
                <p v-html="item.item1.content"></p>
            </div>
            <div class="col-md-6 img-portfolio">
                <a :href="item.item2.url">
                    <img class="img-responsive img-hover"
                         :src="item.item2.img"
                         alt="">
                </a>
                <h3>
                        <a :href="item.item2.url">{{ item.item2.title }}</a>
                    </h3>
                <p v-html="item.item2.content"></p>
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
            this.$store.dispatch('receivePortfolioItems', { id: 1, nCol: 2 });
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