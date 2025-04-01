<template>
  <div class="flex-container">
    <MediaDisplay :image="image"></MediaDisplay>
    <TextContent :title="title" :description="description"></TextContent>
  </div>
</template>

<script setup lang="ts">
import TextContent from "components/TextContent.vue";
import MediaDisplay from "components/MediaDisplay.vue";

const props = defineProps({
  title: String,
  image: String,
  description: String,
});

console.log(props.title, 'mediasection')
</script>

<style scoped>
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

@media (max-width: 768px) {
  .flex-container {
    flex-direction: column;
    align-items: center;
  }

  .flex-container > * {
    margin-bottom: 20px;
  }
}
</style>
