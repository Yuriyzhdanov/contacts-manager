<script>
import RecentCallItem from './RecentCallItem.vue'
export default {
  components: {
    RecentCallItem,
  },

  props: ['contacts'],
}
</script>

<template>
  <div class="recent-call col s12">
    <ul id="app-recent-calls" class="collection">
      <div id="tab-2" class="col s12">
        <div class="container">
          <div class="row valign-wrapper">
            <RecentCallItem
              v-for="contact in contacts"
              :key="contact.id"
              :contact="contact"
            />
          </div>
        </div>
      </div>
    </ul>
  </div>
</template>
