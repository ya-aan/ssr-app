<template>
  <div id="app">
    <SearchInput />
    <div v-if="results.length">
      <SearchResult v-for="result in results" :key="result.display_name" :result="result" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useSearchStore } from './stores/useSearchStore';
import SearchInput from './components/SearchInput.vue';
import SearchResult from './components/SearchResult.vue';

export default defineComponent({
  components: {
    SearchInput,
    SearchResult,
  },
  setup() {
    const searchStore = useSearchStore()
    const results = computed(() => searchStore.results)

    if (typeof window === 'undefined') {
      console.log('Рендеринг на сервере');
    } else {
      console.log('Рендеринг на клиенте');
    }

    return {
      results,
    }
  },
})
</script>
