<template>
  <div class="top">
    <div class="footer_wrap">
      <span @click="btn('/find', 'Find')">发现音乐</span>
      <span @click="btn('/my', 'My')">我的音乐</span>
      <span @click="btn('/part', 'Part')">朋友-小传</span>
    </div>
    <!-- // !#5 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    btn(path, targetName) {
      this.$router.push({
        // path // 根据路由的 path
        name: targetName // 根据路由的 name
      });
    }
  }
};
</script>

<style scoped>
.footer_wrap {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap span {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap span:hover {
  background-color: #555;
}
.top {
  padding-top: 62px;
}
.footer_wrap .router-link-exact-active {
  color: white;
  background: black;
}
</style>
