import request from '@/utils/axios';

const baseUrl = 'https://www.toutiao.com';

/**
 * 获取异常车辆排行信息
 * @param {Object} params
 */
export async function getWeather(params) {
  return request({
    url: `${baseUrl}/stream/widget/local_weather/data/`,
    method: 'GET',
    data: params,
  });
}
