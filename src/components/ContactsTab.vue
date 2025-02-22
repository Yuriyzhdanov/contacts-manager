<script>
import ContactItem from './ContactItem.vue'
import ContactAddButton from './ContactAddButton.vue'
export default {
  components: {
    ContactItem,
    ContactAddButton,
  },
  data() {
    return {}
  },
}
</script>

<template>
  <div id="tab-3" class="col s12">
    <ContactItem></ContactItem>
    <ContactAddButton></ContactAddButton>
  </div>
</template>
