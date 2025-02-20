<script>
import UIFavorites from './components/UIFavorites.vue'
import UIPerson from './components/UIPerson.vue'
import UIRecentCall from './components/UIRecentCall.vue'
import WidgetNavigation from './components/WidgetNavigation.vue'

export default {
  components: { WidgetNavigation, UIFavorites, UIRecentCall, UIPerson },

  data() {
    return {
      contacts: [],
      favoriteContacts: [],
      calls: [],
      userNumber: '',
      username: '',
    }
  },
  methods: {
    addNewContact() {
      this.contacts.push({
        username: this.username,
        surname: this.surname,
        userNumber: this.number,
      })
    },
  },
}
</script>

<template>
  <div class="wrapper teal lighten-5">
    <WidgetNavigation></WidgetNavigation>
    <div>
      <div id="tab-1" class="col s12">
        <UIFavorites></UIFavorites>
      </div>
      <div id="tab-2" class="col s12">
        <UIRecentCall></UIRecentCall>
      </div>
      <UIPerson></UIPerson>
    </div>
  </div>

  <!-- Modal Structure  -->

  <div id="modal1" class="modal bottom-sheet">
    <div class="modal-content">
      <div class="wrap-content row">
        <h5 class="header">Добавить контакт</h5>
        <form class="col s12" autocomplete="off">
          <div class="row">
            <div class="input-field col s12">
              <input
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
                id="secondName"
                name="secondName"
                type="text"
                autocomplete="new-password"
              />
              <label for="secondName">Фамилия</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input
                id="phone"
                name="phone"
                type="tel"
                autocomplete="new-password"
              />
              <label for="phone">Телефон</label>
            </div>
          </div>
          <!-- <div class="row">
              <div class="input-field col s12">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="new-password"
                />
                <label for="email">E-mail</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input
                  id="city"
                  name="city"
                  type="text"
                  autocomplete="new-password"
                />
                <label for="city">Город</label>
              </div>
            </div> -->
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

  <div id="modal2" class="modal bottom-sheet">
    <div class="modal-content">
      <div class="wrap-content contact-detail">
        <div class="top teal">
          <div class="row">
            <div class="col s6 center-align teal-text text-lighten-3">
              <i class="material-symbols-outlined person">person</i>
            </div>
            <div class="col s6 right-align teal-text text-lighten-5">
              <span class="modal-close material-symbols-outlined non-fill"
                >star</span
              >
              <span class="modal-close material-symbols-outlined">star</span>
              <span class="modal-close material-symbols-outlined">edit</span>
              <span class="modal-close material-symbols-outlined">delete</span>
            </div>
          </div>
          <h5 class="center-align white-text">Петр Иванов</h5>
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
                    <span class="title"><b>0991234567</b></span>
                    <p>
                      <i>Позавчера</i>
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

  <div id="modal3" class="modal bottom-sheet modal-close non-overlay">
    <div class="modal-content">
      <div class="wrap-content">
        <h5 class="header">Найдено:</h5>
        <ul class="collection">
          <li class="collection-item avatar">
            <i class="material-icons circle green">assessment</i>
            <span class="title">Title</span>
            <p>First Line</p>
            <a href="#!" class="secondary-content">
              <i class="material-icons">phone</i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
