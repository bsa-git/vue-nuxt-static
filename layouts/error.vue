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
                            <h1>{{ error.statusCode }}</h1>
                            <h3 v-if="! error.statusCode">{{ error.name }}</h3>
                            <p>{{ error.message }}</p>
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
    import PageNavigation from '~components/layout/header/navigation.vue'
    import PageBreadcrumbs from '~components/layout/header/breadcrumbs.vue'

    export default {
        components: {
            PageNavigation,
            PageBreadcrumbs,
        },
        props: ['error'],
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
            this.title = this.error.statusCode ? this.error.statusCode: this.error.name;
            this.description = this.error.message;
            const isServer = this.$isServer;
            if (isServer) {
                const message = 'ErrorCode: ' + `${this.error.statusCode ? `(${this.error.statusCode}) ` : ''} ErrorMessage: ${this.error.message}`;
                console.log(message);
            }
        }
    }
</script>