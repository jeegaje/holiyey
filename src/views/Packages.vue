<template>
  <div >
    <Navbar />
    <div class="container mx-auto py-5">
      <p>
        <a href="/products">&#60; &nbsp; Travel Agent </a>
        / 
        <router-link :to="'/products/'+$route.params.travelagent"><span class="">{{$route.params.travelagent}}</span></router-link>
        / 
        <span class="font-bold">Paket Travel</span></p>
      <div v-if="packages.msg" class="text-center text-gray-400 text-2xl font-bold py-20">
        {{ packages.msg }}
      </div>
      <div v-else >
        <div v-for="paket in packages" :key="paket">
          <CardPackage :paket="paket"/>
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
import CardPackage from '@/components/CardPackage.vue'
import axios from 'axios'

export default {
  name: 'Packages',
  components: {
    Navbar,
    Footer,
    CardPackage
  },
  data() {
    return{
      packages: []
    }
  },
  methods: {
    setPackage(data){
      this.packages = data
    }
  },
  mounted() {
    axios.get('http://127.0.0.1:5000/api/packages/'+this.$route.params.idpackages)
      .then((response) => this.setPackage(response.data))
      .catch((error) => console.log(error))
  }
}
</script>
