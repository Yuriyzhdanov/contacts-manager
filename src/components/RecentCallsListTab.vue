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
      <p v-if="recentCalls.length === 0" class="empty-state">
        <span class="material-symbols-outlined icon">history</span>
        <br />
        <span>Список недавних вызовов пуст</span>
      </p>

      <div v-else class="row valign-wrapper">
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
