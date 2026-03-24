<template>
  <article class="m-post-card">
    <div class="m-post-card__head">
      <div>
        <p class="m-post-card__meta">{{ author }} · {{ meta }}</p>
        <h3 class="m-post-card__title">{{ title }}</h3>
      </div>
      <m-badge tone="neutral">{{ category }}</m-badge>
    </div>
    <p class="m-post-card__excerpt">{{ excerpt }}</p>
    <div class="m-post-card__foot">
      <div class="m-post-card__tags">
        <span v-for="tag in tags" :key="tag">{{ tag }}</span>
      </div>
      <div class="m-post-card__stats">
        <span><m-icon name="eye" /> {{ views }}</span>
        <span><m-icon name="message" /> {{ comments }}</span>
        <span><m-icon name="thumb" /> {{ likes }}</span>
      </div>
    </div>
  </article>
</template>

<script>
import MBadge from './MBadge.vue'
import MIcon from './MIcon.vue'

export default {
  name: 'MPostCard',
  components: {
    MBadge,
    MIcon,
  },
  props: {
    author: String,
    meta: String,
    title: String,
    excerpt: String,
    category: String,
    tags: {
      type: Array,
      default: () => [],
    },
    views: [String, Number],
    comments: [String, Number],
    likes: [String, Number],
  },
}
</script>

<style scoped lang="scss">
.m-post-card {
  @include m-card;

  padding: 28px;
}

.m-post-card__head {
  display: flex;
  justify-content: space-between;
  gap: 16px;
}

.m-post-card__meta {
  margin: 0 0 8px;
  font-size: 0.75rem;
  color: #94a3b8;
}

.m-post-card__title {
  margin: 0;
  font-size: 1.4rem;
  line-height: 1.3;
  font-family: $m-font-display;
  color: $m-color-text;
}

.m-post-card__excerpt {
  margin: 16px 0 18px;
  color: $m-color-muted;
  line-height: 1.8;
}

.m-post-card__foot {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
}

.m-post-card__tags,
.m-post-card__stats {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.m-post-card__tags span {
  padding: 4px 10px;
  border-radius: 999px;
  background: $m-color-bg-alt;
  color: $m-color-muted;
  font-size: 0.75rem;
  font-weight: 500;
}

.m-post-card__stats span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #94a3b8;
  font-size: 0.8125rem;
}
</style>
