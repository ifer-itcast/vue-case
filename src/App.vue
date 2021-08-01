<template>
  <section class="todoapp">
    <!-- 除了驼峰, 还可以使用-转换链接 -->
    <TodoHeader @create="createFn"></TodoHeader>
    <TodoMain :arr="list" @del="deleteFn"></TodoMain>
    <TodoFooter></TodoFooter>
  </section>
</template>

<script>
// 1.0 样式引入
import './styles/base.css';
import './styles/index.css';

import TodoHeader from './components/TodoHeader';
import TodoMain from './components/TodoMain';
import TodoFooter from './components/TodoFooter';

export default {
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter
  },
  data() {
    return {
      list: [
        { id: 100, name: '吃饭', isDone: true },
        { id: 201, name: '睡觉', isDone: false },
        { id: 103, name: '打豆豆', isDone: true }
      ]
    };
  },
  methods: {
    createFn(taskName) {
      const id =
        this.list.length === 0 ? 100 : this.list[this.list.length - 1].id + 1;
      this.list.push({
        id,
        name: taskName,
        isDone: false
      });
    },
    deleteFn(id) {
      const idx = this.list.findIndex((obj) => obj.id === id);
      this.list.splice(idx, 1);
    }
  }
};
</script>
