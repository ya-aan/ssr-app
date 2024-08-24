import { defineStore } from 'pinia'
import axios from 'axios'

export const useSearchStore = defineStore('search', {
  state: () => ({
    query: '',
    results: [] as Array<{ display_name: string; type: string; class: string }>,
  }),
  actions: {
    async search(query: string) {
      if (query.trim() === '') {
        this.results = []
        return
      }
      this.query = query
      const response = await axios.get(`/search?format=json&q=${encodeURIComponent(query)}`)
      this.results = response.data
    },
  },
})
