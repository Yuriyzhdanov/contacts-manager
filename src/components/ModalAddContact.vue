<script>
export default {
  props: ['contacts'],

  emits: ['on-add-contact'],

  data() {
    return {
      newContact: {
        firstName: '',
        lastName: '',
        phone: '',
      },
    }
  },

  methods: {
    validateContact(contact) {
      return contact.firstName && contact.phone
    },
    handleAddContact() {
      // if (!this.validateContact(contact)) {
      // this.contacts.push({ ...contact, id: Date.now(), favorite: false })
      this.$emit('on-add-contact', { ...this.newContact })
      this.newContact = {
        firstName: '',
        lastName: '',
        phone: '',
      }
    },

    editContact(contact) {
      const index = this.contacts.findIndex(c => c.id === contact.id)
      if (index !== -1) {
        const updatedContact = {
          ...this.contacts[index],
          firstName: 'John',
          lastName: 'Smith',
          phone: '999999999',
        }
        this.contacts[index] = updatedContact
        console.log('sc', this.selectedContact)

        if (this.selectedContact?.id === contact.id) {
          this.selectedContact = { ...updatedContact }
        }
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
                v-model="newContact.firstName"
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
                v-model="newContact.lastName"
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
                v-model="newContact.phone"
                @input="newContact.phone = newContact.phone.replace(/\D/g, '')"
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
                v-on:click="handleAddContact"
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
