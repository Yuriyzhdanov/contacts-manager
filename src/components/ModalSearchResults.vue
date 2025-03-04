<script>
export default {
  props: ['contacts'],

  computed: {
    contactsCount() {
      return this.contacts.length
    },
  },
}
</script>
<template>
  <div class="modal-content">
    <div class="wrap-content">
      <h5 class="header">Найдено: {{ contactsCount }}</h5>
      <ul class="collection">
        <li
          v-for="contact of contacts"
          :key="contact.id"
          class="collection-item avatar"
        >
          <i class="material-icons circle green">assessment</i>
          <span class="title">{{ contact.firstName }}</span>
          <p>{{ contact.secondName }}</p>
          <a href="#!" class="secondary-content">
            <i class="material-icons">{{ contact.phone }}</i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
