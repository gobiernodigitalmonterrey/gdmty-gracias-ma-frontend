<template>
  <div class="display">
    <q-btn :style="$q.screen.lt.lg ? {display: 'block'} : {margin: '10px'}"
         class="btn-style-buscado btn-responsive bg-white"
         :type="type"
         :icon="icon"
         :target="target"
         :rel="rel"
         :tag="tag"
         :href="href"
         :label="label"
  />
  </div>

</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

defineProps({
  type: {
    type: String,
    default: 'button'
  },
  icon: {
    type: String,
    default: ''
  },
  target: {
    type: String,
    default: ''
  },
  rel: {
    type: String,
    default: ''
  },
  tag: {
    type: String,
    default: 'a'
  },
  href: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
/* Pantalla completa */
@media (max-width: 1950px) {
  .display{
    display: inline;
  }
  .btn-responsive{
    font-size: 16px;
  }
}
@media (max-width: 1300px) {
  .display{
    display: inline;
  }
  .btn-responsive{
    font-size: 16px;
    padding-top: 7px;
  }
}
@media (max-width: 1075px) {
  .display{
    display: inline;
  }
  .btn-responsive{
    font-size: 16px;
    padding-top: 7px;
  }
}
/*IPad*/
@media (max-width: 900px) {
  .btn-responsive {
      display: block;
      width: 100%;
      text-align: center;
      justify-content: center;
      font-size: 16px;
      padding-top: 7px;
  }
}
/*Movil*/
@media (max-width: 768px) {
    .btn-responsive {
      display: block;
      width: 100%;
      text-align: center;
      justify-content: center;
      font-size: 16px!important;
      padding-top: 7px;
    }
}

.btn-style-buscado {
  margin-bottom: 5%;
  font-family: "Gabarito", sans-serif;
  font-weight: normal;
  border-radius: 30px;
}

</style>
