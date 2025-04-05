<script>
import NavigationBar from './components/NavigationBar.vue'
import TabFavorites from './components/TabFavorites.vue'
import TabRecentCalls from './components/TabRecentCalls.vue'
import ModalSearchResults from './components/ModalSearchResults.vue'

import ContactsListTab from './components/contacts/ContactsListTab.vue'
import ModalAddContact from './components/contacts/ContactSubmitterModal.vue'
import ModalEditContact from './components/contacts/ContactEdittorModal.vue'
import ModalContactDetail from './components/contacts/ContactDetailModal.vue'

export default {
  components: {
    NavigationBar,
    TabFavorites,
    TabRecentCalls,
    ContactsListTab,
    ModalAddContact,
    ModalEditContact,
    ModalContactDetail,
    ModalSearchResults,
  },

  data() {
    return {
      searchQuery: '',
      selectedContact: {},
      contacts: [
        {
          id: 33,
          firstName: 'Vasya',
          lastName: 'Petrov',
          phone: '123456789',
          isFavorite: false,
        },
        {
          id: 42,
          firstName: 'Petya',
          lastName: 'Vasilev',
          phone: '987654321',
          isFavorite: true,
        },
      ],
    }
  },

  methods: {
    contactsWithSwapped(newContact) {
      return this.contacts.map(contact =>
        contact.id === newContact.id ? newContact : contact
      )
    },
  },
}
</script>
<template>
  <div class="wrapper teal lighten-5">
    <!-- {{ contacts }} -->
    <NavigationBar @on-search-query="searchQuery = $event" />
    <div>
      <TabFavorites :contacts="contacts" />
      <!-- <TabRecentCalls /> -->
      <ContactsListTab
        :contacts="contacts"
        @update-selected-contact="selectedContact = $event"
      />
    </div>
  </div>

  <!-- Modal Structure  -->

  <ModalAddContact @contact-added="contacts.push($event)" />
  <ModalEditContact
    :selectedContact="selectedContact"
    @contact-edit="contacts = contactsWithSwapped($event)"
  />
  <ModalContactDetail
    :selectedContact="selectedContact"
    @toggle-favorite="contacts = contactsWithSwapped($event)"
  />
  <!-- <ModalSearchResults
    v-if="contacts"
    :contacts="contacts"
    :search-query="searchQuery"
  /> -->
</template>
