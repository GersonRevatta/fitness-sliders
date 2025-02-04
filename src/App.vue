<template>
  <div class="app-container">
    <div class="flex title mt-7 flex align-items-center justify-content-center">
      <h2 class="text-5xl">Transformación Fitness</h2>
    </div>
    <div class="before-after-section flex align-items-center h-full justify-content-around p-4 pt-0 mt-2">
      <!-- Imagen Antes -->
      <!-- <div class="image-container flex flex-column align-items-center">
        <img :src="beforePhoto" alt="Antes" class="main-image" />
        <p class="image-label text-before text-red-300">Antes</p>
      </div> -->
      <!-- Imagen Después -->
      <!-- <div class="image-container flex flex-column align-items-center">
        <img :src="afterPhoto" alt="Después" class="main-image" />
        <p class="image-label text-after text-green-400">Después</p>
      </div> -->
      <!-- Slider -->
      <div class="image-container flex flex-column align-items-center">
        <ImageCarousel :products="parentPhotos" :numVisible="1" :numScroll="1" />
      </div>
    </div>

    <!-- Sección Productos -->
    <div class="products-section title flex flex-column align-items-center mt-2">
      <h2 class="products-title text-3xl">Productos Consumidos</h2>
      <!-- <TransformationCard :beforePhoto="beforePhoto" :afterPhoto="afterPhoto" :products="products" /> -->
      <ImageCarousel :products="products" :numVisible="3" :numScroll="1" />
    </div>
  </div>
</template>

<script>
import TransformationCard from "./components/TransformationCard.vue";
import ImageCarousel from './components/ImageCarousel.vue';

export default {
  components: {
    TransformationCard,
    ImageCarousel
  },
  data() {
    return {
      parentPhotos: [
        { id: 1, name: "Antes", image: "https://picsum.photos/500/200?random=1" },
        { id: 2, name: "Despues", image: "https://picsum.photos/500/200?random=2" }
      ],
      beforePhoto: "https://picsum.photos/800/800?random=1",
      afterPhoto: "https://picsum.photos/800/800?random=2",
      products: [
        { id: 1, name: "Keratina", brand: "Marca A", image: "https://picsum.photos/300/200?random=2" },
        { id: 2, name: "Proteína", brand: "Marca B", image: "https://picsum.photos/300/200?random=3" },
        { id: 3, name: "Creatina", brand: "Marca C", image: "https://picsum.photos/300/200?random=4" },
        { id: 4, name: "Vitaminas", brand: "Marca D", image: "https://picsum.photos/300/200?random=5" },
      ],
    };
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  background: #f8f9fa;
}

.title {
  color: black;
  font-weight: bold;

  /* position: absolute; */
  /* top: 0;
  left: 50%; /* Posiciona el elemento al 50% del ancho del contenedor */

}

.text-before {
  color: red !important;
}

.text-after {
  color: green !important;
}

.app-container {
  height: 100vh;
  width: 100% !important;
  /* overflow: hidden; */
}

/* Sección Antes y Después */
.before-after-section {
  flex: 1;
  background-color: #f9f9f9;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* padding: 20px; */
}

.image-container {
  text-align: center;
}

.main-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.image-label {
  margin-top: 10px;
  font-weight: bold;
  color: red;
  font-size: 1.2rem;
}

/* Sección Productos */
.products-section {
  flex: 1;
  /* background-color: #ffffff; */
  /* padding: 40px; */
  overflow-y: auto;
}

.products-title {
  margin-bottom: 20px;
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
}
</style>
