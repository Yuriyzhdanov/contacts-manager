<script>
export default {
  props: ['contact'],
}
</script>

<template>
  <div class="recent-call col s12">
    <ul id="app-recent-calls" class="collection">
      <li
        class="recent-call waves-effect collection-item avatar transparent z-depth-1"
      >
        <i class="material-icons circle teal darken-3">person</i>
        <span class="title"><b>0991234567</b></span>
        <p>
          <i>{{ contact.lastCallTime }}</i>
        </p>
        <a href="#!" class="secondary-content">
          <i class="material-icons">phone</i>
        </a>
      </li>
    </ul>
  </div>
</template>
