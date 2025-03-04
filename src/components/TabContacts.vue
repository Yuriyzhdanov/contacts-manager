<script>
import ContactItem from './ContactItem.vue'
import UiContactAddButton from './UiContactAddButton.vue'

export default {
  components: {
    ContactItem,
    UiContactAddButton,
  },

  props: ['contacts'],

  emits: ['contacts-changed'],

  methods: {
    // addContact(contact) {
    //   this.contacts.push(contact)
    //   this.$emit('contacts-changed', this.contacts)
    // },
  },
}
</script>

<template>
  <div id="tab-3" class="col s12">
    <ul id="app-contacts" class="collection">
      <ContactItem
        v-for="contact of contacts"
        :key="contact.id"
        :contact="contact"
        @selected-contact-changed="$emit('selected-contact-changed', $event)"
      ></ContactItem>
    </ul>
    <UiContactAddButton></UiContactAddButton>
  </div>
</template>
<!-- @selected-contact-changed="addContact" -->
