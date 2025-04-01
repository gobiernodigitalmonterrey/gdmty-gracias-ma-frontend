<template>
  <q-footer class="bg-grey-2">
    <div style="padding-right: 40px; padding-left: 30px;">
      <div>
        <a href="https://www.monterrey.gob.mx/dependencias/siga" target="_blank">
          <q-img class="q-mt-lg q-ml-lg"
              src="https://mty-imagenes-respaldo.web.app/images/transparencia/logotipo_SIGA_azul.png"
              style="width: 250px; height: 100%;"
            />
        </a>
        <div class="q-mt-md q-ml-lg font-family text-black"
             style="border-top: 1px solid #cdcdcd; padding-top: 8px; font-size: 16px">
          Melchor Ocampo 130, Centro, 64000 Monterrey, N.L.
        </div>
      </div>
    </div>
    <div :style="$q.screen.xs ? {display: 'flex', justifyContent: 'center', marginTop: '8px', paddingRight: '13%', paddingLeft: '15%'} :
                 $q.screen.sm ? {display: 'flex', justifyContent: 'end', paddingRight: '5%'} :
                 $q.screen.md ? {display: 'flex', justifyContent: 'end', paddingRight: '5%'} :
                 $q.screen.lg ? {display: 'flex', justifyContent: 'end', paddingRight: '5%'} :
                 $q.screen.xl ? {display: 'flex', justifyContent: 'end', paddingRight: '5%'} : null">
              <div class="q-mr-lg">
                <div style="font-weight: bold; color: #233256; font-size: 16px">Menú</div>
                <div class="font-family">
                  <div>
                    <a href="https://gobiernodigital.monterrey.gob.mx/" class="link" target="_blank" rel="noopener">Gobierno Digital</a>
                  </div>
                  <div>
                    <a href="#" class="link" target="_blank" rel="noopener" >Participación Ciudadana</a>
                  </div>
                  <div>
                    <a href="https://transparencia-dev.web.app/#/transparencia" class="link" target="_blank" rel="noopener">Transparencia Proactiva</a>
                  </div>
                  <div>
                    <a href="https://mejoraregulatoria.monterrey.gob.mx/" class="link" target="_blank" rel="noopener">Mejora Regulatoria</a>
                  </div>
                  <div>
                    <a href="https://www.monterrey.gob.mx/noticias/1" class="link" target="_blank" rel="noopener">Sala de Prensa</a>
                  </div>
                </div>
              </div>

              <div>
                <div style="font-weight: bold; color: #233256; font-size: 16px">Herramientas</div>
                <div class="font-family">
                  <div>
                    <a href="https://modulodigital.monterrey.gob.mx/" class="link" target="_blank" rel="noopener">Módulo Digital</a>
                  </div>
                  <div>
                    <a href="https://id.monterrey.gob.mx/" class="link" target="_blank" rel="noopener" >iD Digital</a>
                  </div>
                  <div>
                    <a href="https://mide.monterrey.gob.mx/catalogue/#/dataset/262/edit/data" class="link" target="_blank" rel="noopener">Puntos Wifi</a>
                  </div>
                  <div>
                    <a href="https://mide.monterrey.gob.mx/#/" class="link" target="_blank" rel="noopener">Mide +</a>
                  </div>
                </div>
              </div>
     </div>
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
