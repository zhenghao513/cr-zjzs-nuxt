<template>
  <div>
    <plan-title />
    <div class="plan-content">
      <plan-checkbox />
      <plan-select />
      <plan-search />
      <plan-table />
      <plan-table-pagination v-if="desktop" />
      <plan-table-pagination-mobile v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
  import useClientWidth from '~/hooks/client-width';
  import listMajorInfo from '~/hooks/list-major-info';
  import { usePlanStore } from '~/stores/plan';

  const { clientWidth, isDesktop } = useClientWidth();
  const desktop = computed(() => {
    return clientWidth.value >= 700;
  });

  onMounted(() => {
    isDesktop();
  });

  const store = usePlanStore();
  onBeforeMount(async () => {
    store.hierarchicalCode = [];
    store.studyModeCode = [];
    store.supplementTheNumberOfPlans = -1;
    store.place = '';
    store.keywords = '';
    store.currentPage = 1;
    store.pageSize = 10;
    await listMajorInfo();
  });
</script>

<style scoped>
  .plan-content {
    padding: 25px;
  }
</style>
