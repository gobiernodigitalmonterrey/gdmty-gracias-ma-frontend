<template>
  <div class="justify-start">
    <q-card flat class="q-pa-lg" style="font-family: 'Gabarito', sans-serif">
      <h6 class="font-bold text-subtitle1 md:text-h5 mb-3">Monterrey, Nuevo León - 10 de mayo de 2025</h6>
        <div class="text-subtitle1 md:text-h5">El Municipio de Monterrey te invita a participar en la rifa que se llevará a cabo el <span class="font-bold">10 de mayo de 2025</span>, con el motivo del Día de las Madres. <br/>
          Esta rifa está dirigida <span class="font-bold">exclusivamente a mujeres mayores de edad que acredite tener al menos un hijo</span>.<br/>
          Para participar, completa el siguiente formulario con tus datos y asegúrate de cumplir con los requisitos establecidos.<br/>
          La información proporcionada será utilizada únicamente para fines de identificación y contacto en caso de resultar ganadora.<br/>
        </div>
        <h6 class="font-bold text-subtitle1 md:text-h5 mt-3">Es importante llenar todos los campos de manera correcta para validar tu registro.</h6>

      <q-form @submit.prevent="submitForm">
        <div class="q-gutter-md mt-3 row items-start justify-start flex-wrap">
          <!-- Agrupa inputs en filas de 5 -->
          <q-input class="w-[100%] sm:w-[100%] md:w-[31%] lg:w-[31%] xl:w-[31%] 2xl:w-[40%] min-w-[200px]" outlined color="pink-11" v-model="form.nombre" label="Nombre(s)" />
          <q-input class="w-[100%] sm:w-[100%] md:w-[31%] lg:w-[31%] xl:w-[31%] 2xl:w-[40%] min-w-[200px]" outlined color="pink-11" v-model="form.apellidoPaterno" label="Apellido paterno" />
          <q-input class="w-[100%] sm:w-[100%] md:w-[31%] lg:w-[31%] xl:w-[31%] 2xl:w-[40%] min-w-[200px]" outlined color="pink-11" v-model="form.apellidoMaterno" label="Apellido materno" />
          <q-input
            class="w-[100%] sm:w-[100%] md:w-[31%] lg:w-[31%] xl:w-[31%] 2xl:w-[40%] min-w-[200px]"
            outlined
            hide-bottom-space
            color="pink-11"
            :model-value="form.curp"
            label="CURP"
            maxlength="18"
            :rules="[validaCURP]"
            @update:model-value="val => form.curp = val.toUpperCase()"
          />
          <q-input
            class="w-[100%] sm:w-[100%] md:w-[31%] lg:w-[31%] xl:w-[31%] 2xl:w-[40%] min-w-[200px]"
            outlined
            hide-bottom-space
            color="pink-11"
            v-model="form.email"
            label="Correo electrónico"
            type="email"
            :rules="[validaEmail]"
          />
          <q-input
            class="w-[100%] sm:w-[100%] md:w-[31%] lg:w-[31%] xl:w-[31%] 2xl:w-[40%] min-w-[200px]"
            outlined
            hide-bottom-space
            color="pink-11"
            v-model="form.telefono"
            label="Teléfono celular"
            type="tel"
            maxlength="10"
            :rules="[validaTelefono]"
          />
          <q-input class="w-[100%] sm:w-[100%] md:w-[31%] lg:w-[31%] xl:w-[31%] 2xl:w-[40%] min-w-[200px]" outlined color="pink-11" v-model="form.calle" label="Calle" />
          <q-input class="w-[100%] sm:w-[100%] md:w-[31%] lg:w-[31%] xl:w-[31%] 2xl:w-[40%] min-w-[200px]" outlined color="pink-11" v-model="form.numero" label="Número" maxlength="8"/>
          <q-input class="w-[100%] sm:w-[100%] md:w-[31%] lg:w-[31%] xl:w-[31%] 2xl:w-[40%] min-w-[200px]" outlined color="pink-11" v-model="form.colonia" label="Colonia" />
          <q-input
            class="w-[100%] sm:w-[100%] md:w-[31%] lg:w-[31%] xl:w-[31%] 2xl:w-[40%] min-w-[200px]"
            outlined hide-bottom-space
            color="pink-11"
            v-model="form.cp"
            label="Código Postal"
            maxlength="5"
            :rules="[validaCP]"
          />
        </div>

        <!-- Uploaders en fila -->
        <div class="row gap-8 mt-5">
          <q-uploader
            hide-upload-btn
            class="w-[100%] sm:w-[100%] md:w-[30.5%] lg:w-[30.5%] xl:w-[30.5%] 2xl:w-[40%] min-w-[200px]"
            color="pink-11"
            label="Subir INE (Frontal)"
            accept=".jpg, .png, .pdf"
            :auto-upload="false"
            @added="files => form.ineFrontal = files"
            v-model="form.ineFrontal"
          />
          <q-uploader
            hide-upload-btn
            class="w-[100%] sm:w-[100%] md:w-[30.5%] lg:w[30.5%] xl:w-[30.5%] 2xl:w-[40%] min-w-[200px]"
            color="pink-11"
            label="Subir INE (Reverso)"
            accept=".jpg, .png, .pdf"
            :auto-upload="false"
            @added="files => form.ineReverso = files"
            v-model="form.ineReverso"
          />
          <q-uploader
            hide-upload-btn
            class="w-[100%] sm:w-[100%] md:w-[30.5%] lg:w-[30.5%] xl:w-[30.5%] 2xl:w-[40%] min-w-[200px]"
            color="pink-11"
            label="Subir acta de nacimiento del hijo(a)"
            accept=".jpg, .png, .pdf"
            :auto-upload="false"
            @added="files => form.actaNacimiento = files"
            v-model="form.actaNacimiento"
          />
        </div>

        <!-- Checkbox y botón -->
        <div class="ml-[-8px] text-subtitle1 q-mt-md">
          <q-checkbox color="red-5" v-model="val" />
          <span class="text-sm">
            Acepto y he leído <span class="font-bold text-red-5 cursor-pointer" @click="aviso">el aviso de privacidad</span>
          </span>
        </div>

        <q-btn
          class="text-subtitle1 q-mt-md"
          no-caps
          type="submit"
          label="Enviar"
          color="red-5"
          style="width: 100px"
          :disable="!isFormValid"
        />
      </q-form>

      <q-dialog v-model="showDialog">
        <q-card class="q-pa-md" style="max-width: 500px; font-family: 'Gabarito', sans-serif;">

          <div class="row justify-end">
            <q-btn icon="close" flat dense round color="grey" @click="showDialog = false" />
          </div>

          <q-card-section>
            <div class="text-3xl">
              Aviso de Privacidad
            </div>
            <div class="text-subtitle2 q-mt-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat no-caps class="text-subtitle1" label="Cerrar" color="" v-close-popup />
          </q-card-actions>

        </q-card>
      </q-dialog>
  </q-card>

  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { computed } from 'vue'

