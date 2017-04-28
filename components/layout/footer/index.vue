<template>
  <footer class="bounceInUp animated" data-wow-duration="2s" style="visibility: visible; animation-duration: 2s; animation-name: bounceInUp;">
    <div class="container">
        <div class="row footer-widgets">
            <!-- Subscribe Widget -->
            <div class="col-md-3 col-xs-12">
                <footer-subscribe></footer-subscribe>
            </div>
            <!-- Twitter Widget -->
            <div class="col-md-3 col-xs-12">
                <footer-twitter></footer-twitter>
            </div>
            <!-- Instagram Widget -->
            <div class="col-md-3 col-xs-12">
                <footer-instagram></footer-instagram>
            </div>
            <!-- Contact/Social Widget -->
            <div class="col-md-3 col-xs-12">
                <footer-contact></footer-contact>
                <footer-social></footer-social>
            </div>
        </div>
        <!-- Copyright -->
        <footer-copyright></footer-copyright>
    </div>
  </footer>
</template>

<script>
  import FooterCopyright from '~components/layout/footer/copyright.vue'
  import FooterContact from '~components/layout/footer/contact.vue'
  import FooterSocial from '~components/layout/footer/social.vue'
  import FooterSubscribe from '~components/layout/footer/subscribe.vue'
  import FooterTwitter from '~components/layout/footer/twitter.vue'
  import FooterInstagram from '~components/layout/footer/instagram.vue'

  export default {
    components: {
      FooterCopyright,
      FooterContact,
      FooterSocial,
      FooterSubscribe,
      FooterTwitter,
      FooterInstagram
    },
  }
</script>