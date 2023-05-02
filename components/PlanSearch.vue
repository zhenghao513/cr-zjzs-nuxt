<template>
  <el-row>
    <el-col :span="12">
      <el-input
        v-model="input"
        placeholder="请输入院校代码/院校名称/专业代码/专业名称"
      />
    </el-col>
    <el-col :span="12">
      <el-button
        type="primary"
        @click="keywordSearch"
      >
        查询
      </el-button>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
  import useSetTableData from '~/hooks/set-table-data';
  import { usePlanStore } from '~/stores/plan';

  const store = usePlanStore();
  const input = ref('');

  const keywordSearch = async () => {
    store.keywords = input.value;
    store.currentPage = 1;
    await useSetTableData();
  };
</script>

<style scoped>
  .el-button {
    margin-left: 15px;
  }

  .el-row {
    margin-bottom: 20px;
  }
</style>
