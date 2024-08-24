<template>
  <div class="result">
    <h3>{{ result.display_name }}</h3>
    <p>{{ result.type }} - {{ result.class }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    result: {
      type: Object as PropType<{ display_name: string; type: string; class: string }>,
      required: true,
    },
  },
})
</script>

<style scoped>
.result {
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
}
</style>
