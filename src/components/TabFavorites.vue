<script>
import FavoriteCard from './FavoriteCard.vue'

export default {
  components: { FavoriteCard },

  props: ['favoriteContacts'],

  emits: ['call-phone'],
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
          v-for="favoriteContact of favoriteContacts"
          :key="favoriteContact.id"
          @click="$emit('call-phone', favoriteContact.phone)"
          class="favorite col s6 m4 l3 xl2"
        >
          <FavoriteCard :favorite-contact="favoriteContact" />
        </div>
      </div>
    </div>
  </div>
</template>
