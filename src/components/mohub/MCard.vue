<template>
  <section class="m-card" :class="{ 'm-card--shadow': shadow }">
    <header v-if="title || $slots.header" class="m-card__header">
      <slot name="header">
        <h3 class="m-card__title">{{ title }}</h3>
      </slot>
      <div v-if="$slots.extra" class="m-card__extra">
        <slot name="extra" />
      </div>
    </header>
    <div class="m-card__body">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: 'MCard',
  props: {
    title: {
      type: String,
      default: '',
    },
    shadow: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style scoped lang="scss">
.m-card {
  background: $m-color-bg;
  border: 1px solid $m-color-border;
  border-radius: $m-radius-md;
  overflow: hidden;
}

.m-card--shadow {
  box-shadow: $m-shadow-sm;
}

.m-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 56px;
  padding: 16px 20px;
  border-bottom: 1px solid $m-color-border-soft;
}

.m-card__title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: $m-color-text;
}

.m-card__extra {
  color: $m-color-muted;
  font-size: 14px;
}

.m-card__body {
  padding: 20px;
  color: $m-color-text;
}
</style>
