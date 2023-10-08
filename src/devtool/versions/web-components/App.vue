<template>
  <div>
    <app-player-title text="Web Components player" />
    <button is="app-player-button" @appclick="onClick">
      Запустить видео
    </button>
    <app-player-timeline>
      <app-player-title text="Контролы плеера" />
    </app-player-timeline>
  </div>
</template>

<script setup lang="ts">
const onClick = (event: Event) => {
  console.log(event);
};
</script>