const form = ref({
  nombre: '',
  apellidoPaterno: '',
  apellidoMaterno: '',
  curp: '',
  email: '',
  telefono: '',
  calle: '',
  numero: '',
  colonia: '',
  cp: '',
  ineFrontal: [],
  ineReverso: [],
  actaNacimiento: [],
})

const validaNumero = (val: string | number) =>
  /^\d+$/.test(String(val)) || 'Solo se permiten números'

const soloNumeros = (e: KeyboardEvent) => {
  if (!/[0-9]/.test(e.key)) {
    e.preventDefault()
  }
}
const validaEmail = (val: string) => val.includes('@') || 'Correo inválido'
const validaTelefono = (val: string) =>
  /^\d{10}$/.test(val) || 'Teléfono debe tener 10 dígitos'
const validaCURP = (val: string) =>
  /^[A-Z0-9]{18}$/i.test(val) || 'CURP inválido'
const validaCP = (val: string) =>
  /^64\d{3}$/.test(val) || 'Debe ser un CP de Monterrey'

const val = ref(false)

const submitForm = () => {
  console.log('Datos del formulario:', form.value)
}

const showDialog = ref(false)

const aviso = () => {
  showDialog.value = true
}

const isFormValid = computed(() => {
  const datos = form.value
  return (
    val.value &&
    datos.nombre &&
    datos.apellidoPaterno &&
    datos.apellidoMaterno &&
    /^[A-Z0-9]{18}$/i.test(datos.curp) &&
    datos.email.includes('@') &&
    /^\d{10}$/.test(datos.telefono) &&
    datos.calle &&
    datos.numero &&
    datos.colonia &&
    /^64\d{3}$/.test(datos.cp) &&
    datos.ineFrontal.length > 0 &&
    datos.ineReverso.length > 0 &&
    datos.actaNacimiento.length > 0
  )
})



</script>
