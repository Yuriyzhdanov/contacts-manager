<script>
export default {
  props: ['searchedContacts'],

  emits: ['call-phone'],

  computed: {
    searchedContactsCount() {
      return this.searchedContacts.length
    },
  },
}
</script>

<template>
  <div id="modal3" class="modal bottom-sheet modal-close non-overlay">
    <div class="modal-content">
      <div class="wrap-content">
        <h5 class="header">Найдено: {{ searchedContactsCount }}</h5>
        <ul class="collection">
          <li
            v-for="searchedContact in searchedContacts"
            :key="searchedContact.id"
            class="collection-item avatar"
            @click="$emit('call-phone', searchedContact.phone)"
          >
            <i class="material-icons circle green">assessment</i>
            <span class="title">{{ searchedContact.firstName }}</span>
            <p>{{ searchedContact.lastName }}</p>
            <a href="#!" class="secondary-content">
              <i class="material-icons">{{ searchedContact.phone }}</i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
