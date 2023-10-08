<template>
  <div>
    <app-player-title text="Web Components player" />
    <button is="app-player-button" :onclick="onClick">
      Запустить видео
    </button>
  </div>
</template>

<script setup lang="ts">
const onClick = () => {
  //
};
</script>

