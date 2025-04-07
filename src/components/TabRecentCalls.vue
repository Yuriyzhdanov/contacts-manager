<script>
import RecentCallItem from './RecentCallItem.vue'
export default {
  components: {
    RecentCallItem,
  },

  props: ['contacts'],

  computed: {
    recentCalls() {
      return this.contacts.filter(contact => contact.isCalls)
    },
  },
}
</script>

<template>
  <div id="tab-2" class="col s12" style="display: none">
    <div class="container">
      <div class="row valign-wrapper">
        <div class="recent-call col s12">
          <ul id="app-recent-calls" class="collection">
            <div id="tab-2" class="col s12">
              <div class="container">
                <div class="row valign-wrapper">
                  <RecentCallItem
                    v-for="contact in recentCalls"
                    :key="contact.id"
                    :contact="contact"
                  />
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
