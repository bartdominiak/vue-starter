<template>
  <MainLayout>
    <AppLink
      href="http://github.com/bartdominiak"
      target="_blank"
    >
      <AppIcon icon-id="github" />
    </AppLink>
  </MainLayout>
</template>

<script>
import MainLayout from '@/templates/MainLayout.vue';
import AppIcon from '@/components/AppIcon/AppIcon.vue';
import AppLink from '@/components/AppButton/AppLink.vue';

export default {
  components: {
    MainLayout,
    AppIcon,
    AppLink
  }
};
</script>

<style lang="scss" src="@/assets/styles/global.scss" />
