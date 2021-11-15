<template>
<div>
    <div class="relative">
      <img class="jumbotron-image object-cover w-full " src="@/assets/jumbotron.jpg" alt="" style="height: 700px;">
      <div class="absolute bottom-32 inset-x-16 flex flex-col items-center lg:items-start">
          <h1 class="md:text-7xl text-6xl font-extrabold mb-6 text-white text-center lg:text-left">Explore</h1>
          <h1 class="md:text-7xl text-6xl font-extrabold mb-6 text-white text-center lg:text-left">Dream Destination</h1>
          <p class="text-xl mb-6 text-white text-center lg:text-left">Jelajahi semua tempat wisata yang ingin kamu kunjungi</p>
          <a href="/products"><button class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-3 w-48 rounded-full text-white font-semibold hover:bg-gray-700 text-lg">
            Jelajahi
          </button></a>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Jumbotron',

}
</script>