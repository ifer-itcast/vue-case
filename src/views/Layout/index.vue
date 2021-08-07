<template>
  <div>
    Layout
    <!-- 二级路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Layout',

  data () {
    return {
    }
  },

  methods: {}
}
</script>

<style scoped>
/* 中间内容区域 - 容器样式(留好上下导航所占位置) */
.main {
  padding-top: 46px;
  padding-bottom: 50px;
}
</style>
