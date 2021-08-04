<template>
  <div>
    <div>
      <span>用户名：</span>
      <input type="text" />
    </div>
    <div>
      <span>密码：</span>
      <input type="password" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserName',
  activated() {
    console.log('UserName activated');
  },
  deactivated() {
    console.log('UserName deactivated');
  }
};
</script>
