<script setup>
import Products from "@/components/Products.vue";
import Carousel from 'primevue/carousel';
import Image from 'primevue/image';
import {Scenarios} from "@/data/scenarios";

import {ref, nextTick} from 'vue';

const mainCarouselKey = ref(0);
const carouselKey = ref(Date.now());

const scenarios = ref(Scenarios);

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

<template>
  <div class="block lg:w-10 xl:w-8 m-auto">
    <Carousel :value="scenarios" :key="mainCarouselKey" :numVisible="1" :numScroll="1">
      <template #item="{ data }">
        <div class="flex flex-auto flex-column md:flex-row flex-wrap">
          <div v-for="parentPhoto in data.parentPhotos" :key="`scenario-${data.id}`" class="col md:col-6">
            <div class="p-2">
              <h2 class="text-center">{{ parentPhoto.title }}</h2>
              <div class="mb-3">
                <div class="relative mx-auto flex justify-content-center">
                  <Image :src="parentPhoto.image" alt="Image" class="w-100" preview/>
                </div>
              </div>
              <div class="text-center mb-3 font-medium">{{ parentPhoto.details }}</div>
            </div>
          </div>
        </div>
        <div>
          <Products :elements="data.products" :key="`products-${data.id}`" :scenaryId="data.id"/>
        </div>
      </template>
    </Carousel>
  </div>
</template>

