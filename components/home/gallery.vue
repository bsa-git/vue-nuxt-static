<template>
    <div class="section gallery">
        <div class="title text-center">
            <span>{{ gallery.title2 }}</span>
            <h1>{{ gallery.title1 }}</h1>
            <p>{{ gallery.title3 }}</p>
        </div>
        <div class="container gal-container">
            <!-- gal-item -->
            <div class="col-md-6 col-sm-12 co-xs-12 gal-item"
                 v-for="item in gallery.items">
                <div class="box">
                    <a :href="item.url"
                       data-toggle="modal"
                       :data-target="'#' + item.id">
                        <img :src="item.img">
                    </a>
                    <div class="modal fade"
                         :id="item.id"
                         tabindex="-1"
                         role="dialog">
                        <div class="modal-dialog"
                             role="document">
                            <div class="modal-content">
                                <button type="button"
                                        class="close"
                                        data-dismiss="modal"
                                        aria-label="Close"><span aria-hidden="true">×</span></button>
                                <div class="modal-body">
                                    <img :src="item.img">
                                </div>
                                <div class="col-md-12 description">
                                    <h4 v-html="item.description"></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end gal-item -->
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    created: function () {
        try {
            //--- Gallery ---//
            this.$store.dispatch('receiveGallery');
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error')
        }
    },
    computed: mapGetters({
        gallery: 'getGallery',
    }),
}
</script>