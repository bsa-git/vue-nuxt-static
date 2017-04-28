<template>
  <div>
    <nuxt></nuxt>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    components: {
    },
    created: function () {
        //--- Receive Config ---//
        this.receiveConfig();
    },
     methods: {
        ...mapActions([
            'receiveConfig'
        ])
    }
  }
</script>