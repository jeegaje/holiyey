<template>
  <div class="border-2 border-green-300 p-10 rounded-lg">
    <img class="object-cover w-full rounded-lg" src="@/assets/travel-agent.png" alt="">
    <br>
    <h1 class="text-2xl font-bold">{{ product.nama }}</h1>
    <h1>{{ product.lokasi }}</h1>
    <br>
    <router-link :to="'/products/'+product.nama"><button class="bg-gradient-to-r from-green-400 to-blue-500  py-2 px-5 rounded-lg text-white font-semibold hover:bg-gray-700">
          Jelajahi
    </button></router-link>
  </div>
</template>

<script>
export default {
  name: 'CardProduct',
  props: 
    ['product']
  
}
</script>
