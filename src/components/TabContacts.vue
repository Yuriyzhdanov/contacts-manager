<script>
import ContactItem from './ContactItem.vue'
import UiContactAddButton from './UiContactAddButton.vue'

export default {
  components: {
    ContactItem,
    UiContactAddButton,
  },

  props: ['contacts'],

  emits: ['contact-selected'],

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
        @click="$emit('contact-selected', contact)"
      ></ContactItem>
    </ul>
    <UiContactAddButton></UiContactAddButton>
  </div>
</template>
