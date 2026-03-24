<template>
  <button class="m-icon-button" type="button" :aria-label="label">
    <slot />
    <span v-if="dot" class="m-icon-button__dot"></span>
  </button>
</template>

<script>
export default {
  name: 'MIconButton',
  props: {
    label: {
      type: String,
      default: 'icon button',
    },
    dot: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped lang="scss">
.m-icon-button {
  position: relative;
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: $m-color-muted;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    color: $m-color-brand;
    background: $m-color-brand-soft;
  }
}

.m-icon-button__dot {
  position: absolute;
  top: 9px;
  right: 9px;
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: $m-color-brand;
  box-shadow: 0 0 0 2px #fff;
}
</style>
