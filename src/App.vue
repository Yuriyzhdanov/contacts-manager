<script>
import FavoritesTab from './components/FavoritesTab.vue'
import ContactsTab from './components/ContactsTab.vue'
import RecentCallsTab from './components/RecentCallsTab.vue'
import AddContactModal from './components/AddContactModal.vue'
import ContactDetailModal from './components/ContactDetailModal.vue'
import NavigationBar from './components/NavigationBar.vue'
import SearchResultsModal from './components/SearchResultsModal.vue'

export default {
  components: {
    NavigationBar,
    FavoritesTab,
    RecentCallsTab,
    ContactsTab,
    AddContactModal,
    ContactDetailModal,
    SearchResultsModal,
  },

  data() {
    return {
      contacts: [],
      favoriteContacts: [],
      recentCalls: [],
      userNumber: '',
      username: '',
    }
  },
  methods: {},
}
</script>

<template>
  <div class="wrapper teal lighten-5">
    <NavigationBar></NavigationBar>
    <div>
      <FavoritesTab></FavoritesTab>
      <RecentCallsTab></RecentCallsTab>
      <ContactsTab></ContactsTab>
    </div>
  </div>

  <!-- Modal Structure  -->

  <AddContactModal></AddContactModal>
  <ContactDetailModal></ContactDetailModal>
  <SearchResultsModal></SearchResultsModal>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
