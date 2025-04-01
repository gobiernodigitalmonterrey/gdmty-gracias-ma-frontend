<template>
  <q-page class="row justify-evenly">
    <Index
      title=""
      active
      :todos="todos"
      :meta="meta"
    />
  </q-page>
</template>

<script setup lang="ts">
import Index from "components/Index.vue";

</script>

<style scoped>


</style>
