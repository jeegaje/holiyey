<template>
  <div >
    <Navbar />
    <div class="container mx-auto py-5">
      <p>
        <a href="/products">&#60; &nbsp; Travel Agent </a>
        / 
        <router-link :to="'/products/'+$route.params.travelagent"><span class="">{{$route.params.travelagent}}</span></router-link>
        / 
        <router-link :to="'/products/'+$route.params.travelagent+'/'+$route.params.idpackages"><span class="">Paket Travel</span></router-link>
        /
        <span class="font-bold">Pemesanan</span></p>
      <div class="mb-20">
        <h1 class="text-center text-5xl font-extrabold py-10">Detail Pemesanan</h1>
        <div class="grid grid-cols-3 gap-20 items-center">
          <img class="w-9/12" src="@/assets/travel-agent.png" alt="">
          <div class="">
            <h1 class="text-2xl font-extrabold mb-5">{{ this.$route.params.travelagent }}</h1>
            <h1 class="text-xl">Kode Travel Agent : {{ this.$route.params.idpackages }}</h1>
          </div>
          <div>
            <h1 class="text-3xl font-extrabold mb-5">{{ packages.nama }}</h1>
            <div class="mb-3">
              <h1 class="text-xl font-bold">Kode Paket Travel</h1>
              <h1 class="text-xl">{{ packages.paket_travelagent_id }}</h1>
            </div>
            <div class="mb-3">
              <h1 class="text-xl font-bold">Keterangan</h1>
              <h1 class="text-xl">{{ packages.keterangan }}</h1>
            </div>
            <div class="mb-3">
              <h1 class="text-xl font-bold">Lokasi</h1>
              <h1 class="text-xl">{{ packages.lokasi }}</h1>
            </div>
            <div class="mb-3">
              <h1 class="text-xl font-bold">Harga</h1>
              <h1 class="text-xl font-extrabold">{{ packages.harga }}</h1>
            </div>
          </div>
        </div>
      </div>

      <div>
        <form
        v-on:submit.prevent
        class="
          flex flex-col
          lg:w-full
          w-11/12
          items-center
          bg-white
          border-2 border-green-300
          filter
          drop-shadow-xl
          rounded-lg
          lg:py-10
          py-5
          px-4
        "
      >
        <h1 class="text-center text-5xl font-extrabold pb-10">Konfirmasi Pemesanan</h1>
        <p class="text-xl text-center mb-5">Masukkan Identitas Diri Anda</p>
        <p class="text-xl text-center mb-5">Cek Kembali Data Anda Sebelum Konfirmasi</p>

        <label class="font-bold mb-2">Nama Lengkap</label>
        <input
          v-model="data_booking.nama_lengkap"
          class="
            w-1/2
            mb-4
            border
            focus:outline-none
            focus:ring-2
            focus:ring-green-300
            focus:border-transparent
            rounded-lg
            py-1
          "
        />
        <label class="font-bold mb-2">No. Handphone</label>
        <input
          v-model="data_booking.nomor_handphone"
          class="
            w-1/2
            mb-4
            border
            focus:outline-none
            focus:ring-2
            focus:ring-green-300
            focus:border-transparent
            rounded-lg
            py-1
          "
        />
        <label class="font-bold mb-2">Alamat Lengkap</label>
        <textarea
          v-model="data_booking.alamat"
          class="
            w-1/2
            mb-4
            border
            focus:outline-none
            focus:ring-2
            focus:ring-green-300
            focus:border-transparent
            rounded-lg
            py-1
          "
        />
        <label class="font-bold mb-2">Email</label>
        <input
          v-model="data_booking.email"
          class="
            w-1/2
            mb-4
            border
            focus:outline-none
            focus:ring-2
            focus:ring-green-300
            focus:border-transparent
            rounded-lg
            py-1
          "
        />
        <p class="text-red-700 text-center">
          Silahkan Cek Kembali Data Anda! Sebelum Konfirmasi Pesanan
        </p>
        <br>
        <div class="text-center" v-if="message.msg==='Pemesanan berhasi dibuat!'">
          <div class="font-bold text-green-300 text-xl mb-5">
          {{ message.msg }}
          </div>
          <a href="/"><button
          class="
            bg-gradient-to-r
            from-green-400
            to-blue-500
            py-2
            px-5
            mr-5
            rounded-lg
            text-white
            font-semibold
            hover:bg-gray-700
          "
        >
          Kembali
        </button></a>
        </div>
        <div v-else class="text-center">
          <div class="font-bold text-red-700 text-xl mb-5">
          {{ message.msg }}
          </div>
          <button
          @click="booking"
          type="submit"
          class="
            bg-gradient-to-r
            from-green-400
            to-blue-500
            py-2
            px-5
            mr-5
            rounded-lg
            text-white
            font-semibold
            hover:bg-gray-700
          "
        >
          Konfirmasi Pemesanan
        </button>
        
        </div>    
      </form>

      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios'

export default {
  name: 'Pemesanan',
  components: {
    Navbar,
    Footer
  },
  data() {
    return{
      data_booking: {

      },
      packages: {},
      message: {},
    }
  },
  methods: {
    booking(){
      this.data_booking.nama_travelagent = this.$route.params.travelagent,
      this.data_booking.nama_paket = this.packages.nama,
      this.data_booking.keterangan_paket = this.packages.keterangan,
      this.data_booking.lokasi_paket = this.packages.lokasi,
      this.data_booking.harga_paket = this.packages.harga,
      this.data_booking.paket_travelagent_id = this.packages.paket_travelagent_id,
      this.data_booking.travelagent_id = this.$route.params.idpackages

      axios
        .post("http://127.0.0.1:5000/api/booking", this.data_booking)
        .then(
          (response) => (this.message = response.data))
        .catch(
          (error) => console.log(error)) 
    },
    setPackage(data){
      this.packages = data
    }
  },
  mounted() {
    axios.get('http://127.0.0.1:5000/api/package/'+this.$route.params.idpackage)
      .then((response) => this.setPackage(response.data))
      .catch((error) => console.log(error))
  },
}
</script>
