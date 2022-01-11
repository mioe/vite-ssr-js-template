import { defineStore } from 'pinia'

export const useAppStore = defineStore('app-store', {
  state: () => {
    return {
      flags: {
        hello: false,
      },
    }
  },
  getters: {
    getFlags() {
      return this.flags
    },
  },
  actions: {
    setFlags(arr) {
      arr.forEach(({ key, value }) => {
        this.flags[key] = value
      })
    },
  },
})
