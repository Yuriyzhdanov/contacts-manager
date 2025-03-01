<script>
import NavigationBar from './components/NavigationBar.vue'
import FavoritesTab from './components/FavoritesTab.vue'
import RecentCallsTab from './components/RecentCallsTab.vue'
import ContactsTab from './components/ContactsTab.vue'
import ModalAddContact from './components/ModalAddContact.vue'
import ModalContactDetail from './components/ModalContactDetail.vue'
import ModalSearchResults from './components/ModalSearchResults.vue'

export default {
  components: {
    NavigationBar,
    FavoritesTab,
    RecentCallsTab,
    ContactsTab,
    ModalAddContact,
    ModalContactDetail,
    ModalSearchResults,
  },

  data() {
    return {
      contacts: [
        {
          id: 33,
          firstName: 'Vasya',
          secondName: 'Petrov',
          phone: '123456789',
          isFavorite: true,
          isRecentCalls: true,
        },
        {
          id: 42,
          firstName: 'Petya',
          secondName: 'Vasilev',
          phone: '987654321',
          isRecentCalls: false,
        },
      ],

      selectedContact: {
        id: 0,
        firstName: '',
        secondName: '',
        phone: '',
        isRecentCalls: false,
      },
    }
  },
  computed: {
    favoriteContacts() {
      return this.contacts.filter(contact => contact.isFavorite)
    },
  },

  watch: {
    selectedContact(newValue) {
      this.$emit('contact-selected', newValue)
      console.log('selectedContact APP.vue', newValue)
    },
  },

  methods: {
    validateContact(contact) {
      return contact.firstName && contact.phone
    },

    addNewContact(contact) {
      if (!this.validateContact(contact)) {
        console.log('заполните форму')
        return
      }
      this.contacts.push({ ...contact, id: Date.now(), favorite: false })
    },

    toggleFavorite(contact) {
      contact.isFavorite = !contact.isFavorite
    },
  },
}
</script>

<template>
  <div class="wrapper teal lighten-5">
    {{ contacts }}
    <NavigationBar />
    <!-- <WidgetSearch />
    <TabsSelector /> -->
    <div>
      <FavoritesTab v-bind:contacts="favoriteContacts" />
      <RecentCallsTab />
      <ContactsTab
        v-bind:contacts="contacts"
        @contact-selected="selectedContact = $event"
      />
    </div>
  </div>

  <!-- Modal Structure  -->

  <ModalAddContact v-on:onAddContact="addNewContact" />
  <ModalContactDetail :contact="selectedContact" />
  <ModalSearchResults />
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
