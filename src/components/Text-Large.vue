<template>
  <div>
    <h1 class="md:text-6xl text-5xl font-extrabold">
        {{ text }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'TextLarge',
  props: {
    text: String
  }
}
</script>
