export default {
    set: (value) => localStorage.setItem('memory', value),
    get: () => JSON.parse(localStorage.getItem('memory')),
    clear: () => localStorage.removeItem('memory')
  }
  