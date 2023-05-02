import { usePlanStore } from '~/stores/plan';
import listMajorInfo from './list-major-info';

export default async function useSetTableData() {
  const store = usePlanStore();
  await listMajorInfo();
  store.tableData = store.tableData?.filter((item) => item.bz.indexOf(store.place) >= 0);
}
