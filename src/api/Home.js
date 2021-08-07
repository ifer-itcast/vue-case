import request from '@/utils/request';

export const recommendMusic = (params) =>
  request({
    url: '/personalized',
    params
  });
