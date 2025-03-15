<script>
export default {
  props: ['currentContact'],

  emits: ['contact-edited'],

  data() {
    return {
      editableContact: {},
    }
  },

  watch: {
    currentContact: {
      deep: true,
      handler(newValue) {
        console.log('>>', newValue)
        this.editableContact = { ...newValue }
      },
    },
  },

  methods: {
    validateContact(contact) {
      return contact.firstName && contact.phone
    },
  },
}
</script>
<template>
  <div id="modal1" class="modal bottom-sheet">
    <div class="modal-content">
      <div class="wrap-content row">
        <h5 class="header">Добавить контакт</h5>
        <form class="col s12" autocomplete="off">
          <div class="row">
            <div class="input-field col s12">
              <input
                v-model="editableContact.firstName"
                id="firstName"
                name="firstName"
                type="text"
                autocomplete="new-password"
              />
              <label for="firstName">Имя</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input
                v-model="editableContact.lastName"
                id="lastName"
                name="lastName"
                type="text"
                autocomplete="new-password"
              />
              <label for="lastName">Фамилия</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input
                v-model="editableContact.phone"
                @input="
                  editableContact.phone = editableContact.phone.replace(
                    /\D/g,
                    ''
                  )
                "
                id="phone"
                name="phone"
                type="tel"
                autocomplete="new-password"
              />
              <label for="phone">Телефон</label>
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
                  Отмена
                </label>
              </div>
              <a
                @click="$emit('contact-edited', editableContact)"
                id="appAddContact"
                class="btn-ok waves-effect waves-light btn modal-close"
              >
                <i class="material-icons left">check</i>
                <span>Добавить</span>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
