<template>
    <div>
        <!-- Navigation -->
        <page-navigation></page-navigation>
        <!-- Heading/Breadcrumbs -->
        <page-breadcrumbs :title="title"
                          :description="description"></page-breadcrumbs>
        <!-- Page Content -->
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <!--<p>{{ pricing.length }}</p>-->
                    <div class="main-content">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae repudiandae fugiat illo cupiditate excepturi esse officiis consectetur, laudantium qui voluptatem. Ad necessitatibus velit, accusantium expedita debitis impedit rerum totam id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quibusdam recusandae illum, nesciunt, architecto, saepe facere, voluptas eum incidunt dolores magni itaque autem neque velit in. At quia quaerat asperiores.</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae repudiandae fugiat illo cupiditate excepturi esse officiis consectetur, laudantium qui voluptatem. Ad necessitatibus velit, accusantium expedita debitis impedit rerum totam id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quibusdam recusandae illum, nesciunt, architecto, saepe facere, voluptas eum incidunt dolores magni itaque autem neque velit in. At quia quaerat asperiores.</p>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae repudiandae fugiat illo</h1>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae repudiandae fugiat illo</h2>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae repudiandae fugiat illo</h3>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae repudiandae fugiat illo</h4>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae repudiandae fugiat illo</h5>
                        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae repudiandae fugiat illo</h6>
                        <p>
                            <button class="btn btn-default btn-lg"
                                    type="button">Default
                            </button>
                            <button class="btn btn-primary btn-lg"
                                    type="button">Primary
                            </button>
                            <button class="btn btn-success btn-lg"
                                    type="button">Success
                            </button>
                            <button class="btn btn-info btn-lg"
                                    type="button">Info
                            </button>
                            <button class="btn btn-warning btn-lg"
                                    type="button">Warning
                            </button>
                            <button class="btn btn-danger btn-lg"
                                    type="button">Danger
                            </button>
                        </p>
                        <p>
                            <button class="btn btn-default"
                                    type="button">Default
                            </button>
                            <button class="btn btn-primary"
                                    type="button">Primary
                            </button>
                            <button class="btn btn-success"
                                    type="button">Success
                            </button>
                            <button class="btn btn-info"
                                    type="button">Info
                            </button>
                            <button class="btn btn-warning"
                                    type="button">Warning
                            </button>
                            <button class="btn btn-danger"
                                    type="button">Danger
                            </button>
                        </p>
                        <p>
                            <button class="btn btn-default btn-sm"
                                    type="button">Default
                            </button>
                            <button class="btn btn-primary btn-sm"
                                    type="button">Primary
                            </button>
                            <button class="btn btn-success btn-sm"
                                    type="button">Success
                            </button>
                            <button class="btn btn-info btn-sm"
                                    type="button">Info
                            </button>
                            <button class="btn btn-warning btn-sm"
                                    type="button">Warning
                            </button>
                            <button class="btn btn-danger btn-sm"
                                    type="button">Danger
                            </button>
                        </p>
                        <p>
                            <button class="btn btn-default btn-xs"
                                    type="button">Default
                            </button>
                            <button class="btn btn-primary btn-xs"
                                    type="button">Primary
                            </button>
                            <button class="btn btn-success btn-xs"
                                    type="button">Success
                            </button>
                            <button class="btn btn-info btn-xs"
                                    type="button">Info
                            </button>
                            <button class="btn btn-warning btn-xs"
                                    type="button">Warning
                            </button>
                            <button class="btn btn-danger btn-xs"
                                    type="button">Danger
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer -->
        <page-footer></page-footer>
    </div>
</template>

<script>
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
                title: 'Full Width Page',
                description: 'Lorem ipsum dolor sit ame'
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
    }
</script>