<template>
  <div>
    <my-table :arr="list">
      <template #header>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #body="{row}">
        <td>{{ row.id }}</td>
        <td>{{ row.goods_name }}</td>
        <td>{{ row.goods_price }}</td>
        <td>
          <span
            v-for="(str, idx) in row.tags"
            :key="idx"
            class="mr-2 badge badge-warning"
            >{{ str }}</span
          >
        </td>
        <td>
          <button @click="removeBtn(row.id)" class="btn btn-danger btn-sm">
            删除
          </button>
        </td>
      </template>
    </my-table>
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
  },
  methods: {
    removeBtn(id) {
      let index = this.list.findIndex((obj) => obj.id === id);
      this.list.splice(index, 1);
    }
  }
};
</script>

<style lang="less" scoped></style>
