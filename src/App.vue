<script>
import ms from 'ms'
import NavigationBar from './components/NavigationBar.vue'
import TabFavorites from './components/TabFavorites.vue'
import TabRecentCalls from './components/TabRecentCalls.vue'
import SearchContactsModal from './components/SearchContactsModal.vue'

import ContactsListTab from './components/contacts/ContactsListTab.vue'
import ContactSubmitterModal from './components/contacts/ContactSubmitterModal.vue'
import ContactEditorModal from './components/contacts/ContactEditorModal.vue'
import ContactDetailModal from './components/contacts/ContactDetailModal.vue'

const randPhone = () => (Math.random() * 10000000).toFixed(0).padStart(9, '0')

function getDeltaTimestamp(startTimestamp) {
  const timestamp = Date.now()
  return timestamp - startTimestamp
}

function getFormattedTime(startTimestamp) {
  const deltaTimestamp = getDeltaTimestamp(startTimestamp)
  return ms(deltaTimestamp, { long: true })
}

function createRecentCallByPhone(phone) {
  const recentCall = {
    phone,
    timestamp: Date.now(),
    get formattedTime() {
      return getFormattedTime(this.timestamp)
    },
  }
  return recentCall
}

export default {
  components: {
    NavigationBar,
    TabFavorites,
    TabRecentCalls,
    ContactsListTab,
    ContactSubmitterModal,
    ContactEditorModal,
    ContactDetailModal,
    SearchContactsModal,
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
          isCalls: true,
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

  created() {
    setInterval(() => {
      this.addRecentCallByPhone(randPhone())
    }, 5000)
  },

  methods: {
    contactsWithSwapped(newContact) {
      return this.contacts.map(contact =>
        contact.id === newContact.id ? newContact : contact
      )
    },

    removeContactFromList(contact) {
      return this.contacts.filter(c => c.id !== contact.id)
    },

    addRecentCallByPhone(phone) {
      const recentCall = createRecentCallByPhone(phone)
      this.recentCalls.push(recentCall)
    },
  },
}
</script>
<template>
  <div class="wrapper teal lighten-5">
    <NavigationBar @on-search-query="searchQuery = $event" />
    <div>
      <TabFavorites
        :contacts="contacts"
        @call-phone="addRecentCallByPhone($event)"
      />
      <TabRecentCalls
        :recentCalls="recentCalls"
        @call-phone="addRecentCallByPhone($event)"
      />
      <ContactsListTab
        :contacts="contacts"
        @update-selected-contact="selectedContact = $event"
      />
    </div>
  </div>

  <!-- Modal Structure  -->

  <ContactSubmitterModal @contact-added="contacts.push($event)" />
  <ContactEditorModal
    :selectedContact="selectedContact"
    @contact-edit="contacts = contactsWithSwapped($event)"
  />
  <ContactDetailModal
    :selectedContact="selectedContact"
    @toggle-favorite="contacts = contactsWithSwapped($event)"
    @remove-contact="contacts = removeContactFromList($event)"
    @call-phone="addRecentCallByPhone($event)"
  />
  <SearchContactsModal
    v-if="contacts"
    :contacts="contacts"
    :search-query="searchQuery"
  />
</template>
