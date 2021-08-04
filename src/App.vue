<template>
  <div id="container">
    <div id="app">
      <h3>案例：折叠面板</h3>
      <panel>
        <template v-slot="scope">
          <p>{{ scope.row.defaultTwo }}</p>
        </template>
      </panel>
    </div>
  </div>
</template>

<script>
import Panel from './components/Panel.vue';
export default {
  name: 'App',
  components: {
    Panel
  }
};
</script>
<style scoped>
#app {
  width: 400px;
  margin: 20px auto;
  background-color: #fff;
  border: 4px solid blueviolet;
  border-radius: 1em;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  padding: 1em 2em 2em;
}
</style>
