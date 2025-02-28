<script>
import FavoriteCard from './FavoriteCard.vue'

export default {
  components: {
    FavoriteCard,
  },

  props: ['contacts'],
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
          <FavoriteCard :contact="contact"></FavoriteCard>
        </div>
      </div>
    </div>
  </div>
</template>
