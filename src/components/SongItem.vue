<template>
  <van-cell :title="name" :label="author + '-' + name" center>
    <template #right-icon>
      <van-icon name="play-circle-o" size="0.5rem" />
    </template>
  </van-cell>
</template>

<script>
export default {
  name: 'SongItem',
  props: {
    name: String,
    author: String,
    id: Number
  }
};
</script>

<style scoped>
.van-cell {
  border-bottom: 1px solid lightgray;
}
</style>
