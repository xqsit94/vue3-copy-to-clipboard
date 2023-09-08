<script setup lang="ts">
import { defineComponent } from 'vue'
import { useCopyToClipboard } from '../use/useCopyToClipboard.js'

defineComponent({
  name: 'CopyToClipboard',
})

interface Props {
  as?: string
  copy: string
}

const prop = withDefaults(defineProps<Props>(), {
  as: 'button',
})

const emit = defineEmits<{
  (event: 'success'): void
  (event: 'error', error: Error): void
}>()

const copyToClipboard = () => {
  const { copyToClipboard } = useCopyToClipboard()
  try {
    copyToClipboard(prop.copy)
    emit('success')
  } catch (error) {
    emit('error', error as Error)
  }
}
</script>

<template>
  <component :is="as" @click.prevent="copyToClipboard"><slot /></component>
</template>
