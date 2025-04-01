<template>
  <div
      :style="$q.screen.xs ? {width: '80%', zIndex: 5, position: 'relative'} :
              $q.screen.sm ? {width: '80%', zIndex: 5, position: 'relative'} :
              $q.screen.md ? {width: '85%', zIndex: 5, position: 'relative'} :
              $q.screen.lg ? {width: '84%', zIndex: 5, position: 'relative'} :
              $q.screen.xl ? {width: '64%', zIndex: 5, position: 'relative'} : null">
    <!--<div class="col px-0" >
      <div class="row"
           :style="$q.screen.xs ? {marginTop: '50px', flexDirection: 'column', alignItems: 'center', paddingLeft: '10px', paddingRight: '10px'} :
                   $q.screen.sm ? {marginTop: '50px', flexDirection: 'column', alignItems: 'center', paddingLeft: '10px', paddingRight: '10px'} :
                   $q.screen.md ? {marginTop: '50px', flexDirection: 'column', alignItems: 'center', paddingLeft: '10px', paddingRight: '10px'} :
                   $q.screen.lg ? {display:'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', paddingLeft: '30px', paddingRight: '30px',  marginTop: '100px'} :
                   $q.screen.xl ? {display:'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', paddingLeft: '30px', paddingRight: '30px',  marginTop: '100px'} : null">
        <div>
          <p class="text-white text-weight-bold font-family"
              :style="$q.screen.xs ? {fontSize: '25px'} :
                      $q.screen.sm ? {fontSize: '33px'} :
                      $q.screen.md ? {fontSize: '30px'} :
                      $q.screen.lg ? {fontSize: '40px', marginLeft: '5px'} :
                      $q.screen.xl ? {fontSize: '40px', marginLeft: '5px'} : null">
            Mapa {{title}}
          </p>
        </div>
        <div class="logo">
          <img src="https://mty-imagenes-respaldo.web.app/images/transparencia/aqui_se_resuelve_blanco.png" alt="logo">
        </div>
      </div>
    </div>-->

    <!--<div class="flex flex-center row">
      <q-card class="row" style="min-width: 1300px">
        <q-img
          src="https://mty-imagenes-respaldo.web.app/images/cms/juntos-resolvemos/juntos-resolvemos-cerro.png"

        />
        <q-card-section class="col">
          <p class="text-h6">Título</p>
          <p class="text-subtitle2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>
        </q-card-section>
      </q-card>
    </div>-->
    <div class="flex flex-center" style="z-index: 4">
      <q-card class="flex" style="padding: 1rem; display: flex; justify-content: center; align-items: center; border-radius: 5px; margin: 30px">
        <div>
          <iframe
              :src='link'
              :style="$q.screen.xs ? {width: '330px', height: '500px', border: 'none'} :
                      $q.screen.sm ? {width: '700px', height: '500px', border: 'none'} :
                      $q.screen.md ? {width: '900px', height: '500px', border: 'none'} :
                      $q.screen.lg ? {width: '1300px', height: '600px', border: 'none'} :
                      $q.screen.xl ? {width: '1300px', height: '600px', border: 'none'} : null">
          </iframe>
        </div>
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useQuasar} from "quasar";

const $q = useQuasar();

const props = defineProps({
  link: String,
});

</script>

<style scoped>

 .logo {
    flex: 0;
    margin-top: 20px;
  }

.logo img {
    width: 400px;
    height: auto;
}

.img{
  width: 200px;
  height: 200px;
}

.font-family{
  font-family: 'Gabarito', sans-serif;
}

/* Pantalla completa */
@media (max-width: 1950px) {
  /* Reducir el tamaño de la imagen */
  .logo img {
    width: 400px;
    height: auto;
  }
}

/* IPad*/
@media (max-width: 900px) {
  /* Reducir el tamaño de la imagen */
  .logo img {
    width: 350px;
    height: auto;
  }
}

/* Movil */
@media (max-width: 768px) {
  /* Reducir el tamaño de la imagen */
  .logo img {
    width: 300px;
  }
  .logo {
    margin-top: 15px;
  }
}
</style>
