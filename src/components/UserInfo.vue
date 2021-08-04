<template>
  <div>
    <div>
      <span>人生格言：</span>
      <input type="text" />
    </div>
    <div>
      <span>个人简介：</span>
      <textarea></textarea>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserInfo',
  activated() {
    console.log('UserInfo activated');
  },
  deactivated() {
    console.log('UserInfo deactivated');
  }
}
</script>