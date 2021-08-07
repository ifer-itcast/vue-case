<template>
  <div>
    <van-search shape="round" v-model="value" placeholder="请输入搜索关键词" />
    <!-- 搜索下的容器 -->
    <div class="search_wrap">
      <!-- 标题 -->
      <p class="hot_title">热门搜索</p>
      <!-- 搜索关键词容器 -->
      <div class="hot_name_wrap">
        <!-- 每个搜索关键词 -->
        <span class="hot_item" v-for="(obj, index) in hotArr" :key="index" @click="fn(obj.first)">{{
          obj.first
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { hotSearchAPI } from '@/api';
export default {
  name: 'Search',

  data() {
    return {
      value: '',
      hotArr: []
    };
  },
  async created() {
    const res = await hotSearchAPI();
    this.hotArr = res.data.result.hots;
  },
  methods: {
    fn(val) {
      this.value = val;
    }
  }
};
</script>

<style scoped>
/* 搜索容器的样式 */
.search_wrap {
  padding: 0.266667rem;
}

/*热门搜索文字标题样式 */
.hot_title {
  font-size: 0.32rem;
  color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}
</style>
