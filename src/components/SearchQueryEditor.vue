<script>
export default {
  props: ['modelValue'],

  emits: ['update:model-value'],
}
</script>

<template>
  <div class="nav-wrapper">
    <form>
      <div class="input-field">
        <input
          :value="modelValue"
          @input="$emit('update:model-value', $event.target.value)"
          class="teal-text text-lighten-5"
          id="search"
          type="search"
          placeholder="Search in contacts"
          required
        />
        <label class="label-icon" for="search"
          ><i class="material-icons">search</i></label
        >
        <i class="material-icons">close</i>
      </div>
    </form>
  </div>
</template>
