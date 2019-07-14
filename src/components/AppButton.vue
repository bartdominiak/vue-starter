<template>
  <button class="button">
    <slot />
  </button>
</template>

<style lang="scss">
  .button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    min-width: 48px;
    padding: 0 16px;

    border: 1px solid $blue;
    background: transparent;
    outline: none;

    line-height: 1;
    color: $blue;

    cursor: pointer;
    transition: all .5s;
    text-decoration: none;

    .icon {
      fill: $blue;
      transition: all .5s;
    }

    &:hover,
    &:focus {
      color: $white;
      background: $blue;

      .icon {
        fill: $white;
      }
    }
  }
</style>

