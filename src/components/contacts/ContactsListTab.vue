<script>
import ContactItem from './ContactItem.vue'
import UiContactAddButton from '../../ui/UiContactAddButton.vue'

export default {
  components: { ContactItem, UiContactAddButton },

  props: ['contacts'],

  emits: ['update-selected-contact'],
}
</script>

<template>
  <div id="tab-3" class="col s12">
    <p v-if="contacts.length === 0" class="empty-state">
      <span class="material-symbols-outlined icon">contacts</span>
      <br />
      <span>Список контактов пуст</span>
    </p>

    <ul v-else id="app-contacts" class="collection">
      <ContactItem
        v-for="contact of contacts"
        :key="contact.id"
        :contact="contact"
        @click="$emit('update-selected-contact', { ...contact })"
      ></ContactItem>
    </ul>
    <UiContactAddButton></UiContactAddButton>
  </div>
</template>
