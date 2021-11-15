<template>
  <div class="border-2 border-green-300 p-10 rounded-lg my-7">
    <div class="grid grid-cols-2 gap-20 items-center">
      <div>
        <div class="mb-7">
          <h1 class="text-4xl font-extrabold">{{ paket.nama }}</h1>
          <h1>Kode Paket : {{ paket.paket_travelagent_id }}</h1>
        </div>
        <div class="text-xl mb-5">
          <h1>{{ paket.keterangan }}</h1>
          <h1>{{ paket.lokasi }}</h1>
        </div>
        <div class="text-xl font-bold">
          <h1>Harga : {{ paket.harga }}</h1>
        </div>
      </div>
      <div class="justify-self-center">
        <router-link :to="'/products/'+$route.params.travelagent+'/'+$route.params.idpackages+'/booking/'+this.paket.paket_travelagent_id"><button class="bg-gradient-to-r from-green-400 to-blue-500  py-5 px-16 rounded-lg text-white text-2xl font-bold hover:bg-gray-700">
            Pesan Paket
        </button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardPackage',
  props: 
    ['paket']
  
}
</script>
