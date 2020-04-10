<template>
  <MainLayout>
    <base-button
      tag="a"
      href="http://github.com/bartdominiak"
      target="_blank"
    >
      <GithubIcon class="button__icon" />
    </base-button>
  </MainLayout>
</template>

<script>
import MainLayout from '@/components/Templates/MainLayout.vue'
import BaseButton from '@/components/Atoms/Button/Button.vue'
import GithubIcon from '@/assets/icons/github.svg'

export default {
  components: {
    MainLayout,
    GithubIcon,
    BaseButton
  }
}
</script>

<style lang="scss" src="@/assets/styles/global.scss" />
