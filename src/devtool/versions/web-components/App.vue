<template>
  <div>
    <app-element ref="appEl" @count-changed="onClick" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { AppElement } from '@/player/versions/web-components/components/app-element';

const onClick = (event: Event) => {
  console.log(event);
};

const appEl = ref<AppElement>();
</script>

