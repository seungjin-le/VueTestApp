<script setup lang="ts">
import { useForm } from 'formango';
import { ref } from 'vue';
import z from 'zod';

const { register, submit } = useForm({
  schema: z.object({
    email: z.string().min(1),
    password: z.string().min(1),
  }),
  initialState: {
    email: '',
    password: '',
  },
  onSubmit: (data) => {
    console.log(data);
  },
});
</script>

<template>
  <div>
    <input type="text" />
    <input type="text" v-bind="register('email')" /> <input type="text" v-bind="register('password')" />
  </div>
</template>
