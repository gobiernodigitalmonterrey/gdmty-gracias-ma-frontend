<template>
  <q-card class="h-[600px] w-100 2xl:w-80 lg:w-80 md:w-80 shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center py-6">
    <q-card-section class="flex flex-col items-center w-full flex-1">
      <div class="w-32 h-32 rounded-full flex items-center justify-center mb-4" style="background-color: #233256;">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>
      <div class="w-full" style="font-family: 'Gabarito', sans-serif;">
        <p class="text-center font-bold text-h6">{{ invitado.nombre }}</p>
        <p class="text-center text-subtitle1 text-gray-600">{{ invitado.puesto }}</p>

        <div class="q-mt-md">
          <!-- Evento 1 -->
          <div class="relative mb-4">
            <div class="absolute left-0 top-0 bottom-0 w-1 bg-red-600"></div>
            <div class="ml-6">
              <p class="text-[18px] font-bold text-gray-600">{{ invitado.evento }}</p>
              <div class="flex items-center gap-1 text-sm text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3M16 7V3M19 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2z" />
                </svg>
                <span>{{ invitado.dia }}</span>
              </div>
            </div>
          </div>

          <!-- Evento 2 -->
          <div v-if="invitado.evento2" class="relative mb-4">
            <div class="absolute left-0 top-0 bottom-0 w-1 bg-red-600"></div>
            <div class="ml-6">
              <p class="text-[18px] font-bold text-gray-600">{{ invitado.evento2 }}</p>
              <div class="flex items-center gap-1 text-sm text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3M16 7V3M19 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2z" />
                </svg>
                <span>{{ invitado.dia2 }}</span>
              </div>
            </div>
          </div>

          <!-- Evento 3 -->
          <div v-if="invitado.evento3" class="relative mb-4">
            <div class="absolute left-0 top-0 bottom-0 w-1 bg-red-600"></div>
            <div class="ml-6">
              <p class="text-[18px] font-bold text-gray-600">{{ invitado.evento3 }}</p>
              <div class="flex items-center gap-1 text-sm text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3M16 7V3M19 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2z" />
                </svg>
                <span>{{ invitado.dia3 }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-card-section>

    <div class="w-full mt-auto px-6 pb-4 text-center">
      <hr />
      <p class="text-lg text-gray-600 q-mt-md" style="font-family: 'Gabarito', sans-serif">{{ invitado.correo }}</p>
    </div>
  </q-card>
</template>

<script setup lang="ts">
interface Invitado {
  nombre: string;
  puesto: string;
  correo: string;
  evento: string;
  dia: string;
  evento2?: string;
  dia2?: string;
  evento3?: string;
  dia3?: string;
}

const props = defineProps<{ invitado: Invitado }>();
</script>
