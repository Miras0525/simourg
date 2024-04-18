<script setup lang="ts">
import CocktailsMenu from '@/features/cocktails-menu';
import CocktailsList from '@/features/cocktails-list';
import { getActiveMenu, useCocktailModel } from '@/entities/cocktail';
import CocktailsControls from '@/features/cocktails-controls';

const cocktailModel = useCocktailModel();

const activeMenu = computed(() => {
  return getActiveMenu(cocktailModel.deleted);
});

onMounted(() => {
  cocktailModel.fetchCocktails(activeMenu.value[0]);
});
</script>

<template>
  <div class="pure-g main-wrapper">
    <div class="pure-u-1-5 pure-u"></div>
    <div class="pure-u-1-5 pure-u">
      <CocktailsMenu />

      <CocktailsControls />
    </div>
    <div class="pure-u-2-5 pure-u">
      <CocktailsList />
    </div>
    <div class="pure-u-1-5 pure-u"></div>
  </div>
</template>

<style scoped>
.main-wrapper {
  margin-top: 120px;
}
</style>
