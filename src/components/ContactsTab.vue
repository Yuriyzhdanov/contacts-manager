<script>
import ContactItem from './ContactItem.vue'
import UiContactAddButton from './UiContactAddButton.vue'

export default {
  props: ['contacts'],
  emits: ['onSelectContact'],

  components: {
    ContactItem,
    UiContactAddButton,
  },

  methods: {
    selectContact(contactId) {
      this.$emit('onSelectContact', contactId)
      console.log('tab', contactId)
    },
  },
}
</script>

<template>
  <div id="tab-3" class="col s12">
    <ContactItem v-bind:contacts="contacts"></ContactItem>
    <UiContactAddButton></UiContactAddButton>
  </div>
</template>
