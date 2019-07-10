<template>
  <component class="icon" :is="IconSVG" />
</template>

<script>
export default {
  props: {
    iconId: {
      required: true,
      type: String
    }
  },
  computed: {
    IconSVG() {
      return () => import(`@/assets/icons/${this.iconId}.svg`)
    }
  }
}
</script>

<style lang="scss">
.icon {
  width: 20px;
  height: 20px;
}
</style>
