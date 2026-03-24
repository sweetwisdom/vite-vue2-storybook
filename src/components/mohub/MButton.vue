<template>
  <component
    :is="tag"
    class="m-button"
    :class="[`m-button--${normalizedVariant}`, `m-button--${size}`, { 'is-block': block }]"
    v-bind="componentAttrs"
    @click="$emit('click', $event)"
  >
    <span v-if="$slots.iconLeft" class="m-button__icon"><slot name="iconLeft" /></span>
    <span class="m-button__label"><slot /></span>
    <span v-if="$slots.iconRight" class="m-button__icon"><slot name="iconRight" /></span>
  </component>
</template>

<script>
export default {
  name: 'MButton',
  props: {
    variant: {
      type: String,
      default: 'primary',
    },
    size: {
      type: String,
      default: 'md',
    },
    block: {
      type: Boolean,
      default: false,
    },
    to: {
      type: [String, Object],
      default: '',
    },
    href: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'button',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    normalizedVariant() {
      if (this.variant === 'secondary') return 'default'
      return this.variant
    },
    tag() {
      if (this.to) return 'router-link'
      if (this.href) return 'a'
      return 'button'
    },
    componentAttrs() {
      if (this.to) return { to: this.to }
      if (this.href) return { href: this.href, target: '_blank', rel: 'noreferrer' }
      return { type: this.type, disabled: this.disabled }
    },
  },
}
</script>

<style scoped lang="scss">
.m-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: $m-radius-xs;
  border: 1px solid $m-color-border;
  padding: 0 20px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
  user-select: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease, opacity 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }
}

.m-button__icon {
  display: inline-flex;
  font-size: 1rem;
}

.m-button--md {
  min-height: 40px;
}

.m-button--lg {
  min-height: 44px;
  padding: 0 24px;
}

.m-button--primary {
  background: $m-color-brand;
  border-color: $m-color-brand;
  color: #fff;

  &:hover {
    background: $m-color-brand-deep;
    border-color: $m-color-brand-deep;
    box-shadow: $m-shadow-lg;
  }
}

.m-button--default {
  background: $m-color-bg;
  color: $m-color-text;
  border-color: $m-color-border;

  &:hover {
    color: $m-color-brand;
    border-color: #ffbf8c;
    background: #fff;
  }
}

.m-button--success {
  background: $m-color-success;
  border-color: $m-color-success;
  color: #fff;

  &:hover {
    background: #0f9f6e;
    border-color: #0f9f6e;
  }
}

.m-button--warning {
  background: $m-color-warning;
  border-color: $m-color-warning;
  color: #fff;

  &:hover {
    background: #df9200;
    border-color: #df9200;
  }
}

.m-button--danger {
  background: #f56c6c;
  border-color: #f56c6c;
  color: #fff;

  &:hover {
    background: #dd6161;
    border-color: #dd6161;
  }
}

.m-button--ghost {
  background: transparent;
  color: $m-color-muted;
  border-color: $m-color-border;

  &:hover {
    color: $m-color-text;
    background: $m-color-bg-alt;
  }
}

.m-button[disabled] {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.is-block {
  width: 100%;
}
</style>
