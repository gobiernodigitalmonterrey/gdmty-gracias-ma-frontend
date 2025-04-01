<template>
  <!-- Contenedor principal con el efecto hover -->
  <div class="flex flex-col items-center transform transition-all duration-300 hover:scale-110 cursor-pointer">
    <div
      class="w-32 h-32 rounded-full flex items-center justify-center mb-3"
      style="background-color: #233256;"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    </div>

    <div class="text-center">
      <p class="font-bold text-lg">{{ invitado.nombre }}</p>
      <p class="text-sm text-gray-600">{{ invitado.dia }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Invitado {
  nombre: string;
  dia: string;
}

const props = defineProps<{
  invitado: Invitado;
}>();
</script>
