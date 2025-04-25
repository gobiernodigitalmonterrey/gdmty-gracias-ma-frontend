<template>
  <div class="px-6 mt-8 mb-8">
      <div class="relative w-full mb-1" style="font-family: 'Gabarito', sans-serif">
        <!-- Contenedor del título -->
          <h1 class="text-4xl font-bold text-red-5 md:text-6xl ml-5">
            ¡Gracias, Má! ❤
          </h1>
    </div>
    <!-- Card formulario -->
    <div>
      <ComponenteFormulario/>
    </div>
  </div>
</template>


<script setup lang="ts">
import ComponenteFormulario from "components/ComponenteFormulario.vue";

</script>

<style scoped>
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

