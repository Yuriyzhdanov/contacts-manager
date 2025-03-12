<script>
import { searchContacts } from '../findContact.js'

export default {
  props: ['contacts', 'searchQuery'],

  computed: {
    contactsCount() {
      return this.filteredContacts.length
    },

    filteredContacts() {
      return searchContacts(this.searchQuery, this.contacts)
    },
  },
}
</script>
<template>
  <div id="modal3" class="modal bottom-sheet modal-close non-overlay">
    <div class="modal-content">
      <div class="wrap-content">
        <h5 class="header">Найдено: {{ contactsCount }}</h5>
        {{ filteredContacts }}
        {{ searchQuery }}
        {{ contacts }}
        <ul class="collection">
          <li
            v-for="contact in filteredContacts"
            :key="contact.id"
            class="collection-item avatar"
          >
            <i class="material-icons circle green">assessment</i>
            <span class="title">{{ contact.firstName }}</span>
            <p>{{ contact.lastName }}</p>
            <a href="#!" class="secondary-content">
              <i class="material-icons">{{ contact.phone }}</i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
