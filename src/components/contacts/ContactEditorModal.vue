<script>
export default {
  props: ['selectedContact'],

  emits: ['update-contact'],

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
  },
}
</script>

<template>
  <div id="modal0" class="modal bottom-sheet">
    <div class="modal-content">
      <div class="wrap-content row">
        <h5 class="header">Edit contact</h5>
        <form class="col s12" autocomplete="off">
          <div class="row">
            <div class="input-field col s12">
              <input
                v-model="localContact.firstName"
                id="firstName"
                name="firstName"
                type="text"
                autocomplete="new-password"
              />
              <label for="firstName">Name</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input
                v-model="localContact.lastName"
                id="lastName"
                name="lastName"
                type="text"
                autocomplete="new-password"
              />
              <label for="lastName">Last name</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input
                v-model="localContact.phone"
                id="phone"
                name="phone"
                type="tel"
                autocomplete="new-password"
              />
              <label for="phone">Phone</label>
            </div>
          </div>
          <div class="row">
            <div class="col s12 center-align wrap-form-buttons">
              <div class="input-reset">
                <input type="reset" id="reset" class="" />
                <label
                  for="reset"
                  class="transparent teal-text waves-effect waves-light btn modal-close"
                >
                  <i class="material-icons left">close</i>
                  Cancel
                </label>
              </div>
              <a
                @click="$emit('update-contact', { ...localContact })"
                id="appAddContact"
                class="btn-ok waves-effect waves-light btn modal-close"
              >
                <i class="material-icons left">check</i>
                <span>Edit</span>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
