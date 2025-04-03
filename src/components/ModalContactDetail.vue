<script>
export default {
  props: ['selectedContact'],
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
                @click=""
                href="#modal1"
                class="modal-close modal-trigger material-symbols-outlined"
                >edit</span
              >
              <span class="modal-close material-symbols-outlined">delete</span>
            </div>
          </div>
          <h5 class="center-align white-text">
            {{ selectedContact.firstName }} {{ selectedContact.lastName }}
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
                      ><b>{{ selectedContact.phone }}</b></span
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
