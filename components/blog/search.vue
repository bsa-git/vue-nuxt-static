<template>
    <div class="widget widget-categories">
        <h2 style="margin-top: 0;"
            class="page-header">Blog Search</h2>
        <div class="input-group">
            <input id="blog-search"
                   type="text"
                   class="form-control">
            <span class="input-group-btn">
    		    <button class="btn btn-default" type="button"><i class="fa fa-search"></i></button>
    		</span>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    mounted: function () {
        // Set focus
        $('#blog-search').focus();
    },
}
</script>