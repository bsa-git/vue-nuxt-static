<template>
    <div>
        <!-- Navigation -->
        <page-navigation></page-navigation>
        <!-- Heading/Breadcrumbs -->
        <page-breadcrumbs :title="title"
                          :description="description"></page-breadcrumbs>
        <!-- Error content -->
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="main-content">
                        <div class="error-page text-center">
                            <h1 v-if="system.error">{{ system.error.statusCode }}</h1>
                            <h3 v-else>No Error</h3>
                            <h3 v-if="system.error">{{ system.error.name }}</h3>
                            <p v-if="system.error">{{ description }}</p>
                            <br/>
                            <div class="text-center">
                                <nuxt-link class="btn btn-primary"
                                           to="/">Back To Home
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import PageNavigation from '~components/layout/header/navigation.vue'
    import PageBreadcrumbs from '~components/layout/header/breadcrumbs.vue'

    export default {
        components: {
            PageNavigation,
            PageBreadcrumbs,
        },
        data() {
            return {
                title: '',
                description: ''
            }
        },
        head() {
            return {
                title: this.title,
                meta: [
                    {hid: 'description', name: 'description', content: this.description}
                ],
            }
        },
        created: function () {
            if (this.system.error) {
                this.title = this.system.error.statusCode ? this.system.error.statusCode : this.system.error.name;
                this.description = this.system.error.message;
            } else {
                this.title = 'No Error';
            }
        },
        computed: mapGetters({
            system: 'getSystem',
        }),
        beforeDestroy: function () {
            this.$store.commit('CLEAR_ERROR');
        },
    }
</script>