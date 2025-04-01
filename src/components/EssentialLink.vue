<template>
  <q-item
    clickable
    tag="a"
    :href="link"
  >
    <q-item-section
      v-if="icon"
      avatar
      class="color"
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section class="font">
      <q-item-label class="color">{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
export interface EssentialLinkProps {
  title?: string;
  link?: string;
  icon?: string;
};

withDefaults(defineProps<EssentialLinkProps>(), {
  caption: '',
  link: '#',
  icon: '',
});
</script>

<style scoped>
.font{
  font-family: 'Gabarito', sans-serif;
  font-size: 16px;
}
.color{
  color: black;
}

</style>
