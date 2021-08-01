<template>
  <div>
    <ul>
      <li v-for="item in arr">
        {{item}}
        <!-- 页面上直接输入的内容，Vue 内部并没有感知，对于 Vue 来说修改前后都是 <input type="text"/>，所以会复用 -->
        <!-- <input type="text" /> -->
        <!-- 下面直接通过 :value 进行绑定的则不一样，input 标签还是复用了，但 value 会更新 -->
        <input type="text" :value="item" />
      </li>
    </ul>
    <button @click="handleAdd">add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ['老大', '老二', '老三'],
    };
  },
  methods: {
    handleAdd() {
      this.arr.splice(1, 0, '新来的');
      console.log(this.$vnode);
    }
  }
};
</script>

<style lang="less"></style>
