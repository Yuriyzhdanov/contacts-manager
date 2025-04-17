<script>
import RecentCallCard from './RecentCallCard.vue'

export default {
  components: { RecentCallCard },

  props: ['recentCalls'],

  emits: ['call-phone'],
}
</script>

<template>
  <div id="tab-2" class="col s12" style="display: none">
    <div class="container">
      <div class="row valign-wrapper">
        <div class="recent-call col s12">
          <ul id="app-recent-calls" class="collection">
            <RecentCallCard
              v-for="recentCall of recentCalls"
              :key="recentCall.id"
              :recent-call="recentCall"
              @click="$emit('call-phone', recentCall.phone)"
            />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
