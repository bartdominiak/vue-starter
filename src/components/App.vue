<template>
  <div>
    <AppButton>
      <AppIcon icon-id="arrow-right" />
    </AppButton>
  </div>
</template>

<script>
import AppIcon from '@/components/AppIcon.vue'
import AppButton from '@/components/AppButton.vue'

export default {
  components: {
    AppIcon,
    AppButton
  }
}
</script>

<style lang="scss" src="@/assets/styles/global.scss" />
