<script>
export default {
  props: ['recentCall'],

  data() {
    return {
      timeAgo: '0 seconds',
    }
  },

  created() {
    setInterval(() => {
      this.timeAgo = this.recentCall.formattedTime
    }, 5000)
  },
  // computed: {
  //   timeAgo() {
  //     return this.recentCall.formattedTime
  //   },
  // },
}
</script>

<template>
  <li
    class="recent-call waves-effect collection-item avatar transparent z-depth-1"
  >
    <i class="material-icons circle teal darken-3">person</i>
    <span class="title">
      <b> {{ recentCall.phone }} &nbsp;</b>
    </span>

    <span> {{ recentCall.contact?.firstName }} &nbsp;</span>

    <span> {{ recentCall.contact?.lastName }} </span>

    <p>
      <i>{{ timeAgo }}</i>
    </p>
    <a href="#!" class="secondary-content">
      <i class="material-icons">phone</i>
    </a>
  </li>
</template>
