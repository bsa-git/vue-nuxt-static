<template>
    <div class="col-md-8">
        <h2 class="page-header">Send us a Message</h2>
        <form name="sentMessage"
              id="contactForm"
              novalidate>
            <div class="control-group form-group">
                <div class="controls">
                    <label>Full Name:</label>
                    <input type="text"
                           class="form-control"
                           id="name"
                           required
                           data-validation-required-message="Please enter your name.">
                    <p class="help-block"></p>
                </div>
            </div>
            <div class="control-group form-group">
                <div class="controls">
                    <label>Phone Number:</label>
                    <input type="tel"
                           class="form-control"
                           id="phone"
                           required
                           data-validation-required-message="Please enter your phone number.">
                </div>
            </div>
            <div class="control-group form-group">
                <div class="controls">
                    <label>Email Address:</label>
                    <input type="email"
                           class="form-control"
                           id="email"
                           required
                           data-validation-required-message="Please enter your email address.">
                </div>
            </div>
            <div class="control-group form-group">
                <div class="controls">
                    <label>Message:</label>
                    <textarea class="form-control"
                              id="message"
                              required
                              data-validation-required-message="Please enter your message"
                              maxlength="999"
                              style="resize:none"></textarea>
                </div>
            </div>
            <div id="success"></div>
            <!-- For success/fail messages -->
            <button type="submit"
                    class="btn btn-primary">Send Message</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data: function () {
        return {
            urlForm: "/bin/contact_me.php"
        }
    },
    mounted: function () {
        try {
            const urlForm = this.urlForm;
            this.iniBootstrapValidation({
                id: "#contactForm",
                urlForm: this.urlForm
            })
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error')
        }
    },
    methods: {
        ...mapActions([
            'iniBootstrapValidation'
        ])
    }
}
</script>