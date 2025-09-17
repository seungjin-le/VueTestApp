<script setup lang="ts">
import { formatErrorsToZodFormattedError, useForm, type Field } from 'formango';
import { computed, ref, watch, watchEffect } from 'vue';
import z, { type ZodFormattedError } from 'zod';


const test2 = z.object({
  email: z.string().min(1),
  password: z.string().min(1),
})

const { register, submit ,state} = useForm({schema:test2,initialState:{ email: '', password: ''},onSubmit: (data) => {
  console.log(data)
}
})






watchEffect(() => {
  console.log(state)

})
</script>

<template>
<div>

<div class="text-white">
</div>
  <input v-bind="register('email').value" true-value="네"
  false-value="아니오"/>
  <input v-bind="register('password').value" true-value="네"
  false-value="아니오"/>
  <button @click="submit">Submit</button>
</div>
</template>

<style scoped>
.text-white {
  color: #fff;
}
</style>
