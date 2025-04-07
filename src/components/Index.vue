<template>
  <div class="px-6 mt-8 mb-8">
    <div class="mb-20 flex justify-center">
      <div class="relative w-full">
        <!-- Línea roja en el lado izquierdo -->
        <div class="absolute -left-12 top-0 h-full w-4 bg-[#ea193c]"></div>
        <!-- Contenedor del título -->
        <div class="relative z-10 rounded-none bg-[#2c3e6b] w-full px-16 py-8">
          <h1 class="text-4xl font-bold text-white md:text-6xl" style="font-family: 'Gabarito', sans-serif">
            Global Summit 2025
          </h1>
        </div>
      </div>
    </div>

    <!-- Grid de invitados -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-8 justify-center">
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
    puesto: "Secretaria de Desarrollo Económico",
    correo: "ximena.tamariz@monterrey.gob.mx",
    evento: "Smartshoring Panel",
    dia: '10 de abril',
    evento2: "Ceremonia de Premiación",
    dia2: '10 de abril'
  },
  {
    nombre: "Juan Ignacio Bringas Martinez",
    puesto: "Director de Inversiones e Innovación Tecnológica",
    correo: "juan.bringas@monterrey.gob.mx",
    evento: "Sesiones Generales",
    dia: '9-10 de abril',
    evento2: "Ceremonia de Premiación",
    dia2: '11 de abril',
    evento3: "Working Groups",
    dia3: '11 de abril',
  },
  {
    nombre: "Juan Manuel Soto Garcia",
    puesto: "Director de Gobierno Digital",
    correo: "juan.sotog@monterrey.gob.mx",
    evento: "Sesiones Generales",
    dia: '9-10 de abril'
  },
  {
    nombre: "David Rodriguez Castillon",
    puesto: "Coordinador de Centros",
    correo: "drodriguez@monterrey.gob.mx",
    evento: "Sesiones Generales",
    dia: '9-10 de abril'
  },
  {
    nombre: "Oscar Alejandro Flores Treviño",
    puesto: "",
    correo: "oaflores@monterrey.gob.mx",
    evento: "Sesiones Generales",
    dia: '9-10 de abril'
  },
  {
    nombre: "Luis Lauro Torres Perez",
    puesto: "Director de Planeación, Enlace y Proyectos Estratégicos",
    correo: "luislauro@monterrey.gob.mx",
    evento: "Ceremonia de Premiación",
    dia: '10 de abril'
  },
  {
    nombre: "Fernando Margain Sada",
    puesto: "",
    correo: "araujordz8@gmail.com",
    evento: "Ceremonia de Premiación",
    dia: '10 de abril'
  },
  {
    nombre: "Arturo Cantu Gonzalez",
    puesto: "Director de Turismo",
    correo: "arturo.cantu@monterrey.gob.mx",
    evento: "Ceremonia de Premiación",
    dia: '10 de abril'
  },
  {
    nombre: "Victor Miguel Melgarejo Zurutuza",
    puesto: "Director HUB UDEM de Innovación emprendimiento",
    correo: "victor@metconecta.com",
    evento: "Working Groups",
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

