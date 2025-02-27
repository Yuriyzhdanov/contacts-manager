<script>
import ContactItem from './ContactItem.vue'
import UiContactAddButton from './UiContactAddButton.vue'

export default {
  components: {
    ContactItem,
    UiContactAddButton,
  },

  props: ['contacts'],

  emits: ['onSelectContact'],
}
</script>

<template>
  <div id="tab-3" class="col s12">
    <ul id="app-contacts" class="collection">
      <ContactItem
        v-for="contact of contacts"
        :key="contact.id"
        :contact="contact"
        @contact-selected="$emit('contact-selected', $event)"
      ></ContactItem>
    </ul>
    <UiContactAddButton></UiContactAddButton>
  </div>
</template>
