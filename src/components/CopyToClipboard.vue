<script setup lang="ts">
import { defineComponent, defineProps } from 'vue'
import { useCopyToClipboard } from '../use/useCopyToClipboard.js'
defineComponent({
  name: 'CopyToClipboard',
})
const prop = defineProps({
  as: {
    required: false,
    type: String,
    default: 'button',
  },
  copy: {
    required: true,
    type: String,
  },
})
const emit = defineEmits(['success', 'error'])
const copyToClipboard = () => {
  const { copyToClipboard } = useCopyToClipboard()
  try {
    copyToClipboard(prop.copy)
    emit('success')
  } catch (error) {
    emit('error', error)
  }
}
</script>

<template>
  <component :is="as" @click.prevent="copyToClipboard"><slot /></component>
</template>
