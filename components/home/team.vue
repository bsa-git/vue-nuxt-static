<template>
    <div class="section section-team">
        <div class="spacer">
            <div class="container">
                <div class="row">
                    <div class="col-sm-5">
                        <team-info></team-info>
                    </div>
                    <div class="col-sm-6 col-sm-offset-1">
                        <team-summary></team-summary>
                    </div>
                </div>
                <team-members></team-members>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TeamInfo from '~components/home/team-info.vue'
import TeamMembers from '~components/home/team-members.vue'
import TeamSummary from '~components/home/team-summary.vue'

export default {
    components: {
        TeamInfo,
        TeamMembers,
        TeamSummary,
    }
}
</script>