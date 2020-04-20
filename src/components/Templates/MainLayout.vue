<template>
  <div class="main-layout">
    <base-header />

    <main class="page-wrapper">
      <slot />
    </main>

    <base-footer />
  </div>
</template>

<script>
import BaseHeader from '@/components/Organisms/Header/Header.vue'
import BaseFooter from '@/components/Organisms/Footer/Footer.vue'

export default {
  components: {
    BaseHeader,
    BaseFooter
  }
}
</script>
