<template>
  <Carousel :value="scenarios" :key="mainCarouselKey" :numVisible="1" :numScroll="1">
    <template #item="{ data }">
      <Carousel :value="data.parentPhotos" :key="`scenario-${data.id}`" :numVisible="2" :numScroll="1"
        :responsiveOptions="responsiveOptions" :autoplayInterval="2500">
        <template #item="{ data: parentPhoto }">
          <div class="m-2 p-3">
            <h2 class="text-center">{{ parentPhoto.title }}</h2>
            <div class="mb-3">
              <div class="relative mx-auto flex justify-content-center">
                <Image :src="parentPhoto.image" alt="Image" preview />
              </div>
            </div>
            <div class="text-center mb-3 font-medium">{{ parentPhoto.details }}</div>
          </div>
        </template>
      </Carousel>
      <div>
        <Products :elements="data.products" :key="`products-${data.id}`" :scenaryId="data.id" />
      </div>
    </template>
  </Carousel>
</template>

<script setup>
import Products from "@/components/Products.vue";
import Carousel from 'primevue/carousel';
import Image from 'primevue/image';
import '../assets/carousel.css';

import { ref, nextTick } from 'vue';

const mainCarouselKey = ref(0);
const carouselKey = ref(Date.now());


const scenarios = ref([
  {
    id: 1,
    parentPhotos: [
      {
        id: 1,
        title: "Antes",
        image: "https://picsum.photos/300/200?random=1",
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan"
      },
      {
        id: 2,
        title: "Después",
        image: "https://picsum.photos/300/200?random=2",
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem"
      }
    ],
    products: [
      { id: 1, name: "Keratina 1 id-1", brand: "Marca A", image: "https://picsum.photos/300/200?random=2" },
      { id: 2, name: "Proteína 2 id-1", brand: "Marca B", image: "https://picsum.photos/300/200?random=3" },
      { id: 3, name: "Creatina 3 id-1", brand: "Marca C", image: "https://picsum.photos/300/200?random=4" },
      { id: 4, name: "Vitaminas 4 id-1", brand: "Marca D", image: "https://picsum.photos/300/200?random=5" },
      { id: 3, name: "Creatina 5 id-1", brand: "Marca C", image: "https://picsum.photos/300/200?random=6" },
      { id: 4, name: "Vitaminas 6 id-1", brand: "Marca D", image: "https://picsum.photos/300/200?random=7" },
    ],
  },
  {
    id: 2,
    parentPhotos: [
      {
        id: 1,
        title: "Antes",
        image: "https://picsum.photos/300/200?random=1",
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan"
      },
      {
        id: 2,
        title: "Después",
        image: "https://picsum.photos/300/200?random=2",
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem"
      }
    ],
    products: [
      { id: 1, name: "Keratina 1 id-2", brand: "Marca A", image: "https://picsum.photos/300/200?random=2" },
      { id: 2, name: "Proteína 2 id-2", brand: "Marca B", image: "https://picsum.photos/300/200?random=3" },
      { id: 3, name: "Creatina 3 id-2", brand: "Marca C", image: "https://picsum.photos/300/200?random=4" },
      { id: 4, name: "Vitaminas 4 id-2", brand: "Marca D", image: "https://picsum.photos/300/200?random=5" },
      { id: 3, name: "Creatina 5 id-2", brand: "Marca C", image: "https://picsum.photos/300/200?random=6" },
      { id: 4, name: "Vitaminas 6 id-2", brand: "Marca D", image: "https://picsum.photos/300/200?random=7" },
    ],
  },
  {
    id: 3,
    parentPhotos: [
      {
        id: 1,
        title: "Antes",
        image: "https://picsum.photos/300/200?random=1",
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan"
      },
      {
        id: 2,
        title: "Después",
        image: "https://picsum.photos/300/200?random=2",
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem"
      }
    ],
    products: [
      { id: 1, name: "Keratina 1 id-3", brand: "Marca A", image: "https://picsum.photos/300/200?random=2" },
      { id: 2, name: "Proteína 2 id-3", brand: "Marca B", image: "https://picsum.photos/300/200?random=3" },
      { id: 3, name: "Creatina 3 id-3", brand: "Marca C", image: "https://picsum.photos/300/200?random=4" },
      { id: 4, name: "Vitaminas 4 id-3", brand: "Marca D", image: "https://picsum.photos/300/200?random=5" },
      { id: 3, name: "Creatina 5 id-3", brand: "Marca C", image: "https://picsum.photos/300/200?random=6" },
      { id: 4, name: "Vitaminas 6 id-3", brand: "Marca D", image: "https://picsum.photos/300/200?random=7" },
    ],
  }
])

const responsiveOptions = ref([
  {
    breakpoint: '767px',  // Para pantallas grandes
    numVisible: 2,        // Muestra 2 imágenes
    numScroll: 1          // Se desplaza de una en una
  },
  {
    breakpoint: '600px',  // Para pantallas pequeñas
    numVisible: 1,        // Muestra solo 1 imagen
    numScroll: 1          // Se desplaza de una en una
  }
]);
</script>
<style scoped>
.carousel-container {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
