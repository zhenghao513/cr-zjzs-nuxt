<template>
  <client-only>
    <div class="pagination-container">
      <el-config-provider :locale="language">
        <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="[10, 20, 30, 40, 50, 100]"
          :total="store.totalCount"
          background
          layout="total, sizes, prev, pager, next, jumper"
          small
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </el-config-provider>
    </div>
  </client-only>
</template>

<script setup lang="ts">
  import { usePlanStore } from '@/stores/plan';
  import useSetTableData from '~/hooks/set-table-data';
  // @ts-ignore
  import zhCn from 'element-plus/dist/locale/zh-cn.mjs';

  const language = ref(zhCn);
  const store = usePlanStore();

  const currentPage = ref(store.currentPage);
  const pageSize = ref(store.pageSize);

  watch(
    () => store.currentPage,
    (newValue) => {
      currentPage.value = newValue;
    },
  );

  const handleSizeChange = async (val: number) => {
    store.pageSize = val;
    await useSetTableData();
  };
  const handleCurrentChange = async (val: number) => {
    store.currentPage = val;
    await useSetTableData();
  };
</script>

<style scoped>
  .pagination-container {
    display: flex;
    justify-content: right;
    align-items: center;
  }

  .el-pagination {
    margin-top: 30px;
  }
</style>
