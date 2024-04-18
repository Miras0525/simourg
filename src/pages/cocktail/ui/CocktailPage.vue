<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import CocktailsMenu from '@/features/cocktails-menu';
import CocktailsList from '@/features/cocktails-list';
import CocktailsControls from '@/features/cocktails-controls';
import { useCocktailModel } from '@/entities/cocktail';

const route = useRoute();
const cocktailModel = useCocktailModel();

onMounted(() => {
  getCocktail();
});

const getCocktail = async () => {
  const { id } = route.params;

  if (typeof id === 'string') {
    await cocktailModel.fetchCocktails(id);
  }
};
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
