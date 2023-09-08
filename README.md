<div align="center">
    <h1>Vue 3 Copy To Clipboard</h1>
    <a href="https://github.com/xqsit94/vue3-copy-to-clipboard/blob/main/LICENSE"><img alt="GitHub" src="https://img.shields.io/github/license/xqsit94/gridsome-starter-geek-blog?color=green&logo=github"></a>
    <a href="https://github.com/xqsit94/vue3-copy-to-clipboard/pulls"><img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen"></a>
</div>

## About
 Copy to clipboard component for Vue 3 based on [copy-to-clipboard](https://github.com/sudodoki/copy-to-clipboard)

> Simple module exposing copy function that will try to use execCommand with fallback to IE-specific clipboardData interface and finally, resort to usual prompt with proper text content and message.

>If you are building using Electron, use their API.

## Installation
- npm package
```bash
npm i @xqsit94/vue3-copy-to-clipboard
```
- or using yarn
```bash
yarn add @xqsit94/vue3-copy-to-clipboard
```

## Usage
### Local Component Usage

```vue
<script setup>
import { ref } from 'vue'
// Import as Local component
import { CopyToClipboard } from '@xqsit94/vue3-copy-to-clipboard'

const message = ref('Copy my text')
</script>

<template>
  <CopyToClipboard
    :copy="message"
    class="btn btn-primary"
    >Copy Me!</CopyToClipboard
  >
</template>
```

### Global Component Registeration
```js
import { createApp } from 'vue'
// Import as Global component
import CopyToClipboard from '@xqsit94/vue3-copy-to-clipboard'

const app = createApp(App);

app.use(CopyToClipboard);

app.mount("#app");
```

Basic Usage
```vue
<script setup>
import { ref } from 'vue'

const message = ref('Copy my text')
</script>

<template>
  <CopyToClipboard
    :copy="message"
    class="btn btn-primary"
    >Copy Me!</CopyToClipboard
  >
</template>
```

Advanced Usage
```vue
<script setup>
import { ref } from 'vue'

const message = ref('Copy my text')

const successOnCopy = () => {
  alert('Text copied to clipboard')
}
const errorOnCopy = (error) => {
  console.log(error)
}
</script>

<template>
  <CopyToClipboard
    :copy="message"
    @success="successOnCopy"
    @error="errorOnCopy"
    class="btn btn-primary"
    >Copy Me!</CopyToClipboard
  >
</template>
```

## Usage 2
### Using Composables

Local Composable
```vue
import { $copyToClipboard } from '@xqsit94/vue3-copy-to-clipboard'

<template>
  <button 
    @click="$copyToClipboard('Text to copy!!!')" 
    class="btn btn-primary"
    >
    Copy Me!
  </button>
</template>
```

Global Composable
```js
import { createApp } from 'vue'
import CopyToClipboard from '@xqsit94/vue3-copy-to-clipboard'

const app = createApp(App);

app.use(CopyToClipboard);

app.mount("#app");
```

Local Composable
```vue
<template>
  <button 
    @click="$copyToClipboard('Text to copy!!!')" 
    class="btn btn-primary"
    >
    Copy Me!
  </button>
</template>
```

Try Catch
```vue
<script setup>
import { ref } from 'vue'
import { $copyToClipboard } from '@xqsit94/vue3-copy-to-clipboard'

const message = ref('Copy my text')

const copyText = () => {
  try {
    $copyToClipboard(message)
    alert('Text copied to clipboard')
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <button @click="copyText" class="btn btn-primary">Copy Me!</button>
</template>

```

## Contribution
PRs are always Welcome.

## License
[MIT](./LICENSE)
