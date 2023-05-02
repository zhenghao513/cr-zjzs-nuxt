import { useFetch } from '@/hooks/fetch';

export interface DocumentRes {
  retCode: number;
  obj: {
    bindType: number;
    content: string;
    title: string;
  };
  msg: {
    businessCode: number;
    prompt: string;
    error: string;
  };
}

export async function queryDocument(bindType: number) {
  return await useFetch('https://cr.zjzs.net/api/common/option/get-system-use', {
    args: {
      bindType,
    },
    token: 'dreamtouch',
    deviceInfo:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.362023-04-30 16:05:42',
    channel: 'pc_h5_ksd',
  });
}
