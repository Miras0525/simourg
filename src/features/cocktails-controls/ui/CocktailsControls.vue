<script setup lang="ts">
import UIButton from '@/shared/ui/button';
import {
  DELETED_STORAGE_NAME,
  useCocktailModel,
  getActiveMenu,
} from '@/entities/cocktail';

const router = useRouter();
const cocktailModel = useCocktailModel();

const activeMenu = computed(() => {
  return getActiveMenu(cocktailModel.deleted);
});

const deletedList = computed(() => {
  return cocktailModel.deleted.join(',');
});

const deleteCocktail = () => {
  const parsedCocktails = JSON.parse(
    localStorage.getItem(DELETED_STORAGE_NAME) || '[]',
  );

  if (!parsedCocktails?.includes(cocktailModel.activeCocktail)) {
    const deleted = [...parsedCocktails, cocktailModel.activeCocktail];

    localStorage.setItem(DELETED_STORAGE_NAME, JSON.stringify(deleted));
    cocktailModel.setDeleted(deleted);

    cocktailModel.fetchCocktails(activeMenu.value[0]);
    router.push({ path: '/' });
  }
};

const resetCocktails = () => {
  localStorage.removeItem(DELETED_STORAGE_NAME);
  cocktailModel.setDeleted([]);

  if (activeMenu.value[0] === cocktailModel.activeCocktail) {
    router.push({ path: '/' });
  } else {
    router.push({
      name: 'Cocktail',
      params: { id: cocktailModel.activeCocktail },
    });
  }
};
</script>

<template>
  <div class="cocktails-controls">
    <UIButton
      v-if="activeMenu.length > 1"
      variant="danger"
      @click="deleteCocktail"
    >
      Удалить коктейл
    </UIButton>

    <div class="deleted-list">Удаленные: {{ deletedList }}</div>
    <UIButton variant="success" @click="resetCocktails">Восстановить</UIButton>
  </div>
</template>

<style scoped>
.cocktails-controls {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
}

.deleted-list {
  margin-top: 16px;
  margin-bottom: 8px;
}
</style>
