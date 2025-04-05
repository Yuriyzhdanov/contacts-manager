<script>
import FavoriteCard from './FavoriteCard.vue'

export default {
  components: {
    FavoriteCard,
  },

  props: ['contacts'],

  methods: {
    copyArray() {
      return this.contacts.map(item => ({ ...item }))
    },
    getFavoriteContacts() {
      const contactsCopy = this.copyArray()
      return contactsCopy.filter(contact => contact.isFavorite === true)
    },
  },
}
</script>

<template>
  <div id="tab-1" class="col s12">
    <div class="container">
      <div id="app-favorites" class="row">
        <div
          v-for="contact in contacts"
          :key="contact.id"
          class="favorite col s6 m4 l3 xl2"
        >
          <FavoriteCard :contact="contact" />
        </div>
      </div>
    </div>
  </div>
</template>
