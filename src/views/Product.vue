<template>
  <div >
    <Navbar />
    <div class="container mx-auto px-5 py-10">
      <h1 class="font-extrabold text-4xl pb-16">Daftar <span class="
              bg-clip-text
              text-transparent
              bg-gradient-to-r
              from-green-400
              to-blue-500
              
            ">Travel Agent</span>
      </h1>
    <div class="grid grid-cols-4 gap-10">
      <div v-for="product in products" :key="product">
        <CardProduct :product="product"/>
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
import CardProduct from '@/components/CardProduct.vue'
import axios from 'axios'

export default {
  name: 'Product',
  components: {
    Navbar,
    CardProduct,
    Footer
  },
  data() {
    return{
      products: []
    }
  },
  methods: {
    setProduct(data){
      this.products = data
    }
  },
  mounted() {
    axios.get('http://127.0.0.1:5000/api/products')
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error))
  }
}
</script>
