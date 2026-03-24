<template>
  <div class="m-stat-card">
    <div class="m-stat-card__value">{{ value }}</div>
    <div class="m-stat-card__label">{{ label }}</div>
  </div>
</template>

<script>
export default {
  name: 'MStatCard',
  props: {
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.m-stat-card__value {
  font-family: $m-font-display;
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: $m-color-text;
}

.m-stat-card__label {
  margin-top: 4px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #94a3b8;
}
</style>
