<template>
  <div>
    <Home />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Home from '@/views/Home.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'App',
  components: {
    Home,
  },
});
</script>
