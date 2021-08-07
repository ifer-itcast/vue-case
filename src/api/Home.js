import request from '@/utils/request';

// 推荐
export const recommendMusic = (params) =>
  request({
    url: '/personalized',
    params
  });

// 最新
export const newMusic = (params) =>
  request({
    url: '/personalized/newsong',
    params
  });
