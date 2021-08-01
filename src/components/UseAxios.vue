<template>
  <div>
    <p>
      <input type="text" placeholder="请输入书名" v-model="bookname" />
      <button @click="getAllFn">查询</button>
    </p>
    <p>
      <input type="text" placeholder="请输入书名" v-model="bookObj.bookname" />
      <input type="text" placeholder="请输入作者" v-model="bookObj.author" />
      <input
        type="text"
        placeholder="请输入出版社"
        v-model="bookObj.publisher"
      />
      <button @click="add">新增</button>
    </p>
  </div>
</template>

<script>
import axios from 'axios';
axios.defaults.baseURL = 'http://123.57.109.30:3006';
export default {
  name: 'UseAxios',
  data() {
    return {
      bookname: '西游记',
      bookObj: {
        bookname: '三国志',
        author: '古龙',
        publisher: '中青社'
      }
    };
  },
  methods: {
    getAllFn() {
      // !#1 GET 请求
      /* axios({
        url: '/api/getbooks',
        method: 'GET'
      }).then((r) => {
        console.log(r);
      }); */
      // !#2 GET 请求并传参
      axios({
        url: '/api/getbooks',
        method: 'GET',
        params: {
          bookname: this.bookname
        }
      }).then((r) => {
        console.log(r);
      });
    },
    add() {
      // !#3 POST 请求并传参
      axios({
        url: '/api/addbook',
        method: 'POST',
        data: {
          appkey: '7250d3eb-18e1-41bc-8bb2-11483665535a',
          ...this.bookObj
        }
      }).then((r) => {
        console.log(r);
      });
    }
  }
};
</script>
