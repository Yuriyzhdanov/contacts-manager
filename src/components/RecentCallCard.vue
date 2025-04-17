<script>
export default {
  props: ['recentCall'],

  data() {
    return {
      timeAgo: '',
    }
  },

  created() {
    setInterval(() => {
      this.timeAgo = this.recentCall.formattedTime
    }, 1000)
  },
}
</script>

<template>
  <li
    class="recent-call waves-effect collection-item avatar transparent z-depth-1"
  >
    <i class="material-icons circle teal darken-3">person</i>
    <span class="title">
      <b> {{ recentCall.phone }} </b>
    </span>

    <span> {{ recentCall.contact?.firstName }} </span>

    <span> {{ recentCall.contact?.lastName }} </span>

    <p>
      <i>{{ timeAgo }}</i>
    </p>
    <a href="#!" class="secondary-content">
      <i class="material-icons">phone</i>
    </a>
  </li>
</template>
