<template>
  <q-layout>
    <q-header class="header-container">
      <q-toolbar class="full-width flex row" :style="$q.screen.lt.md ? {justifyContent: 'left'} : {}">
        <div class="q-ma-sm" :style="$q.screen.lg ? {marginLeft:'10px'} :
                     $q.screen.xl ? {marginLeft:'10px'} : null">
          <a href="https://www.monterrey.gob.mx/" target="_blank" rel="noopener">
            <q-img class="logos" src="https://mty-imagenes-respaldo.web.app/images/transparencia/escudo_blanco.png" alt="logo"/>
          </a>
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container class="index-page">
      <router-view />
    </q-page-container>

    <Footer/>
  </q-layout>
</template>


<script setup lang="ts">
import { useQuasar } from 'quasar';
import Footer from "components/ComponenteFooter.vue";
import NavMenu from "components/NavMenu.vue";

const $q = useQuasar();

</script>

<style scoped>

/*.index-page {
  position: relative;
  background-color: #233256;
  overflow: hidden;
  min-height: 100vh;
}

.index-page::before {
  content: '';
  position: absolute;
  bottom: -20%;
  left: -20%;
  width: 140%;
  height: 70%;
  background-color: white;
  transform: rotate(-2deg);
  border-radius: 100% 0 0 0;
  z-index: 2;
}

.index-page::after {
  content: '';
  position: absolute;
  bottom: -5%;
  left: -10%;
  width: 120%;
  height: 40%;
  background-color: white;
  border-radius: 100% 100% 0 0;
  z-index: 1;
}*/

.logos{
  width: 150px;
  height: auto;
}

q-toolbar {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-container {
  background: #233256;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
