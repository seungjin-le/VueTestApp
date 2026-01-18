<script setup lang="ts">
import { useForm } from 'formango';
import z from 'zod';

const schema = z.object({
  email: z.string().min(1),
  password: z.string().min(1),
}); 

type Schema = z.infer<typeof schema>;

const { register, submit } = useForm<Schema>({ schema });

const email = register('email');
const password = register('password');
</script>

<template>
  <div>
    <input type="text" v-bind="email" />
    <input type="text" v-bind="password" />
    <button @click="submit">Test</button>
  </div>
</template>
