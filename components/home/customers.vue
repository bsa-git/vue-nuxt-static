<template>
    <div class="section section-customers">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2 class="page-header">Our Happy Customers</h2>
                </div>
                <div class="col-xs-12">
                    <div id="customers"
                         class="owl-carousel owl-carousel-featured">
                        <div class="item"
                             v-for="customer in customers">
                            <a :href="customer.url">
                                <img alt=""
                                     :src="customer.img">
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
            //--- Customers ---//
            this.$store.dispatch('receiveCustomers');
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
        customers: 'getCustomers',
    }),
    methods: {
        ...mapActions([
            'iniSlider'
        ])
    }
}
</script>