<script>
import SearchQueryInput from './SearchQueryInput.vue'

export default {
  components: { SearchQueryInput },

  props: ['searchedContacts'],

  emits: ['call-phone'],

  computed: {
    searchedContactsCount() {
      return this.searchedContacts.length
    },
  },
}
</script>

<template>
  <div id="modal3" class="modal bottom-sheet modal-close non-overlay">
    <div class="modal-content">
      <div class="wrap-content">
        <h5 class="header">Найдено: {{ searchedContactsCount }}</h5>
        <ul class="collection">
          <SearchQueryInput
            v-for="searchedContact in searchedContacts"
            :key="searchedContact.id"
            :searchedContact="searchedContact"
            class="collection-item avatar"
            @click="$emit('call-phone', searchedContact.phone)"
          />
        </ul>
      </div>
    </div>
  </div>
</template>
