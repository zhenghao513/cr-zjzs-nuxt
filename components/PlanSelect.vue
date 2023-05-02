<template>
  <el-form label-width="130px">
    <el-form-item label="教学点选择：">
      <el-select
        v-model="place"
        placeholder="点击选择教学点"
        @change="handleChange"
      >
        <el-option
          v-for="item in places"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
  import useSetTableData from '~/hooks/set-table-data';
  import { usePlanStore } from '~/stores/plan';

  const place = ref('');
  const places = [
    { label: '全省', value: '' },
    { label: '杭州', value: '杭州' },
    { label: '宁波', value: '宁波' },
    { label: '温州', value: '温州' },
    { label: '嘉兴', value: '嘉兴' },
    { label: '湖州', value: '湖州' },
    { label: '绍兴', value: '绍兴' },
    { label: '金华', value: '金华' },
    { label: '衢州', value: '衢州' },
    { label: '舟山', value: '舟山' },
    { label: '台州', value: '台州' },
    { label: '丽水', value: '丽水' },
  ];

  const store = usePlanStore();

  const handleChange = async (val: string) => {
    store.place = val;
    await useSetTableData();
  };
</script>

<style scoped></style>
