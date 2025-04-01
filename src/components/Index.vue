<template>
  <div class="container  px-4 mt-8 mb-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
      <ComponenteInvitados
        v-for="(invitado, index) in invitados"
        :key="index"
        :invitado="invitado"

      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ComponenteInvitados from "components/ComponenteInvitados.vue";

const invitados = [
  {
    nombre: "Ximena Tamariz Garcia",
    dia: '10 de abril'
  },
  {
    nombre: "Juan Ignacio Bringas Martinez",
    dia: '9-10 de abril'
  },
  {
    nombre: "Juan Manuel Soto Garcia",
    dia: '9-10 de abril'
  },
  {
    nombre: "David Rodriguez Castillon",
    dia: '9-10 de abril'
  },
  {
    nombre: "Oscar Alejandro Flores Treviño",
    dia: '9-10 de abril'
  },
  {
    nombre: "Federico Eugenio Vargas Rodriguez",
    dia: '10 de abril'
  },
  {
    nombre: "Fernando Margain Sada",
    dia: '10 de abril'
  },
  {
    nombre: "Arturo Cantu Gonzalez",
    dia: '10 de abril'
  },
  {
    nombre: "Juan Bringas",
    dia: '11 de abril'
  },
  {
    nombre: "Victor Melgarejo",
    dia: '11 de abril'
  },
]
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

