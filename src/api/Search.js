import request from '@/utils/request';

// 搜索关键词
export const hotSearch = (params) =>
  request({
    url: '/search/hot',
    params
  });

// 搜索结果
export const searchResultList = (params) =>
  request({
    url: '/cloudsearch',
    params
  });
