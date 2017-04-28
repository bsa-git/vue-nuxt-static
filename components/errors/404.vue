<template>
    <!-- Page Content -->
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="main-content">
                    <div class="error-page text-center">
                        <h1>404</h1>
                        <h3>File not Found</h3>
                        <p>{{ errMessage }}</p>
                        <div class="text-center">
                            <nuxt-link class="btn btn-primary"
                                       to="/">Back To Home</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            errMessage: 'We\'re sorry, but the page you were looking for doesn\'t exist.'
        }
    }
}

</script>