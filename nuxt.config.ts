// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@element-plus/nuxt', '@pinia/nuxt', '@vant/nuxt'],
  css: ['@/assets/css/main.css'],
  app: {
    head: {
      title: 'Nuxt - 浙江省成人高考报名',
    },
    baseURL: '/cr-zjzs-nuxt/',
  },
});
