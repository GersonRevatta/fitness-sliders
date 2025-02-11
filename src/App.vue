<template>
  <Carousel :value="scenarios" :numVisible="1" :numScroll="1" circular>
    <template #item="{ data }">
      <Carousel :value="data.parentPhotos" :numVisible="1" :numScroll="1" circular>
        <template #item="{ data: parentPhoto }">
          <h2 class="text-center">{{ parentPhoto.name }}</h2>
          <div class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4">
            <div class="mb-4">
              <div class="relative mx-auto">
                <img :src="parentPhoto.image" :alt="parentPhoto.name" class="w-full rounded" />
              </div>
            </div>
          </div>
        </template>
      </Carousel>
      <Carousel :value="data.products" :numVisible="3" :numScroll="3" circular>
        <template #item="{ data: product }">
          <h2 class="text-center">{{ product.name }}</h2>
          <div class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4">
            <div class="mb-4">
              <div class="relative mx-auto">
                <img :src="product.image" :alt="product.name" class="w-full rounded" />
              </div>
            </div>
          </div>
        </template>
      </Carousel>
    </template>
  </Carousel>
</template>

<script setup>
// import TransformationCard from "./components/TransformationCard.vue";
// import ImageCarousel from './components/ImageCarousel.vue';
import Carousel from 'primevue/carousel';
import { ref, onMounted } from 'vue';

const scenarios = ref([
  {
    parentPhotos: [
      { id: 1, name: "Antes", image: "https://picsum.photos/300/200?random=1" },
      { id: 2, name: "Despues", image: "https://picsum.photos/300/200?random=2" }
    ],
    products: [
      { id: 1, name: "Keratina", brand: "Marca A", image: "https://picsum.photos/300/200?random=2" },
      { id: 2, name: "Proteína", brand: "Marca B", image: "https://picsum.photos/300/200?random=3" },
      { id: 3, name: "Creatina", brand: "Marca C", image: "https://picsum.photos/300/200?random=4" },
      { id: 4, name: "Vitaminas", brand: "Marca D", image: "https://picsum.photos/300/200?random=5" },
      { id: 3, name: "Creatina", brand: "Marca C", image: "https://picsum.photos/300/200?random=6" },
      { id: 4, name: "Vitaminas", brand: "Marca D", image: "https://picsum.photos/300/200?random=7" },
    ],
  },
  {
    parentPhotos: [
      { id: 1, name: "Antes", image: "https://picsum.photos/300/200?random=1" },
      { id: 2, name: "Despues", image: "https://picsum.photos/300/200?random=2" }
    ],
    products: [
      { id: 1, name: "Keratina", brand: "Marca A", image: "https://picsum.photos/300/200?random=2" },
      { id: 2, name: "Proteína", brand: "Marca B", image: "https://picsum.photos/300/200?random=3" },
      { id: 3, name: "Creatina", brand: "Marca C", image: "https://picsum.photos/300/200?random=4" },
      { id: 4, name: "Vitaminas", brand: "Marca D", image: "https://picsum.photos/300/200?random=5" },
      { id: 3, name: "Creatina", brand: "Marca C", image: "https://picsum.photos/300/200?random=6" },
      { id: 4, name: "Vitaminas", brand: "Marca D", image: "https://picsum.photos/300/200?random=7" },
    ],
  },
  {
    parentPhotos: [
      { id: 1, name: "Antes", image: "https://picsum.photos/300/200?random=1" },
      { id: 2, name: "Despues", image: "https://picsum.photos/300/200?random=2" }
    ],
    products: [
      { id: 1, name: "Keratina", brand: "Marca A", image: "https://picsum.photos/300/200?random=2" },
      { id: 2, name: "Proteína", brand: "Marca B", image: "https://picsum.photos/300/200?random=3" },
      { id: 3, name: "Creatina", brand: "Marca C", image: "https://picsum.photos/300/200?random=4" },
      { id: 4, name: "Vitaminas", brand: "Marca D", image: "https://picsum.photos/300/200?random=5" },
      { id: 3, name: "Creatina", brand: "Marca C", image: "https://picsum.photos/300/200?random=6" },
      { id: 4, name: "Vitaminas", brand: "Marca D", image: "https://picsum.photos/300/200?random=7" },
    ],
  }
])
</script>
