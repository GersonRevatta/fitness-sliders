<script setup>
import scenarios from "@/data/data.js";
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel/dist/carousel';

const carouselConfig = {
  itemsToShow: 1,
};
const carouselConfig2 = {
  itemsToShow: 3,
};
</script>

<template>
  <div class="w-10 mx-auto">
    <div class="grid pt-2 ">
      <div class="col-12">
        <Carousel v-bind="carouselConfig">

          <Slide v-for="scenario in scenarios" :key="scenario.id">
            <div class="carousel__item">

              <div class="w-8 mx-auto">
                <h2 class="text-center text-3xl">{{ scenario.title }}</h2>
                <Carousel v-bind="carouselConfig" class="mb-5">
                  <Slide v-for="parentPhoto in scenario.parentPhotos" :key="parentPhoto.id">
                    <div class="carousel__item">
                      <img :src="parentPhoto.image" alt="Antes"/>
                      <p class="text-center">{{ parentPhoto.name }}</p>
                    </div>
                  </Slide>
                  <template #addons>
                    <Navigation/>
                    <Pagination/>
                  </template>
                </Carousel>
              </div>

              <div class="w-10 mx-auto">
                <Carousel v-bind="carouselConfig2" class="mb-5">
                  <Slide v-for="product in scenario.products" :key="product.id">
                    <div class="carousel__item">
                      <img :src="product.image" alt="Antes"/>
                      <p class="text-center">{{ product.name }}</p>
                    </div>
                  </Slide>
                  <template #addons>
                    <Navigation/>
                    <Pagination/>
                  </template>
                </Carousel>
              </div>

            </div>
          </Slide>

          <template #addons>
            <Navigation/>
            <Pagination style="bottom: -30px"/>
          </template>

        </Carousel>
      </div>
    </div>
  </div>
</template>

