<script>
import NavigationBar from './components/NavigationBar.vue'
import TabFavorites from './components/TabFavorites.vue'
import TabRecentCalls from './components/TabRecentCalls.vue'
import TabListContacts from './components/TabListContacts.vue'
import ModalAddContact from './components/ModalAddContact.vue'
import ModalEditContact from './components/ModalEditContact.vue'
import ModalContactDetail from './components/ModalContactDetail.vue'
import ModalSearchResults from './components/ModalSearchResults.vue'

export default {
  components: {
    NavigationBar,
    TabFavorites,
    TabRecentCalls,
    TabListContacts,
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
      <TabListContacts
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
