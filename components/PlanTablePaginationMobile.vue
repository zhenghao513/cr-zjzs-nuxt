<template>
  <client-only>
    <van-pagination
      v-model="currentPage"
      :total-items="store.totalCount"
      :items-per-page="store.currentPage"
      :show-page-size="small ? 3 : 5"
      @change="handleChange"
    >
      <template #prev-text>
        <van-icon
          name="arrow-left"
          v-if="small"
        />
        <span v-else>上一页</span>
      </template>
      <template #next-text>
        <van-icon
          name="arrow"
          v-if="small"
        />
        <span v-else>下一页</span>
      </template>
    </van-pagination>
  </client-only>
</template>

<script setup lang="ts">
  import { usePlanStore } from '@/stores/plan';
  import useClientWidth from '~/hooks/client-width';
  import useSetTableData from '~/hooks/set-table-data';

  const { clientWidth, isDesktop } = useClientWidth();
  const small = computed(() => {
    return clientWidth.value <= 360;
  });
  onMounted(() => {
    isDesktop();
  });

  const store = usePlanStore();
  const currentPage = ref(store.currentPage);
  watch(
    () => store.currentPage,
    (newValue) => {
      currentPage.value = newValue;
    },
  );

  const handleChange = async (val: number) => {
    store.currentPage = val;
    await useSetTableData();
  };
</script>

<style scoped>
  .van-pagination {
    margin-top: 30px;
  }
</style>
