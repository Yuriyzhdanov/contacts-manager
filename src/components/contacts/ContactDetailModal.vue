<script>
export default {
  props: ['selectedContact'],

  emits: ['update-contact', 'remove-contact', 'call-phone'],

  data() {
    return {
      localContact: { ...this.selectedContact },
    }
  },

  watch: {
    selectedContact: {
      deep: true,
      handler(newValue) {
        this.localContact = { ...newValue }
      },
    },
    localContact: {
      deep: true,
      handler(newVal, oldVal) {
        if (newVal === oldVal) {
          this.$emit('update-contact', { ...this.localContact })
        }
      },
    },
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
              <span
                @click="localContact.isFavorite = !localContact.isFavorite"
                class="modal-close material-symbols-outlined"
                :class="{ 'non-fill': !localContact.isFavorite }"
              >
                star
              </span>
              <span
                href="#modal0"
                class="modal-close modal-trigger material-symbols-outlined"
                >edit</span
              >
              <span
                @click="$emit('remove-contact', { ...localContact })"
                class="modal-close material-symbols-outlined"
                >delete</span
              >
            </div>
          </div>
          <h5 class="center-align white-text">
            {{ localContact.firstName }} {{ localContact.lastName }}
          </h5>
        </div>
        <div class="bottom">
          <div class="container">
            <div class="row valign-wrapper">
              <div class="col s12">
                <ul class="collection">
                  <li
                    @click="$emit('call-phone', localContact.phone)"
                    class="waves-effect collection-item avatar transparent z-depth-1"
                  >
                    <i class="material-icons circle teal darken-3">person</i>
                    <span class="title"
                      ><b>{{ localContact.phone }}</b></span
                    >
                    <p>
                      <i>когда был звонок сек</i>
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
