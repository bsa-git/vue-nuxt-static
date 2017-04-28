<template>
    <div>
        <!-- Navigation -->
        <page-navigation></page-navigation>
        <!-- Heading/Breadcrumbs -->
        <page-breadcrumbs :title="title"
                          :description="description"></page-breadcrumbs>
        <!-- Page Content -->
        <error-404></error-404>

    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import PageNavigation from '~components/layout/header/navigation.vue'
    import PageBreadcrumbs from '~components/layout/header/breadcrumbs.vue'
    import Error404 from '~components/errors/404.vue'

    export default {
        components: {
            PageNavigation,
            PageBreadcrumbs,
            Error404
        },
        data() {
            return {
                title: '404',
                description: 'This page doesn\'t exist'
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
//        fetch({store, error}) {
//            try {
//                store.dispatch('receivePricing');
//            } catch (e) {
//                error(e)
//            }
//        },
//        computed: mapGetters({
//            pricing: 'getPricing',
//        }),
    }
</script>