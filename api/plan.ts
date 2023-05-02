import { useFetch } from '@/hooks/fetch';

export interface HierarchicalCodeRes {
  retCode: number;
  obj: {
    list: [
      {
        optionCode: string;
        optionName: string;
      },
      {
        optionCode: string;
        optionName: string;
      },
      {
        optionCode: string;
        optionName: string;
      },
    ];
  };
  msg: {
    businessCode: number;
    prompt: string;
    error: string;
  };
}
export async function queryHierarchicalCode() {
  return await useFetch('https://cr.zjzs.net/api/common/option/get-ccdm-option', {
    args: {},
    token: 'dreamtouch',
    deviceInfo:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.362023-04-30 17:23:07',
    channel: 'pc_h5_ksd',
  });
}

export interface MajorInfoListRes {
  retCode: number;
  obj: {
    totalCount: number;
    list: [
      {
        yxdm: string;
        yxmc: string;
        zydm: string;
        zymc: string;
        kl: string;
        cc: string;
        xxxs: string;
        xz: string;
        zsfw: string;
        jhs: string;
        bbjhs: string;
        bz: string;
        yxUrl: null;
      },
    ];
  };
  msg: {
    businessCode: number;
    prompt: string;
    error: string;
  };
}
export interface MajorInfoListArgs {
  ccdmList: string[];
  keywords: string;
  pageIndex: number;
  pageSize: number;
  xxxsdmList: string[];
  hasBbjhs: number;
}
export async function queryMajorInfoList(args: MajorInfoListArgs) {
  return await useFetch('https://cr.zjzs.net/api/front/student/get-zyxx-list', {
    args,
    token: 'dreamtouch',
    deviceInfo:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.362023-04-30 20:41:55',
    channel: 'pc_h5_ksd',
  });
}
