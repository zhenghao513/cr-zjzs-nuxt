<template>
  <el-form label-width="130px">
    <el-form-item label="报考层次：">
      <el-checkbox
        v-model="checkHierarchicalCodeAll"
        :indeterminate="isIndeterminateHierarchicalCode"
        @change="handleCheckHierarchicalCodeAllChange"
      >
        全选
      </el-checkbox>
      <el-checkbox-group
        v-model="checkedHierarchicalCode"
        @change="handleCheckedHierarchicalCodeChange"
      >
        <el-checkbox
          v-for="dm in hierarchicalCode"
          :key="dm.optionCode"
          :label="dm.optionCode"
        >
          {{ dm.optionName }}
        </el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="学习形式：">
      <el-checkbox
        v-model="checkStudyModeCodeAll"
        :indeterminate="isIndeterminateStudyModeCode"
        @change="handleCheckStudyModeCodeAllChange"
      >
        全选
      </el-checkbox>
      <el-checkbox-group
        v-model="checkedStudyModeCode"
        @change="handleCheckedStudyModeCodeChange"
      >
        <el-checkbox
          v-for="dm in studyModeCode"
          :key="dm.optionCode"
          :label="dm.optionCode"
        >
          {{ dm.optionName }}
        </el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="是否有补报计划：">
      <el-checkbox v-model="checkSupplementTheNumberOfPlans">是</el-checkbox>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
  import { CheckboxValueType } from 'element-plus';
  import { usePlanStore } from '@/stores/plan';

  const store = usePlanStore();
  onMounted(() => {
    store.hierarchicalCode = checkedHierarchicalCode.value;
    store.studyModeCode = checkedStudyModeCode.value;
  });

  interface CodeType {
    optionCode: string;
    optionName: string;
  }

  // 是否有补报计划
  const checkSupplementTheNumberOfPlans = ref(false);
  watch(
    () => checkSupplementTheNumberOfPlans.value,
    (newValue) => {
      store.supplementTheNumberOfPlans = newValue ? 1 : -1;
    },
  );

  // 报考层次
  const checkHierarchicalCodeAll = ref(true);
  const isIndeterminateHierarchicalCode = ref(false);
  const checkedHierarchicalCode = ref(['1', '2', '3']);
  const hierarchicalCode: CodeType[] = [
    {
      optionCode: '1',
      optionName: '专升本',
    },
    {
      optionCode: '2',
      optionName: '高起本',
    },
    {
      optionCode: '3',
      optionName: '专科层次',
    },
  ];
  const handleCheckHierarchicalCodeAllChange = (val: CheckboxValueType) => {
    checkedHierarchicalCode.value = val ? hierarchicalCode.map((item) => item.optionCode) : [];
    isIndeterminateHierarchicalCode.value = false;
    store.hierarchicalCode = checkedHierarchicalCode.value;
  };
  const handleCheckedHierarchicalCodeChange = (value: CheckboxValueType[]) => {
    const checkedCount = value.length;
    checkHierarchicalCodeAll.value = checkedCount === hierarchicalCode.length;
    isIndeterminateHierarchicalCode.value =
      checkedCount > 0 && checkedCount < hierarchicalCode.length;
    store.hierarchicalCode = checkedHierarchicalCode.value;
  };

  // 学习形式
  const checkStudyModeCodeAll = ref(true);
  const isIndeterminateStudyModeCode = ref(false);
  const checkedStudyModeCode = ref(['1', '2', '4']);
  const studyModeCode: CodeType[] = [
    {
      optionCode: '1',
      optionName: '脱产',
    },
    {
      optionCode: '2',
      optionName: '业余',
    },
    {
      optionCode: '4',
      optionName: '函授',
    },
  ];
  const handleCheckStudyModeCodeAllChange = (val: CheckboxValueType) => {
    checkedStudyModeCode.value = val ? studyModeCode.map((item) => item.optionCode) : [];
    isIndeterminateStudyModeCode.value = false;
    store.studyModeCode = checkedStudyModeCode.value;
  };
  const handleCheckedStudyModeCodeChange = (value: CheckboxValueType[]) => {
    const checkedCount = value.length;
    checkStudyModeCodeAll.value = checkedCount === studyModeCode.length;
    isIndeterminateStudyModeCode.value = checkedCount > 0 && checkedCount < studyModeCode.length;
    store.studyModeCode = checkedStudyModeCode.value;
  };
</script>

<style scoped>
  .el-checkbox {
    margin-right: 30px;
  }
</style>
