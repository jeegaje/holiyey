<template>
  <div class="h-screen">
    <div class="flex flex-col items-center xl:py-23 lg:py-15 md:py-10">
      <a href="/">
        <p>&#60; &nbsp; Kembali</p>
      </a>
      <div class="mb-10">
        <h1
          class="lg:text-6xl md:text-5xl text-4xl text-center font-black py-2"
        >
          <span
            class="
              bg-clip-text
              text-transparent
              bg-gradient-to-r
              from-green-400
              to-blue-500
            "
            >Mulai</span
          >
          Langkahmu
        </h1>
        <h1
          class="lg:text-6xl md:text-5xl text-4xl text-center font-black py-2"
        >
          untuk
          <span
            class="
              bg-clip-text
              text-transparent
              bg-gradient-to-r
              from-green-400
              to-blue-500
            "
            >Berjelajah</span
          >
        </h1>
      </div>
      <form
        v-on:submit.prevent
        class="
          flex flex-col
          lg:w-1/2
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
        <div class="text-center">
          {{ message.msg }}
        </div>
        <h1 class="text-4xl font-extrabold mb-5">Daftar</h1>
        <p class="text-center mb-5">Masukkan Identitas Diri Anda</p>
        <label class="font-bold mb-2">Nama Lengkap</label>
        <input
          v-model="akun.fullName"
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
          v-model="akun.handphone"
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
          v-model="akun.email"
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
        <label class="font-bold mb-2">Password</label>
        <input
          v-model="akun.password"
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
        <label class="font-bold mb-2">Ulangi Password</label>
        <input
          v-model="akun.password2"
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

        <button
          @click="register"
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
          Daftar
        </button>
        <br />
        <p class="text-center">
          Sudah memiliki akun? Silahkan
          <a class="font-bold text-blue-500" href="/login">Masuk</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "Register",
  components: {},
  data() {
    return {
      akun: {},
      message: {},
    };
  },
  methods: {
    register() {
      axios
        .post("http://127.0.0.1:5000/api/register", this.akun)
        .then(
          (response) => (this.message = response.data));
    },
  },
  mounted() {
    if(this.message.msg=="user berhasil dibuat!"){
        this.$router.push({ name: 'Login' })
    }
  }
};
</script>
