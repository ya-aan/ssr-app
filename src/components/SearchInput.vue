<template>
  <div>
    <input type="text" v-model="query" placeholder="Search for places..." @keyup="onKeyup" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useSearchStore } from '../stores/useSearchStore';
import { debounce } from 'lodash-es';

export default defineComponent({
  setup() {
    const query = ref('')
    const searchStore = useSearchStore()

    const debouncedSearch = debounce(() => {
      searchStore.search(query.value)
    }, 500) 

    function onKeyup() {
      debouncedSearch()
    }

    return {
      query,
      onKeyup,
    }
  },
})
</script>

<style scoped>
input {
  margin-bottom: 20px;
  width: 100%;
  padding: 8px;
  font-size: 16px;
}
</style>
