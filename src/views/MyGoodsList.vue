<template>
  <div>
    <my-table :arr="list" />
  </div>
</template>

<script>
import axios from 'axios';
import MyTable from '../components/MyTable.vue';
axios.defaults.baseURL = 'https://www.escook.cn';
export default {
  name: 'MyGoodsList',
  components: {
    MyTable
  },
  data() {
    return {
      list: []
    };
  },
  created() {
    axios({
      url: '/api/goods'
    }).then((res) => {
      this.list = res.data.data;
    });
  }
};
</script>

<style lang="less" scoped></style>
