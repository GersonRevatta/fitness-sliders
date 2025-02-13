<template>
  <div class="content-carousel-products">
    <Carousel
      v-if="elements && elements.length > 0"
      :key="carouselKey"
      :value="elements"
      :numVisible="numVisible"
      :numScroll="numScroll"
      :responsiveOptions="responsiveOptions"
      :autoplayInterval="2500"
      >
      <template #item="slotProps">
        <div class="border-1 surface-border border-round m-2 p-3">
          <div class="mb-3">
            <div class="relative mx-auto flex justify-content-center">
              <Image :src="slotProps.data.image" alt="Image" width="150" preview />
              <Tag value="Stock" class="absolute" style="left:5px; top: 5px" />
            </div>
          </div>
          <div class="mb-3 font-medium">{{ slotProps.data.name }}</div>
          <div class="flex justify-content-between align-items-center">
            <div class="mt-0 font-semibold text-xl">$ 30.00</div>
            <span>
              <Button icon="pi pi-heart" severity="secondary" outlined />
              <Button icon="pi pi-shopping-cart" class="ml-2" />
            </span>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted, watch } from 'vue';
import Carousel from "primevue/carousel";
import Image from 'primevue/image';
import Tag from "primevue/tag";
import Button from "primevue/button";

const props = defineProps({
  elements: Array,
  scenaryId: Number,
});

const numVisible = ref(4);
const numScroll = ref(1);
const carouselKey = ref(Date.now());

onMounted(() => {
  nextTick(() => {
    carouselKey.value = `products-carousel-${props.scenaryId}-${Date.now()}`;
  });
});

const responsiveOptions = ref([
  { breakpoint: "1400px", numVisible: 2, numScroll: 1 },
  { breakpoint: "1199px", numVisible: 3, numScroll: 1 },
  { breakpoint: "767px", numVisible: 2, numScroll: 1 },
  { breakpoint: "575px", numVisible: 1, numScroll: 1 },
]);
</script>
<style>
  .content-carousel-products {
    background-color: blue;
    width: 100%;
    padding: 10px;
  }
</style>
