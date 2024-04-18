<script setup lang="ts">
import { CocktailCard, useCocktailModel } from '@/entities/cocktail';

const cocktailModel = useCocktailModel();

const cocktails = computed(() => {
  return cocktailModel.cocktails || [];
});
</script>

<template>
  <div class="list-wrapper">
    <CocktailCard
      v-for="(cocktail, index) in cocktails"
      :key="index"
      :data="cocktail"
      class="cocktail-card"
    />
  </div>
</template>

<style scoped>
.cocktail-card {
  margin-bottom: 12px;
}
</style>
