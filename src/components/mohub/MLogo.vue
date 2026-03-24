<template>
  <router-link to="/" class="m-logo" aria-label="mohub 首页">
    <span class="m-logo__wordmark"><span>mo</span>hub</span>
    <span v-if="tagline" class="m-logo__tagline">{{ tagline }}</span>
  </router-link>
</template>

<script>
export default {
  name: 'MLogo',
  props: {
    tagline: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="scss">
.m-logo {
  display: inline-flex;
  flex-direction: column;
  gap: 2px;
}

.m-logo__wordmark {
  font-family: $m-font-display;
  font-size: 1.75rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: $m-color-text;

  span {
    color: $m-color-brand;
  }
}

.m-logo__tagline {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: $m-color-muted;
}
</style>
