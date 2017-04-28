<template>
    <div>
        <div class="container">
            <div class="row">
                <contact-form></contact-form>
                <contact-info></contact-info>
            </div>
        </div>
        <contact-map></contact-map>
    </div>
</template>

<script>
import ContactForm from '~components/contact/form.vue'
import ContactInfo from '~components/contact/info.vue'
import ContactMap from '~components/contact/map.vue'

export default {
    components: {
        ContactForm,
        ContactInfo,
        ContactMap
    },
    data() {
        return {
            title: 'Contact',
            description: 'Our contact information'
        }
    },
    head() {
        return {
            script: [
                { src: '/js/jquery-plugins/jqBootstrapValidation.js' },
            ],
        }
    },
    created: function () {
        // Set parent data (title, description)
        this.$parent.title = this.title;
        this.$parent.description = this.description;
    },
}
</script>