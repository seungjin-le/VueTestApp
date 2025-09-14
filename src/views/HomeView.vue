<script setup lang="ts">
import { useForm } from 'formango'
import { z } from 'zod'


// Create a schema
const exampleForm = z.object({
  name: z.string().min(1),
  email: z.string().email(),
})

// Parse the schema to `useForm` along with a function to handle the submit.
// Optionally, you can also pass an object to prepare the form.
const form = useForm({
  schema: exampleForm,
  initialState: {
    name: 'Foo',
    email: 'foo@mail.com',
  },
  onSubmit: (data) => {
    /* Data type is inferred from the schema, hande your submit logic here.
      Will only get here if the form is fully valid.
      {
        email: string
        name: string
      }
    */
    console.log(values)
  }
})

// Now you can register fields on the form, which are fully typed.
// These fields will handle the actual data-binding
const name = form.register('name')
const email = form.register('email')
</script>

<template>
  <input v-bind="name" />
  <input v-bind="email" />
  <button @click="form.submit">
    Submit
  </button>
</template>