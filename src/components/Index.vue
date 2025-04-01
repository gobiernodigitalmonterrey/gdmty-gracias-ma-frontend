<template>
  <div class="flex justify-center items-center">
    <p>ggg</p>
  </div>
</template>
<script setup lang="ts">
import { useQuasar } from 'quasar';
import {ref, onMounted} from "vue";
import { apiMide } from "boot/axios";

const $q = useQuasar();

interface DataMide {
  title: string;
  thumbnail_url: string;
  embed_url: string;
  abstract:string;
}

const cards = ref<DataMide[]>([]);

onMounted(async () => {
  const response = await apiMide.get('/geoapps')
  cards.value = response.data?.geoapps
  console.log(cards.value, 'value')
})

</script>

<style >
.container{
  z-index: 3;
  position: relative;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1200px;
  width: 100%;
}
.fuente{
  font-family: 'Gabarito', sans-serif;
  font-weight: bold;
  border-bottom: 1px solid white;
  display: inline-block;
}

/* Pantalla completa */
@media (max-width: 1950px) {
  .logo img {
    width: 400px;
    height: auto;
    margin-bottom: 8px;
  }
}
/* IPad*/
@media (max-width: 1075px) {
  .logo img {
    width: 350px;
    height: auto;
  }
}

@media (max-width: 900px) {
  .logo img {
    width: 350px;
    height: auto;
  }
}
/*Movil*/
@media (max-width: 768px) {
  .logo img {
    width: 350px;
  }
}

.btn-style-buscado .fa{
  font-size: 15px;
}
</style>

