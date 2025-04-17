<script>
import NavigationBar from './components/NavigationBar.vue'
import FavoriteContactsListTab from './components/FavoriteContactsListTab.vue'
import TabRecentCalls from './components/TabRecentCalls.vue'
import SearchedContactsModal from './components/SearchedContactsModal.vue'

import ContactsListTab from './components/contacts/ContactsListTab.vue'
import ContactDetailModal from './components/contacts/ContactDetailModal.vue'
import ContactEditorModal from './components/contacts/ContactEditorModal.vue'
import ContactSubmitterModal from './components/contacts/ContactSubmitterModal.vue'

import createRecentCallByPhone from './functions/createRecentCallByPhone'
import { searchContacts } from './functions/searchContacts'

const randPhone = () => (Math.random() * 10000000).toFixed(0).padStart(9, '0')

export default {
  components: {
    NavigationBar,
    FavoriteContactsListTab,
    TabRecentCalls,
    ContactsListTab,
    ContactSubmitterModal,
    ContactEditorModal,
    ContactDetailModal,
    SearchedContactsModal,
  },

  data() {
    return {
      searchQuery: '',
      selectedContact: {},
      recentCalls: [],

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

  computed: {
    favoriteContacts() {
      return this.contacts.filter(contact => contact.isFavorite)
    },

    searchedContacts() {
      return searchContacts(this.searchQuery, this.contacts)
    },
  },

  // created() {
  //   setInterval(() => {
  //     this.addRecentCallByPhone(randPhone())
  //   }, 5000)
  // },

  methods: {
    swapContact(newContact) {
      this.contacts = this.contacts.map(contact =>
        contact.id === newContact.id ? newContact : contact
      )
    },

    removeContact(contact) {
      this.contacts = this.contacts.filter(c => c.id !== contact.id)
    },

    addRecentCallByPhone(phone) {
      const recentCall = createRecentCallByPhone(phone)
      recentCall.contact = this.getContactByPhone(phone)
      this.recentCalls.unshift(recentCall)
    },

    getContactByPhone(phone) {
      return this.contacts.find(c => c.phone === phone)
    },
  },
}
</script>

<template>
  <div class="wrapper teal lighten-5">
    <NavigationBar @on-search-query="searchQuery = $event" />
    <div>
      <FavoriteContactsListTab
        :favorite-contacts="favoriteContacts"
        @call-phone="addRecentCallByPhone($event)"
      />
      <TabRecentCalls
        :recent-calls="recentCalls"
        @call-phone="addRecentCallByPhone($event)"
      />
      <ContactsListTab
        :contacts="contacts"
        @update-selected-contact="selectedContact = $event"
      />
    </div>
  </div>

  <!-- Modal Structure  -->

  <ContactSubmitterModal @contact-submitted="contacts.push($event)" />
  <ContactEditorModal
    :selected-contact="selectedContact"
    @update-contact="swapContact($event)"
  />
  <ContactDetailModal
    :selected-contact="selectedContact"
    @update-contact="swapContact($event)"
    @remove-contact="removeContact($event)"
    @call-phone="addRecentCallByPhone($event)"
  />
  <SearchedContactsModal
    :searched-contacts="searchedContacts"
    :search-query="searchQuery"
    @call-phone="addRecentCallByPhone($event)"
  />
</template>
