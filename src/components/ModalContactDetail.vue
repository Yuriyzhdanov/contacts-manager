<script>
export default {
  props: ['currentContact'],

  emits: ['contact-edit'],

  data() {
    return {
      localContact: Object.assign({}, this.contact),
      // lastCallTime: this.contact.lastCallTime || null,
      // isFavorite: this.contact.isFavorite || false,
      // localContact:(...this.contact),
      // lastCallTime: null,
    }
  },

  watch: {
    contact(newValue) {
      this.localContact = Object.assign({}, newValue)
      // (this.lastCallTime = newValue.lastCallTime || null),
      // (this.isFavorite = newValue.isFavorite || false)
    },
  },

  computed: {
    // generateData() {
    //   return new Date().toLocaleString()
    // },
    // formattedLastCallTime() {
    //   if (!this.lastCallTime) return 'Нет вызовов'
    //   const callDate = new Date(this.lastCallTime)
    //   const now = new Date()
    //   const diffTime = now - callDate
    //   const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
    //   if (diffDays === 0) return 'Сегодня'
    //   if (diffDays === 1) return 'Вчера'
    //   if (diffDays === 2) return 'Позавчера'
    //   return callDate.toLocaleDateString()
    // },
  },

  methods: {
    // timeOfCalls() {
    //   let time = new Date()
    //   return time
    // },
    // recordCallTime() {
    //   !currentContact?.isCall
    //   this.lastCallTime = new Date()
    //   this.$emit('call-updated', this.lastCallTime)
    // },
  },
}
</script>

<template>
  <div id="modal2" class="modal bottom-sheet">
    <div class="modal-content">
      <div class="wrap-content contact-detail">
        <div class="top teal">
          <div class="row">
            <div class="col s6 center-align teal-text text-lighten-3">
              <i class="material-symbols-outlined person">person</i>
            </div>
            <div class="col s6 right-align teal-text text-lighten-5">
              <span class="modal-close material-symbols-outlined">star</span>

              <span
                @click="
                  $emit('contact-edit', Object.assign({}, this.localContact))
                "
                href="#modal1"
                class="modal-close modal-trigger material-symbols-outlined"
                >edit</span
              >
              <span class="modal-close material-symbols-outlined">delete</span>
            </div>
          </div>
          <h5 class="center-align white-text">
            {{ currentContact?.firstName }} {{ currentContact?.lastName }}
          </h5>
        </div>
        <div class="bottom">
          <div class="container">
            <div class="row valign-wrapper">
              <div class="col s12">
                <ul class="collection">
                  <li
                    class="waves-effect collection-item avatar transparent z-depth-1"
                  >
                    <i class="material-icons circle teal darken-3">person</i>
                    <span class="title"
                      ><b>{{ currentContact?.phone }}</b></span
                    >
                    <p>
                      <i>{{ 'позавчера' }}</i>
                    </p>
                    <a href="#!" class="secondary-content">
                      <i class="material-icons">phone</i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
