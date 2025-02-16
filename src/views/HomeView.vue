<template>
  <Carousel
    :value="scenarios"
    :key="mainCarouselKey"
    :numVisible="1"
    :numScroll="1"
    >
    <template #item="{ data }">
      <div class="content">
        <div class="grid">
          <div class="col-6" v-for="parentPhoto of data.parentPhotos">
            <div class="content-image flex justify-content-center align-items-center">
              <Image :src="parentPhoto.image" alt="Image" width="350" preview />
            </div>
            <div class="text-center p-3 border-round-sm bg-primary font-bold">
              {{ parentPhoto.details }}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Products 
          :elements="data.products"
          :key="`products-${data.id}`"
          :scenaryId="data.id"
        />
      </div>
    </template>
  </Carousel>
</template>

<script setup>
import Products from "@/components/Products.vue";
import Carousel from 'primevue/carousel';
import Image from 'primevue/image';

import { ref, nextTick, onMounted, watch } from 'vue';

const mainCarouselKey = ref(0);

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
        name: "Después",
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
        name: "Después",
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
        name: "Después",
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
</script>
<style scoped>
.carousel-container {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>