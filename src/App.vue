<template>
  <div>
    <my-header title="购物车案例" />
    <div class="main">
      <my-goods v-for="obj in list" :key="obj.id" :gObj="obj" />
    </div>
    <my-footer @changeAll="allFn" :arr="list" />
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import MyGoods from './components/MyGoods.vue';
import MyFooter from './components/MyFooter.vue';
export default {
  name: 'App',
  data() {
    return {
      list: []
    };
  },
  components: {
    MyHeader,
    MyGoods,
    MyFooter
  },
  created() {
    this.$axios({
      url: '/api/cart'
    }).then((res) => {
      this.list = res.data.list;
    });
  },
  methods: {
    allFn(bool) {
      this.list.forEach((obj) => (obj.goods_state = bool));
    }
  }
};
</script>

<style scoped>
.main {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
