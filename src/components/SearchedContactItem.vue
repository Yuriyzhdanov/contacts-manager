<script>
export default {
  props: ['searchedContact'],
}
</script>

<template>
  <li>
    <i class="material-icons circle green">assessment</i>
    <span class="title">{{ searchedContact.firstName }}</span>
    <p>{{ searchedContact.lastName }}</p>
    <a href="#!" class="secondary-content">
      <i class="material-icons">{{ searchedContact.phone }}</i>
    </a>
  </li>
</template>
