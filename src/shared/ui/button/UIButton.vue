<script setup lang="ts">
const VARIANT_CLASSES = {
  success: 'button-success',
  danger: 'button-error',
};

interface Props {
  variant: 'success' | 'danger';
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'success',
});
const emit = defineEmits(['click']);

const variantClass = computed(() => {
  return VARIANT_CLASSES[props.variant] || '';
});
</script>

<template>
  <button class="pure-button" :class="[variantClass]" @click="emit('click')">
    <slot />
  </button>
</template>

<style scoped>
.button-success,
.button-error {
  color: white;
  border-radius: 4px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}

.button-success {
  background: rgb(28, 184, 65);
}

.button-error {
  background: rgb(202, 60, 60);
}
</style>
