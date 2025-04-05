<script>
const makeId = () => ((Math.random() * 0xffffffff) >>> 0).toString(16)
const initContact = () => ({
  id: makeId(),
  firstName: '',
  lastName: '',
  phone: '',
  isFavorite: false,
})

export default {
  emits: ['contact-added'],

  data() {
    return {
      contact: initContact(),
    }
  },

  methods: {
    submitContact() {
      if (Object.keys(this.contact).every(c => c)) {
        this.$emit('contact-added', { ...this.contact })
        this.contact = initContact()
      }
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
                v-model="contact.firstName"
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
                v-model="contact.lastName"
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
                v-model="contact.phone"
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
                @click="submitContact"
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
