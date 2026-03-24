<template>
  <svg
    class="m-icon"
    :class="[`m-icon--${name}`]"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <template v-if="name === 'search'">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20L16.65 16.65" />
    </template>
    <template v-else-if="name === 'library'">
      <path d="M4 6.5L12 3L20 6.5L12 10L4 6.5Z" />
      <path d="M6.5 8.8V15.6L12 18L17.5 15.6V8.8" />
      <path d="M12 10V18" />
    </template>
    <template v-else-if="name === 'bell'">
      <path d="M15 17H9" />
      <path d="M18 17H6L7.3 15.1V10.8C7.3 8.2 9.2 6 12 6C14.8 6 16.7 8.2 16.7 10.8V15.1L18 17Z" />
      <path d="M10.5 19C10.9 19.7 11.4 20 12 20C12.6 20 13.1 19.7 13.5 19" />
    </template>
    <template v-else-if="name === 'chevron-down'">
      <path d="M6 9L12 15L18 9" />
    </template>
    <template v-else-if="name === 'sparkles'">
      <path d="M12 4L13.8 8.2L18 10L13.8 11.8L12 16L10.2 11.8L6 10L10.2 8.2L12 4Z" />
      <path d="M18.5 3.5L19 5L20.5 5.5L19 6L18.5 7.5L18 6L16.5 5.5L18 5L18.5 3.5Z" />
      <path d="M5.5 15.5L6.2 17L7.5 17.7L6.2 18.3L5.5 19.8L4.8 18.3L3.5 17.7L4.8 17L5.5 15.5Z" />
    </template>
    <template v-else-if="name === 'rocket'">
      <path d="M14.5 5.5C16.8 5.4 18.6 3.6 18.5 1.5C16.4 1.4 14.6 3.2 14.5 5.5Z" />
      <path d="M14.5 5.5L18.5 9.5L13 15L9 11L14.5 5.5Z" />
      <path d="M9 11L5.5 11.5L3 14L7 15L8.5 19L11 16.5L13 15" />
    </template>
    <template v-else-if="name === 'terminal'">
      <path d="M4.5 5.5H19.5V18.5H4.5V5.5Z" />
      <path d="M8 10L10.5 12L8 14" />
      <path d="M12.5 14H16" />
    </template>
    <template v-else-if="name === 'share'">
      <path d="M8 12C8 10.9 8.9 10 10 10H16.5" />
      <path d="M14.5 7.5L17.5 10.5L14.5 13.5" />
      <path d="M6 6.5H14C15.1 6.5 16 7.4 16 8.5V18C16 19.1 15.1 20 14 20H6C4.9 20 4 19.1 4 18V8.5C4 7.4 4.9 6.5 6 6.5Z" />
    </template>
    <template v-else-if="name === 'graduation'">
      <path d="M3 8.5L12 4L21 8.5L12 13L3 8.5Z" />
      <path d="M7 10.6V14C7 15.6 9.2 17 12 17C14.8 17 17 15.6 17 14V10.6" />
      <path d="M21 8.5V14" />
    </template>
    <template v-else-if="name === 'cpu'">
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M9 1V4" />
      <path d="M15 1V4" />
      <path d="M9 20V23" />
      <path d="M15 20V23" />
      <path d="M20 9H23" />
      <path d="M20 15H23" />
      <path d="M1 9H4" />
      <path d="M1 15H4" />
    </template>
    <template v-else-if="name === 'eye'">
      <path d="M2.5 12C4.7 8.5 8 6.5 12 6.5C16 6.5 19.3 8.5 21.5 12C19.3 15.5 16 17.5 12 17.5C8 17.5 4.7 15.5 2.5 12Z" />
      <circle cx="12" cy="12" r="2.5" />
    </template>
    <template v-else-if="name === 'message'">
      <path d="M5 6.5H19C20.1 6.5 21 7.4 21 8.5V15C21 16.1 20.1 17 19 17H11L7 20V17H5C3.9 17 3 16.1 3 15V8.5C3 7.4 3.9 6.5 5 6.5Z" />
    </template>
    <template v-else-if="name === 'thumb'">
      <path d="M10 10L12.5 4.8C12.8 4.1 13.6 3.8 14.3 4.1C14.9 4.4 15.2 5.1 15 5.8L14.1 10H18C19.1 10 20 10.9 20 12L18.8 18C18.6 19 17.7 19.7 16.7 19.7H10" />
      <path d="M4 10H8V19.7H4V10Z" />
    </template>
    <template v-else-if="name === 'edit'">
      <path d="M4 17.5V20H6.5L17.6 8.9L15.1 6.4L4 17.5Z" />
      <path d="M13.9 7.6L16.4 10.1" />
      <path d="M18.3 4.4C18.9 3.9 19.9 3.9 20.4 4.4C20.9 4.9 20.9 5.9 20.4 6.4L19 7.8L16.5 5.3L18.3 4.4Z" />
    </template>
    <template v-else-if="name === 'folder'">
      <path d="M3.5 7H9L11 9H20.5V18C20.5 19.1 19.6 20 18.5 20H5.5C4.4 20 3.5 19.1 3.5 18V7Z" />
    </template>
    <template v-else-if="name === 'help'">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M9.7 9.4C9.7 8.1 10.8 7 12.2 7C13.6 7 14.7 7.9 14.7 9.2C14.7 10.2 14.2 10.8 13.2 11.4C12.2 12 11.8 12.5 11.8 13.5" />
      <circle cx="12" cy="16.7" r="0.8" fill="currentColor" stroke="none" />
    </template>
    <template v-else-if="name === 'award'">
      <circle cx="12" cy="8.5" r="4.5" />
      <path d="M8.8 12.5L7 20L12 17L17 20L15.2 12.5" />
    </template>
    <template v-else-if="name === 'link'">
      <path d="M9.5 14.5L14.5 9.5" />
      <path d="M7.5 16.5L5.8 18.2C4.6 19.4 2.7 19.4 1.5 18.2C0.3 17 0.3 15.1 1.5 13.9L4.8 10.6C6 9.4 7.9 9.4 9.1 10.6" />
      <path d="M16.5 7.5L18.2 5.8C19.4 4.6 21.3 4.6 22.5 5.8C23.7 7 23.7 8.9 22.5 10.1L19.2 13.4C18 14.6 16.1 14.6 14.9 13.4" />
    </template>
    <template v-else>
      <circle cx="12" cy="12" r="8" />
    </template>
  </svg>
</template>

<script>
export default {
  name: 'MIcon',
  props: {
    name: {
      type: String,
      default: 'circle',
    },
  },
}
</script>

<style scoped lang="scss">
.m-icon {
  width: 1em;
  height: 1em;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style>
