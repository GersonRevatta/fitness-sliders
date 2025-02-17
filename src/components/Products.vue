<script setup>
import {ref, nextTick, onMounted, watch, inject} from 'vue';
import Carousel from "primevue/carousel";
import Image from 'primevue/image';
import Tag from "primevue/tag";
import Button from "primevue/button";
import ConfirmDialog from "primevue/confirmdialog";
import { useConfirm } from 'primevue/useconfirm';

const props = defineProps({
  elements: Array,
  scenaryId: Number,
});

const numVisible = ref(3);
const numScroll = ref(1);
const carouselKey = ref(Date.now());
const dialogRef = inject('dialogRef');
const confirm = useConfirm();
const isVisible = ref(false);

onMounted(() => {
  nextTick(() => {
    carouselKey.value = `products-carousel-${props.scenaryId}-${Date.now()}`;
  });
});

const responsiveOptions = ref([
  {breakpoint: "1400px", numVisible: 2, numScroll: 1},
  //{ breakpoint: "1199px", numVisible: 3, numScroll: 1 },
  {breakpoint: "767px", numVisible: 1, numScroll: 1},
  //{ breakpoint: "575px", numVisible: 1, numScroll: 1 },
]);

const showProductInfo = (productData) => {
  console.log("Esta es la data: ",productData.name);
 confirm.require({
   message: `${productData.description}`,
   header: `${productData.name}`,
   onShow: () => {
     isVisible.value = true;
   },
   onHide: () => {
     isVisible.value = false;
   },
   footer: false
 })
}

const closeDialog = () => {
  dialogRef.value.close();
}

</script>

<template>
  <div class="">
    <Carousel v-if="elements && elements.length > 0" :key="carouselKey" :value="elements" :numVisible="numVisible"
              :numScroll="numScroll" :responsiveOptions="responsiveOptions">
      <template #item="slotProps">
        <div class="border-1 border-round m-2">
          <div class="relative mx-auto">
            <Image :src="slotProps.data.image" alt="Image" class="slide-img"/>
            <Tag value="Stock" class="absolute" style="left:5px; top: 5px"/>
          </div>
          <div class="flex flex-column justify-content-between p-4">
            <div class="mb-3">
              <p class="m-0 font-bold" @click="showProductInfo(slotProps.data)" style="cursor: pointer">
                {{ slotProps.data.name }}
              </p>
            </div>
            <div class="flex flex-auto flex-wrap justify-content-between align-items-center">
              <p class="m-0 font-semibold text-xl">$ 30.00</p>
              <div>
                <Button icon="pi pi-heart" severity="secondary" outlined/>
                <Button icon="pi pi-shopping-cart" class="ml-2"/>

              </div>
            </div>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>