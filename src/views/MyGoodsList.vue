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
          <input
            class="tag-input form-control"
            style="width: 100px;"
            type="text"
            v-if="row.inputVisible"
            v-focus
            @blur="row.inputVisible = false"
            @keyup.enter="enterFn(row)"
            @keyup.esc="row.inputValue = ''"
            v-model="row.inputValue"
          />
          <button
            v-else
            style="display: block;"
            class="btn btn-primary btn-sm add-tag"
            @click="row.inputVisible = true"
          >
            +Tag
          </button>

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
    },
    enterFn(obj) {
      if (obj.inputValue.trim() === '') {
        alert('请输入数据');
        return;
      }
      obj.tags.push(obj.inputValue);
      obj.inputValue = '';
    }
  }
};
</script>
