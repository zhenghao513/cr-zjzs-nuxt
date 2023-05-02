<template>
  <el-table
    :data="store.tableData"
    stripe
    style="width: 100%"
  >
    <template #empty>
      <el-empty
        :image-size="200"
        :description="`在第 ${store.currentPage} 页中没有找到在${store.place}的教学点`"
      />
    </template>
    <el-table-column type="expand">
      <template #default="props">
        备注详情：
        <el-space wrap>
          <el-tag v-for="tag in (props.row.bz as string).split(/;+/).slice(1)">
            {{ tag }}
          </el-tag>
        </el-space>
      </template>
    </el-table-column>
    <el-table-column
      v-for="column in columns"
      :key="column.prop"
      :prop="column.prop"
      :label="column.label"
      :width="column.prop === 'yxmc' ? '200' : ''"
    />
  </el-table>
</template>

<script lang="ts" setup>
  import { usePlanStore } from '~/stores/plan';

  interface TableColumnProps {
    prop: string;
    label: string;
    width?: string;
  }
  const columns: TableColumnProps[] = [
    {
      prop: 'yxdm',
      label: '院校代码',
    },
    {
      prop: 'yxmc',
      label: '院校名称',
    },
    {
      prop: 'zydm',
      label: '专业代码',
    },
    {
      prop: 'zymc',
      label: '专业名称',
    },
    {
      prop: 'kl',
      label: '科类',
    },
    {
      prop: 'cc',
      label: '层次',
    },
    {
      prop: 'xxxs',
      label: '学习形式',
    },
    {
      prop: 'xz',
      label: '学制',
    },
    {
      prop: 'zsfw',
      label: '招生范围',
    },
    {
      prop: 'jhs',
      label: '计划数',
    },
    {
      prop: 'bbjhs',
      label: '征求计划数',
    },
  ];

  const store = usePlanStore();
</script>
