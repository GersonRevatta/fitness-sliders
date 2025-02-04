<template>
  <div class="card">
    <Carousel :value="products" :numVisible="numVisible" :numScroll="numScroll" :responsiveOptions="responsiveOptions" circular>
        <template #item="{ data: product  } = item">
            <div class="border border-surface-200 dark:border-surface-700 rounded m-2  p-4">
                <div class="mb-4">
                    <div class="relative mx-auto">
                        <img :src="product.image" :alt="product.name" class="w-full rounded" />
                    </div>
                </div>
                <div class="mb-4 font-medium">{{ product.brand }}</div>
                <div class="mb-4 font-medium">{{ product.name }}</div>
            </div>
        </template>
    </Carousel>
  </div>
</template>

<script>
import { ref } from 'vue';
import Carousel from 'primevue/carousel';

export default {
  name: 'ImageCarousel',
  components: {
    Carousel
  },
  props: {
    products: {
      type: Array,
      required: true
    },
    numVisible: {
      type: Number,
      default: 1
    },
    numScroll: {
      type: Number,
      default: 1
    }
  }
};

const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);
</script>
