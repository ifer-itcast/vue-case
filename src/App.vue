<template>
  <div>
    <p>
      <button @click="comName = 'UserName'">账号密码填写</button>
      <button @click="comName = 'UserInfo'">个人信息填写</button>
    </p>
    <div style="border: 1px solid red;">
      <keep-alive>
        <component :is="comName"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import UserName from './components/UserName.vue';
import UserInfo from './components/UserInfo.vue';
export default {
  name: 'App',
  components: {
    UserName,
    UserInfo
  },
  data() {
    return {
      comName: 'UserName'
    };
  }
};
</script>
