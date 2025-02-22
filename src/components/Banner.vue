<script setup>
import Carousel from "primevue/carousel";
import Image from "primevue/image";
import {Banners} from "@/data/banners";
import {ref} from 'vue';

const banners = ref(Banners);

</script>

<template>
  <Carousel :value="banners" :numVisible="1" :numScroll="1" :showThumbnails="false" class="banner" circular :autoplayInterval="3000">
    <template #item="slotProps">
        <div class="relative mx-auto">
          <Image :src="slotProps.data.src" alt="Image" class="slide-img" />
          <div class="banner-text">
            <h2>Puedes ser más</h2>
            <h3>Mucho más!</h3>
          </div>
        </div>
    </template>
  </Carousel>
</template>