<script setup lang="ts">
import { type ICocktail } from '@/entities/cocktail';

const props = defineProps<{
  data: ICocktail;
}>();

const image = computed((): string | null => props.data?.strDrinkThumb);
const name = computed((): string | null => props.data?.strDrink);
const instructions = computed((): string | null => props.data?.strInstructions);
</script>

<template>
  <div class="card-wrapper">
    <div class="card-info">
      <div class="card-name">{{ name }}</div>
      <div class="card-instructions">{{ instructions }}</div>
    </div>
    <div class="card-image-wrapper">
      <img v-if="image" v-lazy="image" alt="image" class="card-image" />
    </div>
  </div>
</template>

<style scoped>
.card-wrapper {
  border: 1px solid #000;
  border-radius: 6px;
  display: flex;
  justify-content: space-around;
  padding: 16px;
  gap: 16px;
}

.card-info {
  flex: 3;
}

.card-name {
  font-weight: bold;
  margin-bottom: 12px;
  font-size: 20px;
}
.card-instructions {
  margin-bottom: 12px;
}

.card-image-wrapper {
  width: 400px;
  height: 260px;
  flex: 2;
}

.card-image {
  width: 100%;
  height: 100%;
}
</style>
