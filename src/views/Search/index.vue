<template>
  <div>
    <van-search
      shape="round"
      v-model="value"
      placeholder="请输入搜索关键词"
      @input="inputFn"
    />
    <!-- 搜索下的容器 -->
    <div class="search_wrap" v-if="resultList.length === 0">
      <!-- 标题 -->
      <p class="hot_title">热门搜索</p>
      <!-- 搜索关键词容器 -->
      <div class="hot_name_wrap">
        <!-- 每个搜索关键词 -->
        <span
          class="hot_item"
          v-for="(obj, index) in hotArr"
          :key="index"
          @click="fn(obj.first)"
          >{{ obj.first }}</span
        >
      </div>
    </div>
    <!-- 搜索结果 -->
    <div class="search_wrap" v-else>
      <!-- 标题 -->
      <p class="hot_title">最佳匹配</p>
      <van-cell
        :title="obj.name"
        :label="obj.ar[0].name"
        center
        v-for="obj in resultList"
        :key="obj.id"
      >
        <template #right-icon>
          <van-icon name="play-circle-o" size="0.5rem" />
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
import { hotSearchAPI, searchResultListAPI } from '@/api';
export default {
  name: 'Search',

  data() {
    return {
      value: '',
      hotArr: [],
      resultList: []
    };
  },
  async created() {
    const res = await hotSearchAPI();
    this.hotArr = res.data.result.hots;
  },
  methods: {
    async getListFn() {
      return await searchResultListAPI({
        keywords: this.value,
        limit: 20
      });
    },
    async fn(val) {
      this.value = val;
      const res = await this.getListFn();
      this.resultList = res.data.result.songs;
    },
    async inputFn() {
      if (this.value.length === 0) {
        this.resultList = [];
        return;
      }
      const res = await this.getListFn();
      this.resultList = res.data.result.songs;
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
