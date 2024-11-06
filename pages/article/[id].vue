<template>
  <div>
    Watching article : {{ route.params.id }}
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>