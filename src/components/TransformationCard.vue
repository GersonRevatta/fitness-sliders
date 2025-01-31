<template>
  <div class="products-grid grid w-full px-4 ">
    <!-- Productos -->
    <div
      v-for="product in products"
      :key="product.id"
      class="product-item col-3 mx-2"
    >
      <img :src="product.image" alt="product.name" class="product-image" />
      <div class="product-info">
        <strong>{{ product.name }}</strong>
        <p>{{ product.brand }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.products-grid {
  width: 100%;

  overflow-x: auto; /* Habilita el scroll horizontal */
  scrollbar-width: thin; /* Estiliza la barra de scroll en navegadores compatibles */
  scrollbar-color: #ccc transparent;
  /* display: grid; */
  /* gap: 20px; */
}

.product-item {
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  max-width: 150px;
  height: auto;
  margin-bottom: 10px;
  border-radius: 5px;
  object-fit: cover;
}

.product-info {
  font-size: 0.9rem;
}
</style>
