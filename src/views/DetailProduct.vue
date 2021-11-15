<template>
  <div >
    <Navbar />
    <div class="container mx-auto py-5">
      <p><a href="/products">&#60; &nbsp; Travel Agent </a>/<span class="font-bold">{{$route.params.travelagent}}</span></p>
      <div class="grid grid-cols-2 gap-20 items-center">
          <img class="object-cover rounded-lg w-9/12" src="@/assets/travel-agent.png" alt="">
          <div>
            <div class="mb-10">
              <h1 class="text-3xl font-extrabold">{{ products.nama }}</h1>
              <h1>Kode Travel Agent : {{ products.travelagent_id }}</h1>
            </div>
            <div class="mb-5">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur officiis maxime ipsa nemo aspernatur! Soluta eligendi illum adipisci impedit rerum accusamus maxime corrupti saepe recusandae reiciendis, nam id nemo autem.</p>
            </div>
            <div class="mb-5">
              <p class="font-bold">Alamat</p>
              <p>rum, laudantium, non dolorum fugiat quae aspernatur odit architecto labore. Aperiam molestias quas cum sapiente sed consequuntur?</p>
            </div>
            <div class="mb-5">
              <p class="font-bold">Nomor Handphone</p>
              <p>089283191239129</p>
              <p>089283191239129</p>
            </div>
            <div class="mb-5">
              <p class="font-bold">Email</p>
              <p>traveltravel@gmail.com</p>
              <p>traveltravel@gmail.com</p>
            </div>
            <router-link :to="'/products/'+products.nama+'/'+products.travelagent_id"><button class="bg-gradient-to-r from-green-400 to-blue-500  py-2 px-5 rounded-lg text-white font-semibold hover:bg-gray-700">
                  Paket Travel
            </button></router-link>
          </div>        
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
  name: 'DetailProduct',
  components: {
    Navbar,
    Footer
  },
  data() {
    return{
      products: [],
      packages: []
    }
  },
  methods: {
    setProduct(data){
      this.products = data
    },
    setPackage(data){
      this.packages = data
    }
  },
  mounted() {
    axios.get('http://127.0.0.1:5000/api/products/'+this.$route.params.travelagent)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error))
  }
}
</script>
