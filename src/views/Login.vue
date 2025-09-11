<script setup lang="ts">
import { ref } from 'vue';


interface A {
  name: string
  password: string
} 

const a = ref<A>({
  name: '',
  password: '',
})

</script>

<template>
<div></div>
</template>

