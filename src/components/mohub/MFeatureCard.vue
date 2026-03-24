<template>
  <article class="m-feature-card">
    <div class="m-feature-card__icon">
      <slot name="icon" />
    </div>
    <h3 class="m-feature-card__title">{{ title }}</h3>
    <p class="m-feature-card__description">{{ description }}</p>
  </article>
</template>

<script>
export default {
  name: 'MFeatureCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="scss">
.m-feature-card {
  @include m-card;
  @include m-hover-lift;

  padding: 32px;
}

.m-feature-card__icon {
  width: 48px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  border-radius: $m-radius-sm;
  background: $m-color-brand-soft;
  color: $m-color-brand;
  font-size: 1.5rem;
}

.m-feature-card__title {
  margin: 0 0 12px;
  font-size: 1.125rem;
  font-weight: 700;
  color: $m-color-text;
}

.m-feature-card__description {
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.75;
  color: $m-color-muted;
}
</style>
