<script>
export default {
  props: ['contacts'],
  emits: ['onSelectContact'],

  methods: {
    selectContact(contactId) {
      this.$emit('onSelectContact', contactId)
    },
  },
}
</script>

<template>
  <ul id="app-contacts" class="collection">
    <li
      v-on:click="selectContact(contact.id)"
      v-for="(contact, idx) of contacts"
      :key="idx"
      href="#modal2"
      class="contact modal-trigger collection-item transparent waves-effect"
    >
      <div class="container">
        <div class="row valign-wrapper">
          <div class="col s4">
            <span
              class="teal darken-1 teal-text text-lighten-4 pic circle center-align material-symbols-outlined"
              >person</span
            >
          </div>
          <div class="col s4">
            <span class=""
              ><b>{{ contact.firstName + ' ' + contact.secondName }}</b></span
            >
          </div>
          <div class="col s4">
            <span class="badge new">{{ contact.phone }}</span>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>
