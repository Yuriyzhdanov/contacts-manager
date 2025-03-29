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
      // currentContact: {
      //   id: 0,
      //   firstName: '',
      //   lastName: '',
      //   phone: '',
      //   isFavorite: false,
      //   isCall: false,
      //   lastCallTime: 0,
      // },

      contacts: [
        {
          id: 33,
          firstName: 'Vasya',
          lastName: 'Petrov',
          phone: '123456789',
          isFavorite: true,
        },
        {
          id: 42,
          firstName: 'Petya',
          lastName: 'Vasilev',
          phone: '987654321',
          isFavorite: true,
        },
        {
          id: 43,
          firstName: 'Irina',
          lastName: 'Irinova',
          phone: '123',
          isFavorite: false,
        },
        {
          id: 44,
          firstName: 'Irina',
          lastName: 'Irinovna',
          phone: '123',
          isFavorite: false,
        },
      ],
      searchQuery: '',
      currentContact: null,
    }
  },

  computed: {
    // favoriteContacts() {
    //   return this.contacts.filter(contact => contact.isFavorite)
    // },
    // callContacts() {
    //   return this.contacts.filter(contact => contact.isCall)
    // },
  },

  methods: {
    contactsWithSwapped(newContact) {
      return this.contacts.map(contact =>
        contact.id === newContact.id ? newContact : contact
      )
    },

    addNewContact(contact) {
      this.contacts.push(contact)
    },

    selectContact(contact) {
      this.currentContact = contact
    },
    // onRemoveContact(contact) {
    //   this.contacts = this.contacts.filter(c => c.id !== contact.id)
    // },

    // updateCallTime(time) {
    //   this.selectedContact.lastCallTime = time
    // },
  },
}
</script>
<template>
  <div class="wrapper teal lighten-5">
    <!-- {{ contacts }} -->
    <NavigationBar @on-search-query="searchQuery = $event" />
    <div>
      <TabFavorites />
      <TabRecentCalls />
      <TabListContacts :contacts="contacts" @contact-selected="selectContact" />
    </div>
  </div>

  <!-- Modal Structure  -->

  <ModalAddContact @contact-added="addNewContact" />
  <ModalEditContact :contact="currentContact" />
  <ModalSearchResults
    v-if="contacts"
    :contacts="contacts"
    :search-query="searchQuery"
  />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

:root {
  --color-background: #e0f2f1;
  --color-item: #009688;
}

*,
*::after,
*::before {
  box-sizing: border-box;
  scrollbar-color: var(--color-item) transparent !important;
  scrollbar-width: thin !important;
}
*::-webkit-scrollbar {
  width: 8px;
}
*::-webkit-scrollbar-thumb {
  background-color: var(--color-item);
}
*::-webkit-scrollbar-track {
  background-color: var(--color-background);
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 48;
  line-height: unset;
  vertical-align: top;
  font-size: 28px;
  user-select: none;
}
.material-icons {
  user-select: none;
}
.material-symbols-outlined.non-fill {
  font-variation-settings: 'FILL' 0, 'wght' 700, 'GRAD' 0, 'opsz' 48;
}

.collection {
  border: 0;
}

.collection .collection-item {
  border: 0;
}
.collection .collection-item .row {
  margin: 0;
}
.collection .collection-item .pic {
  display: inline-block;
  background: #eee;
  height: 52px;
  width: 52px;
  line-height: 48px;
}
.collection .collection-item .material-symbols-outlined {
  font-size: 42px;
}

body {
  /* font-size: 26px; */
  overflow: hidden;
}
.wrapper {
  min-width: 320px;
}

.wrapper {
  font-size: 110%;
  height: 100vh;
  overflow: hidden;
}
.wrapper > div {
  height: calc(100% - 112px);
}
.wrapper > div > div {
  height: 100%;
  overflow-y: scroll;
}

.wrapper nav form {
  height: 64px;
}
nav form input {
  font-weight: bold;
}
nav.nav-extended form input:focus {
  color: rgba(0, 0, 0, 0.87) !important;
}

#tab-1 .material-symbols-outlined {
  font-size: 64px;
}
#tab-1 .card-panel {
  width: 100%;
}

#tab-2 li {
  margin: 15px;
}
#tab-2 .collection .collection-item.avatar {
  min-height: unset;
}
#tab-2 .waves-effect {
  display: block;
}

#tab-3 .waves-effect {
  display: block;
}

#modal3.bottom-sheet {
  max-height: calc(100vh - 64px);
  height: calc(100vh - 64px);
}

#modal1.bottom-sheet {
  max-height: calc(100vh);
  height: calc(100vh);
}

#modal2.bottom-sheet {
  max-height: calc(60vh);
  height: calc(60vh);
}

.non-overlay ~ .modal-overlay {
  display: none !important;
}

#modal1 .input-reset {
  display: inline-block;
}
#modal1 .input-reset [type='reset'] {
  display: none;
}
#modal1 .wrap-form-buttons > * {
  margin: 15px;
}

#modal2 .wrap-content.contact-detail .person.material-symbols-outlined {
  font-size: 196px;
  line-height: 1;
}
#modal2 .wrap-content.contact-detail span.material-symbols-outlined {
  padding: 5px;
}
#modal2 .wrap-content.contact-detail .bottom .waves-effect {
  display: block;
}
#modal2 .wrap-content.contact-detail .top {
  border: 1px solid transparent;
}
#modal2 .contact-detail .bottom {
  padding-top: 15px;
}
#modal2 .modal-content {
  padding: 0;
}
/* #modal2 {
  overflow: hidden;
} */

ul > a {
  color: inherit;
}

#search::placeholder {
  color: #fff;
}

/* #app-favorites {
  text-align: center;
} */
#app-favorites .favorite {
  padding: 5px;
}

#app-favorites .card-panel {
  margin: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #fff;
}
</style>
