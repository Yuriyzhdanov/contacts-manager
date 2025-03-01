<script>
export default {
  props: ['contact'],

  emits: ['contact-selected'],

  data() {
    return {
      selectedContact: null,
    }
  },

  watch: {
    selectedContact(newValue) {
      this.$emit('contact-selected', newValue)
      console.log('ContactItem', newValue)
    },
  },
}
</script>

<template>
  <li
    v-on:click="selectedContact = contact"
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
</template>
