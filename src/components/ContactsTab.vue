<script>
import ContactItem from './ContactItem.vue'
import UiContactAddButton from './UiContactAddButton.vue'

export default {
  components: {
    ContactItem,
    UiContactAddButton,
  },
}
</script>

<template>
  <div id="tab-3" class="col s12">
    <ContactItem></ContactItem>
    <UiContactAddButton></UiContactAddButton>
  </div>
</template>
