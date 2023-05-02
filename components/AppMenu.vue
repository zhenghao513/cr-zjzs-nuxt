<template>
  <client-only>
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      router
    >
      <el-menu-item
        v-for="menuItem in menuItems"
        :key="menuItem.index"
        :index="menuItem.index"
      >
        {{ menuItem.text }}
      </el-menu-item>
    </el-menu>
  </client-only>
</template>

<script lang="ts" setup>
  interface MenuItem {
    text: string;
    index: string;
  }

  const menuItems: MenuItem[] = [
    {
      text: '首页',
      index: '/',
    },
    {
      text: '考生须知',
      index: '/announce',
    },
    {
      text: '报考政策',
      index: '/policy',
    },
    {
      text: '招生计划查询',
      index: '/plan',
    },
    {
      text: '分数线',
      index: '/article',
    },
  ];

  const activeIndex = ref('/');
  const route = useRoute();
  onMounted(() => {
    activeIndex.value = route.path;
  });
</script>

<style scoped>
  .el-menu {
    min-height: 60px;
    max-width: 1500px;
    width: 80vw;
    margin: 0 auto;
    border-bottom: 0;
  }
</style>
