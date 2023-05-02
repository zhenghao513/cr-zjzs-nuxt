import { defineStore } from 'pinia';

export const usePlanStore = defineStore('plan', () => {
  // 层次代码、学习形式代码、补报计划
  const hierarchicalCode = ref<string[]>([]);
  const studyModeCode = ref<string[]>([]);
  const supplementTheNumberOfPlans = ref(-1);

  // 教学点
  const place = ref('');

  // 关键词
  const keywords = ref('');

  interface TableData {
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
  }
  const tableData = ref<TableData[] | undefined>([]);

  // 当前页数、一页大小、总数
  const currentPage = ref(1);
  const pageSize = ref(10);
  const totalCount = ref(0);

  return {
    hierarchicalCode,
    studyModeCode,
    supplementTheNumberOfPlans,
    place,
    keywords,
    currentPage,
    pageSize,
    totalCount,
    tableData,
  };
});
