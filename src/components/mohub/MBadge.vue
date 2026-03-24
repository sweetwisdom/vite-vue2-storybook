<template>
  <div class="m-badge" :class="[`m-badge--${tone}`]">
    <span v-if="$slots.icon" class="m-badge__icon"><slot name="icon" /></span>
    <span><slot /></span>
  </div>
</template>

<script>
export default {
  name: 'MBadge',
  props: {
    tone: {
      type: String,
      default: 'brand',
    },
  },
}
</script>

<style scoped lang="scss">
.m-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 38px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1px solid transparent;
  font-size: 0.875rem;
  font-weight: 700;
}

.m-badge__icon {
  display: inline-flex;
  font-size: 1rem;
}

.m-badge--brand {
  background: $m-color-brand-soft;
  color: $m-color-brand;
  border-color: rgba(254, 115, 0, 0.12);
}

.m-badge--neutral {
  background: $m-color-bg-alt;
  color: $m-color-muted;
  border-color: $m-color-border;
}
</style>
