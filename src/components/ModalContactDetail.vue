<script>
export default {
  props: ['currentContact'],

  emits: ['contact-removed', 'favorite-updated'],
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
                @click="$emit('favorite-updated', !currentContact?.isFavorite)"
                class="modal-close material-symbols-outlined"
                :class="{ 'non-fill': !currentContact?.isFavorite }"
                >star</span
              >

              <span
                @click="onEditContact"
                href="#modal1"
                class="modal-close modal-trigger material-symbols-outlined"
                >edit</span
              >

              <span
                @click="$emit('contact-removed', currentContact)"
                class="modal-close material-symbols-outlined"
                >delete</span
              >
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
</template>
