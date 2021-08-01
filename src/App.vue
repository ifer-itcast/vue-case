<template>
  <div>
    <use-axios />
  </div>
</template>

<script>
import UseAxios from './components/UseAxios.vue';
export default {
  name: 'App',
  data() {
    return {
      show: true
    };
  },
  components: {
    UseAxios
  }
};
</script>
