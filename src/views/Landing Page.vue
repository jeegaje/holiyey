<template>
  <div>
    <Navbar />
    <Jumbotron />
    <div class="container mx-auto py-16">
      <div class="">
        <TextLarge text="Berjelajah Bebas" className="font-bold text-center mb-5 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"/>
        <TextLarge text="di Seluruh Daerah Indonesia" className="font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"/>
      </div>
      <div class="flex flex-col lg:flex-row justify-between items-center py-16">
        <p class="lg:w-1/2 text-xl text-center lg:text-left lg:mb-0 mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, nam doloremque odit impedit alias sed vel voluptas fugit illum laudantium quam minus excepturi molestiae sequi tempora dolor velit error consequuntur?
        </p>
        <div class="flex items-center justify-around">
          <div class="bg-gray-400 rounded-full w-9 h-9 p-5"></div>
          <div class="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex flex-col lg:w-full mx-5">
            <img class="object-cover w-full rounded-lg" src="@/assets/card-image.jpg" alt="" style="height: 250px;">
            <h1 class="text-2xl font-bold py-5 text-white text-center">Yogyakarta</h1>
          </div>
          <div class="bg-gray-400 rounded-full w-9 h-9 p-5"></div>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div class="container mx-auto py-20">
        <div class="flex flex-col lg:flex-row items-center justify-between">
          <div class="lg:w-1/2">
            <TextLarge text="Ditemani dengan" className="font-bold mb-5 text-white text-center lg:text-left"/>
            <TextLarge text="Travel Agent Terpercaya" className="font-bold mb-16 text-white text-center lg:text-left"/>
            <p class="text-xl text-white text-center lg:text-left mb-10 lg:mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, nam doloremque odit impedit alias sed vel voluptas fugit illum laudantium quam minus excepturi molestiae sequi tempora dolor velit error consequuntur?
            </p>
          </div>
          <div class="grid grid-cols-3 gap-8 lg:w-5/12 w-11/12">
            <img class="object-cover w-full rounded-lg" src="@/assets/travel-agent.png" alt="">
            <img class="object-cover w-full rounded-lg" src="@/assets/travel-agent.png" alt="">
            <img class="object-cover w-full rounded-lg" src="@/assets/travel-agent.png" alt="">
            <img class="object-cover w-full rounded-lg" src="@/assets/travel-agent.png" alt="">
            <img class="object-cover w-full rounded-lg" src="@/assets/travel-agent.png" alt="">
            <img class="object-cover w-full rounded-lg" src="@/assets/travel-agent.png" alt="">
            <img class="object-cover w-full rounded-lg" src="@/assets/travel-agent.png" alt="">
            <img class="object-cover w-full rounded-lg" src="@/assets/travel-agent.png" alt="">
            <img class="object-cover w-full rounded-lg" src="@/assets/travel-agent.png" alt="">
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto py-20">
      <div class=" mb-20">
        <TextLarge text="Kata Mereka" className="font-bold mb-5 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"/>
        <TextLarge text="Tentang Produk Kami" className="font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"/>
        <div class="bg-gradient-to-r from-green-400 to-blue-500 rounded-full h-7 w-1/3 mx-auto"></div>
      </div>
      
      <div class="flex flex-col lg:flex-row">
        <div class="flex flex-col items-center lg:w-1/4 flex-shrink-0">
          <img class="object-cover w-52 h-52 rounded-full mb-7" src="@/assets/testi.jpg" alt="">
          <div class="">
            <p class="text-center italic mb-5 p-7">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda aspernatur, distinctio cupiditate voluptate mods ipsum omnis sunt vero.</p>
            <p class="text-center font-bold p-3">Ardhito Pramono</p>
          </div>
        </div>
        <div class="flex flex-col items-center lg:w-1/4">
          <img class="object-cover w-52 h-52 rounded-full mb-7" src="@/assets/testi.jpg" alt="">
          <div class="">
            <p class="text-center italic mb-5 p-7">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda aspernatur, distinctio cupiditate voluptate mods ipsum omnis sunt vero.</p>
            <p class="text-center font-bold p-3">Ardhito Pramono</p>
          </div>
        </div>
        <div class="flex flex-col items-center lg:w-1/4">
          <img class="object-cover w-52 h-52 rounded-full mb-7" src="@/assets/testi.jpg" alt="">
          <div class="">
            <p class="text-center italic mb-5 p-7">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda aspernatur, distinctio cupiditate voluptate mods ipsum omnis sunt vero.</p>
            <p class="text-center font-bold p-3">Ardhito Pramono</p>
          </div>
        </div>
        <div class="flex flex-col items-center lg:w-1/4">
          <img class="object-cover w-52 h-52 rounded-full mb-7" src="@/assets/testi.jpg" alt="">
          <div class="">
            <p class="text-center italic mb-5 p-7">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda aspernatur, distinctio cupiditate voluptate mods ipsum omnis sunt vero.</p>
            <p class="text-center font-bold p-3">Ardhito Pramono</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      {{users}}
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Jumbotron from '@/components/Jumbotron.vue'
import TextLarge from '@/components/Text-Large.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    Navbar,
    Jumbotron,
    TextLarge,
    Footer
  },
  data(){
    return {
      users : null,
    }
  },
  mounted () {
    axios
      .get('http://127.0.0.1:5000/api/')
      .then(this.$toast.success('Profile saved.', {
    // optional options Object
}))
  }
}
</script>
