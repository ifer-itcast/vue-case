<template>
  <div>
    <my-header title="购物车案例" />
    <div class="main">
      <my-goods />
    </div>
    <my-footer />
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import MyGoods from './components/MyGoods.vue';
import MyFooter from './components/MyFooter.vue';
export default {
  name: 'App',
  components: {
    MyHeader,
    MyGoods,
    MyFooter
  },
  created() {
    this.$axios({
      url: '/api/cart'
    }).then(res => {
      console.log(res);
    });
  }
};
</script>

<style scoped>
.main {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
