<template>
  <div class="footer-container">
    <div>联系电话：0571-96399 地址：杭州市文二路331号 邮编：310012</div>
    <div>技术支持：Zheng Hao</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
  .footer-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90px;
    color: #fff;
  }

  .footer-container * + * {
    margin-top: 0.5em;
  }
</style>
