<script>
const makeId = () => ((Math.random() * 0xffffffff) >>> 0).toString(16)
const initContact = () => ({
  id: makeId(),
  firstName: 'qqqq',
  lastName: 'test',
  phone: '123',
  isFavorite: false,
})

export default {
  // props: ['currentContact'],

  emits: ['contact-added'],

  data() {
    return {
      localContact: initContact(),
    }
  },

  // watch: {
  //   currentContact: {
  //     deep: true,
  //     handler(newValue) {
  //       this.editableContact = { ...newValue }
  //     },
  //   },
  // },

  methods: {
    submitContact() {
      if (
        this.localContact.firstName &&
        this.localContact.lastName &&
        this.localContact.phone
      ) {
        this.$emit('contact-added', { ...this.localContact })
        this.localContact = initContact()
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
                v-model="localContact.firstName"
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
                v-model="localContact.lastName"
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
                v-model="localContact.phone"
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
