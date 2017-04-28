<template>
    <div class="section section-customers">
        <div class="container">
            <!-- Related Projects Row -->
            <div class="row">
                <div class="col-lg-12">
                    <h2 class="page-header">Related Projects</h2>
                </div>
                <div class="col-xs-12">
                    <div id="customers"
                         class="owl-carousel owl-carousel-featured">
                        <div class="item"
                             v-for="project in portfolio.items">
                            <a :href="project.url">
                                <img alt=""
                                     :src="project.img">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.row -->
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    created: function () {
        try {
            //--- Portfolio ---//
            this.$store.dispatch('receivePortfolioItems', { id: 1, nCol: 0 });
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error')
        }
    },
    mounted: function () {
        try {
            this.iniSlider({
                id: "#customers",
                opts: {
                    items: 4,
                    lazyLoad: true,
                    pagination: true,
                    autoPlay: 2000,
                    stopOnHover: true
                }
            })
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error')
        }
    },
    computed: mapGetters({
        portfolio: 'getPortfolio',
    }),
    methods: {
        ...mapActions([
            'iniSlider'
        ])
    }
}
</script>