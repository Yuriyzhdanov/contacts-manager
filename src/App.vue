<script>
import UIFavorites from './components/UIFavorites.vue'
import UIPerson from './components/UIPerson.vue'
import UIRecentCall from './components/UIRecentCall.vue'
import WidgetAddContact from './components/WidgetAddContact.vue'
import WidgetInfoPerson from './components/WidgetInfoPerson.vue'
import WidgetNavigation from './components/WidgetNavigation.vue'
import WidgetSearch from './components/WidgetSearch.vue'

export default {
  components: {
    WidgetNavigation,
    UIFavorites,
    UIRecentCall,
    UIPerson,
    WidgetAddContact,
    WidgetInfoPerson,
    WidgetSearch,
  },

  data() {
    return {
      contacts: [],
      favoriteContacts: [],
      calls: [],
      userNumber: '',
      username: '',
    }
  },
  methods: {
    addNewContact() {
      this.contacts.push({
        username: this.username,
        surname: this.surname,
        userNumber: this.number,
      })
    },
  },
}
</script>

<template>
  <div class="wrapper teal lighten-5">
    <WidgetNavigation></WidgetNavigation>
    <div>
      <div id="tab-1" class="col s12">
        <UIFavorites></UIFavorites>
      </div>
      <div id="tab-2" class="col s12">
        <UIRecentCall></UIRecentCall>
      </div>
      <UIPerson></UIPerson>
    </div>
  </div>

  <!-- Modal Structure  -->

  <div id="modal1" class="modal bottom-sheet">
    <WidgetAddContact></WidgetAddContact>
  </div>

  <div id="modal2" class="modal bottom-sheet">
    <WidgetInfoPerson></WidgetInfoPerson>
  </div>

  <div id="modal3" class="modal bottom-sheet modal-close non-overlay">
    <WidgetSearch></WidgetSearch>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
