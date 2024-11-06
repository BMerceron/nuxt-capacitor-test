<template>
  <h1 class="font-bold text-3xl">SSR</h1>
  <div v-html="data?.[0].body" />
  {{ new Date() }}
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const { data } = await useFetch(`${runtimeConfig.public.apiHost}/about-us`);
</script>