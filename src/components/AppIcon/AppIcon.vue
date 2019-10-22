<template>
  <component
    :is="IconSVG"
    class="icon"
  />
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
      return () => import(`@/assets/svg/${this.iconId}.svg`);
    }
  }
};
</script>
