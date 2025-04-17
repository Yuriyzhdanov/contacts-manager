<script>
import FavoriteContactItem from './FavoriteContactItem.vue'

export default {
  components: { FavoriteContactItem },

  props: ['favoriteContacts'],

  emits: ['call-phone'],
}
</script>

<template>
  <div id="tab-1" class="col s12">
    <div class="container">
      <p v-if="favoriteContacts.length === 0" class="empty-state">
        <span class="material-symbols-outlined icon">star</span>
        <br />
        <span>Список избранных пуст</span>
      </p>

      <div v-else id="app-favorites" class="row">
        <FavoriteContactItem
          v-for="favoriteContact of favoriteContacts"
          :favorite-contact="favoriteContact"
          :key="favoriteContact.id"
          @click="$emit('call-phone', favoriteContact.phone)"
        />
      </div>
    </div>
  </div>
</template>
