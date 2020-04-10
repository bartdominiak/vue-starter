<template>
  <component
    :is="tag"
    :type="tag === 'button' ? type : false"
    class="button"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    /**
    * HTML tag type
    */
    tag: {
      type: String,
      default: 'button'
    },
    /**
    * HTML type
    */
    type: {
      type: String,
      default: 'button'
    }
  }
}
</script>

<style lang="scss" src="./_button.scss" />
