<template>
  <main-layout>
    <home-page />
  </main-layout>
</template>

<script>
import MainLayout from '@/components/Templates/MainLayout.vue'
import HomePage from '@/components/Pages/HomePage.vue'

export default {
  components: {
    MainLayout,
    HomePage
  }
}
</script>

<style lang="scss" src="@/assets/styles/global.scss" />
