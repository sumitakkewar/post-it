<template>
  <div>
    <Header @createNew="showModal=true" />
    <Content :show-modal="showModal" @modalClosed="showModal=false" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'
import Content from '@/components/Content.vue'

export default defineComponent({
  name: 'Home',
  data(){
    return {
      showModal: false
    }
  },
  components: {
    Header,
    Content
  },
});
</script>
