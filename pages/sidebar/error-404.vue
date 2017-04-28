<template>
    <div>
        <error-404></error-404>
    </div>
</template>

<script>
import Error404 from '~components/errors/404.vue'

export default {
    components: {
        Error404
    },
    data() {
        return {
            title: '404',
            description: 'This page doesn\'t exist'
        }
    },
    created: function () {
        // Set parent data (title, description)
        this.$parent.title = this.title;
        this.$parent.description = this.description;
    },
}
</script>