<template>
  <q-page>
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
