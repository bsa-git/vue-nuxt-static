<template>
    <div>
        <!-- Navigation -->
        <page-navigation></page-navigation>
        <!-- Heading/Breadcrumbs -->
        <page-breadcrumbs :title="title"
                          :description="description"></page-breadcrumbs>
        <!-- Page Content -->
        <div class="container">
            <div class="row pricing-page">
                <div class="col-md-4"
                     v-for="plan in pricing.items">
                    <div :class="['panel', 'text-center', plan.panel_class]">
                        <div class="panel-heading">
                            <h3 class="panel-title">{{ plan.title }}</h3>
                        </div>
                        <div class="panel-body">
                            <div class="plan-price">
                                <div class="price-value">{{ plan.price_value }}<span>.00</span></div>
                                <div class="interval">per month</div>
                            </div>
                        </div>
                        <ul class="list-group">
                            <li class="list-group-item"><strong>{{ plan.user }}</strong> User</li>
                            <li class="list-group-item"><strong>{{ plan.projects }}</strong> Projects</li>
                            <li class="list-group-item"><strong>{{ plan.email_accounts }}</strong> Email Accounts</li>
                            <li class="list-group-item"><strong>{{ plan.disk_space }}</strong> Disk Space</li>
                            <li class="list-group-item"><strong>{{ plan.monthly_bandwidth }}</strong> Monthly Bandwidth
                            </li>
                            <li class="list-group-item"><a href="#"
                                                           :class="['btn', plan.btn_class]">Sign Up!</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer -->
        <page-footer></page-footer>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import PageNavigation from '~components/layout/header/navigation.vue'
    import PageBreadcrumbs from '~components/layout/header/breadcrumbs.vue'
    import PageFooter from '~components/layout/footer/index.vue'

    export default {
        components: {
            PageNavigation,
            PageBreadcrumbs,
            PageFooter,
        },
        data() {
            return {
                title: 'Pricing Table',
                description: 'Our pricing information'
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
        fetch({store, error}) {
            try {

//                const e = new Error('Pricing Error');
//                e.name = 'PricingError';
//                e.statusCode = 402;
//                throw e;

                store.dispatch('receivePricing');
            } catch (e) {
                error(e)
            }
        },
        computed: mapGetters({
            pricing: 'getPricing',
        }),
    }
</script>