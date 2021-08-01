<template>
  <div>
    <button @click="show = !show">销毁</button>
    <hr>
    <Life v-if="show"/>
  </div>
</template>

<script>
import Life from './components/Life.vue'
export default {
  name: 'App',
  data() {
    return {
      show: true
    }
  },
  components: {
    Life
  }
}
</script>
