<script>
import FavoriteCard from './FavoriteCard.vue'

export default {
  components: {
    FavoriteCard,
  },

  props: ['contacts'],

  emits: ['call-phone'],

  computed: {
    favoriteContacts() {
      return this.contacts.filter(contact => contact.isFavorite)
    },
  },
}
</script>

<template>
  <div id="tab-1" class="col s12">
    <div class="container">
      <div id="app-favorites" class="row">
        <p v-if="favoriteContacts.length === 0" class="empty-state">
          <span class="material-symbols-outlined icon">star</span>
          <br />
          <span>Список избранных пуст</span>
        </p>
        <div
          v-else
          v-for="contact in favoriteContacts"
          :key="contact.id"
          @click="$emit('call-phone', contact.phone)"
          class="favorite col s6 m4 l3 xl2"
        >
          <FavoriteCard :contact="contact" />
        </div>
      </div>
    </div>
  </div>
</template>
