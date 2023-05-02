<template>
  <el-container>
    <el-header>
      <div class="header-top">
        <app-header-top />
      </div>
      <div class="header-bottom">
        <app-menu />
      </div>
    </el-header>
    <el-main>
      <div class="main-container">
        <slot></slot>
      </div>
    </el-main>
    <el-footer>
      <app-footer />
    </el-footer>
  </el-container>
  <van-back-top />
</template>

<script setup lang="ts"></script>

<style scoped>
  .el-container {
    min-height: 100vh;
  }

  .el-header {
    height: 156px;
    padding: 0;
  }

  .el-main {
    padding: 20px 0 0;
  }

  .el-footer {
    box-sizing: content-box;
    height: 90px;
    padding: 20px 25px;
    margin-top: 30px;
    background-color: #111e3e;
  }

  .header-top {
    height: 96px;
    background-color: #37f;
  }

  .header-bottom {
    height: 60px;
    background-color: #fff;
  }

  .main-container {
    max-width: 1500px;
    width: 80vw;
    margin: 0 auto;
    background-color: #fff;
  }

  @media screen and (max-width: 912px) {
    .main-container {
      width: 100vw;
    }
  }
</style>
