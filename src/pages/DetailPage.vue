<template>
  <div class="q-mx-xl q-mt-xl">
    <MediaContentsection :title="title" :image="image" :description="description"></MediaContentsection>
  </div>
  <q-page class="row flex justify-center">
    <CardMapa :link="link"/>
  </q-page>
</template>

<script setup lang="ts">
import CardMapa from "components/CardMap.vue";
import MediaContentsection from "components/MediaContentsection.vue";

import { useDetailStore } from 'stores/useDetailStore.js'

const store = useDetailStore()

const title = store.title
const image = store.image
const description = store.description
const link = store.link


console.log(link)
</script>

