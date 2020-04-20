<template>
  <base-button
    tag="a"
    href="http://github.com/bartdominiak"
    target="_blank"
  >
    click
  </base-button>
</template>

<script>
import BaseButton from '@/components/Atoms/Button/Button.vue'

export default {
  components: {
    BaseButton
  }
}
</script>

<style lang="scss" src="@/assets/styles/global.scss" />
