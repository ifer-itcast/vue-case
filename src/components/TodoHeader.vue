<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      @keyup.enter="downFn"
      v-model="task"
    />
  </header>
</template>

<script>
export default {
  props: ['arr'],
  data() {
    return {
      task: ''
    };
  },
  methods: {
    downFn() {
      this.$emit('create', this.task);
      this.task = '';
    }
  },
  computed: {
    isAll: {
      get() {
        // 没有数据时，不要勾选【全选按钮】
        return this.arr.length !== 0 && this.arr.every((obj) => obj.isDone === true);
      },
      set(checked) {
        this.arr.forEach((obj) => (obj.isDone = checked));
      }
    }
  }
};
</script>
