<template>
  <div>
    <div class="footer_wrap">
      <router-link to="/find">发现音乐</router-link>
      <router-link to="/my">我的音乐</router-link>
      <router-link to="/part?name=小传">朋友-小传</router-link>
      <router-link to="/part?name=小智">朋友-小智</router-link>
      <router-link to="/part/小博">朋友-小博</router-link>
      <router-link to="/part/小客">朋友-小客</router-link>
    </div>
    <!-- // !#5 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style scoped>
.footer_wrap .router-link-exact-active {
  color: white;
  background: black;
}
</style>
