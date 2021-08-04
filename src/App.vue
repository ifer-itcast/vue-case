<template>
  <div>
    <my-header background="blue" color="white" title="TabBar 案例" />
    <my-tab-bar :arr="tabList" />
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import MyTabBar from './components/MyTabBar.vue';
export default {
  name: 'App',
  components: {
    MyHeader,
    MyTabBar
  },
  data() {
    return {
      tabList: [
        {
          iconText: 'icon-shangpinliebiao',
          text: '商品列表',
          componentName: 'MyGoodsList'
        },
        {
          iconText: 'icon-sousuo',
          text: '商品搜索',
          componentName: 'MyGoodsSearch'
        },
        {
          iconText: 'icon-user',
          text: '我的信息',
          componentName: 'MyUserInfo'
        }
      ]
    };
  }
};
</script>
