<template>
  <q-footer class="bg-grey-2">
     <div class="text-center q-mt-md font-family" style="color: #233256;">
        <p style="font-size: 16px"> &copy; {{ year }}
          <a href="https://www.monterrey.gob.mx/"
             style="text-decoration: none; color: #233256; font-weight: bold; font-size: 16px" target="_blank" rel="noopener">
            Gobierno del Municipio de Monterrey
          </a>
        </p>
      </div>
  </q-footer>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref } from 'vue';

const $q = useQuasar();
const year = ref(new Date().getFullYear());

</script>

<style scoped>
.font-family {
  font-family: 'Gabarito', sans-serif;
}
.link{
  text-decoration: none;
  color: #9f9f9f;
  transition: color 0.3s ease;
  font-size: 16px;
}
.link:hover{
  color: #233256;
}

</style>
