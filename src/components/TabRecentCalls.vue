<script>
import RecentCallItem from './RecentCallItem.vue'
export default {
  components: {
    RecentCallItem,
  },

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
            <RecentCallItem
              v-for="recentCall in recentCalls"
              :key="recentCall.id"
              :recentCall="recentCall"
              @click="$emit('call-phone', recentCall.phone)"
            />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
