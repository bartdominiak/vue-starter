<template>
  <base-button
    tag="a"
    href="http://github.com/bartdominiak"
    target="_blank"
  >
    <github-icon class="button__icon" />
  </base-button>
</template>

<script>
import BaseButton from '@/components/Atoms/Button/Button.vue'
import GithubIcon from '@/assets/icons/github.svg'

export default {
  components: {
    GithubIcon,
    BaseButton
  }
}
</script>

<style lang="scss" src="@/assets/styles/global.scss" />
