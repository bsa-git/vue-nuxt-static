<template>
    <ul class="pager">
        <li class="previous">
            <a :href="blog.pager.prev_url">&larr; Older</a>
        </li>
        <li class="next">
            <a :href="blog.pager.next_url">Newer &rarr;</a>
        </li>
    </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: mapGetters({
        blog: 'getBlog'
    }),
}
</script>