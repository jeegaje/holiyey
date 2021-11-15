<template>
<div>
  <div class="container mx-auto py-10 px-2">
    <div class="flex lg:items-center lg:justify-between flex-col lg:flex-row">
      <div class="flex flex-col lg:flex-row lg:items-center">
        <div class="flex items-center justify-between flex-grow mb-5 lg:mb-0">
          <div class="text-5xl font-extrabold lg:mb-0 mr-0 lg:mr-14">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              HOLIYEY
            </span>
          </div>
          <div>
            <button v-on:click="hello('angga')" class="py-2 px-5 bg-gray-600 text-white font-bold rounded-xl  lg:hidden">
              =
            </button>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row">
          <a href="" class="mb-5 lg:mb-0 mr-5 font-semibold hover:font-extrabold text-lg">Education</a>
          <a href="" class="mb-5 lg:mb-0 mr-5 font-semibold hover:font-extrabold text-lg">Nature</a>
          <a href="" class="mb-5 lg:mb-0 mr-5 font-semibold hover:font-extrabold text-lg">Marine</a>
          <a href="" class="mb-5 lg:mb-0 mr-5 font-semibold hover:font-extrabold text-lg">Halal Tourism</a>
        </div>
      </div>

      <div>
        <a href="/login"><button class="bg-gradient-to-r from-green-400 to-blue-500  py-2 px-5 mr-5 rounded-lg text-white font-semibold hover:bg-gray-700">
          Masuk
        </button></a>
        <a href="/register"><button class="bg-gradient-to-r from-green-400 to-blue-500  py-2 px-5 rounded-lg text-white font-semibold hover:bg-gray-700">
          Daftar
        </button></a>
      </div>
    </div>
    
  </div>
</div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    hello(item) {
      alert("HAI HAI" + item)
    }
  }
}
</script>