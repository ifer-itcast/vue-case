<template>
  <div>
    <input type="text" v-focus />
    <!-- 自定义指令传值 -->
    <p v-color="colorStr">Hello World</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      colorStr: 'red'
    };
  },
  directives: {
    // 局部指令
    focus: {
      inserted(el) {
        el.focus();
      }
    },
    color: {
      inserted(el, binding) {
        el.style.color = binding.value;
      },
      // 指令对应的数据更新的时候执行
      update(el, binding) {
        el.style.color = binding.value;
      }
    }
  }
};
</script>
