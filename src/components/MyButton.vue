<template>
  <button
    class="my-button"
    :class="[`my-button--${type}`, { 'is-disabled': disabled }]"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script>

export default {
  name: 'MyButton',
  props: {
    type: { type: String, default: 'primary' },
    disabled: { type: Boolean, default: false },
  },
}

</script>

<style lang="scss" scoped>

.my-button {
  padding: 8px 16px;
  border: none;
  border-radius: $border-radius;  // 来自 additionalData 全局注入
  font-size: $font-size-base;
  cursor: pointer;
  color: #fff;

  &--primary { background: $primary; }
  &--danger  { background: $danger; }
  &.is-disabled { opacity: 0.5; cursor: not-allowed; }
}
</style>