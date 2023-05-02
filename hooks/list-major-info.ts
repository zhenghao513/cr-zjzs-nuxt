import { MajorInfoListArgs, MajorInfoListRes, queryMajorInfoList } from '~/api/plan';
import { usePlanStore } from '~/stores/plan';

export interface ListMajorInfoData {
  result: Ref<MajorInfoListRes>;
  error: Ref<unknown>;
}

export default async function listMajorInfo() {
  const store = usePlanStore();
  const query = async (args: MajorInfoListArgs) => {
    const data: ListMajorInfoData = await queryMajorInfoList(args);
    store.tableData = data.result.value.obj.list;
    store.totalCount = data.result.value.obj.totalCount;
  };
  await query({
    ccdmList: store.hierarchicalCode,
    hasBbjhs: store.supplementTheNumberOfPlans,
    keywords: store.keywords,
    pageIndex: store.currentPage,
    pageSize: store.pageSize,
    xxxsdmList: store.studyModeCode,
  });
}
