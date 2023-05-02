<template>
  <div>
    <div class="announce-title bold-font">{{ announce.title }}</div>
    <div
      class="announce-content"
      v-html="announce.content"
    ></div>
  </div>
</template>

<script setup lang="ts">
  import useGetDocument from '~/hooks/get-document';

  const { announce, getDocument } = useGetDocument(1);
  onBeforeMount(() => {
    getDocument();
  });
</script>

<style scoped></style>
