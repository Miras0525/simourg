<script setup lang="ts">
import CocktailsMenu from '@/features/cocktails-menu';
</script>

<template>
  <div class="pure-g main-wrapper">
    <div class="pure-u-1-5 pure-u"></div>
    <div class="pure-u-1-5 pure-u">
      <CocktailsMenu />
    </div>
    <div class="pure-u-2-5 pure-u">
      <h2>Страница не найдена. Попробуйте навигацию через меню</h2>
    </div>
    <div class="pure-u-1-5 pure-u"></div>
  </div>
</template>

<style scoped>
.main-wrapper {
  margin-top: 120px;
}
</style>
