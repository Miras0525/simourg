<script setup lang="ts">
import { useCocktailModel, getActiveMenu } from '@/entities/cocktail';

const cocktailModel = useCocktailModel();

const activeMenu = computed(() => {
  return getActiveMenu(cocktailModel.deleted);
});

const getCocktailHref = (cocktailId: string) => {
  if (activeMenu.value?.[0] === cocktailId) {
    return '/';
  }
  return `/${cocktailId}`;
};

const isActive = (cocktailId: string) => {
  return cocktailModel.activeCocktail === cocktailId;
};
</script>

<template>
  <div class="pure-menu pure-menu-scrollable custom-restricted menu-wrapper">
    <ul class="pure-menu-list">
      <li
        v-for="(cocktailId, index) in activeMenu"
        :key="index"
        class="pure-menu-item"
        :class="{ 'is-active': isActive(cocktailId) }"
      >
        <a :href="getCocktailHref(cocktailId)" class="pure-menu-link">
          {{ cocktailId }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.menu-wrapper {
  border: 1px solid #000;
  border-radius: 6px;
}
.is-active {
  background: #eee;
}
</style>
