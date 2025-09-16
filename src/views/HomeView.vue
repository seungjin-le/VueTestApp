<script setup lang="ts">
import { formatErrorsToZodFormattedError, useForm, type Field } from 'formango';
import { computed, ref, watch } from 'vue';
import z, { type ZodFormattedError } from 'zod';

const { register, submit ,state} = useForm({
  schema: z.object({
    email: z.string().min(1),
    password: z.string().min(1),
  }),
  initialState: {
    email: '',
    password: '',
  },
  onSubmit: (data) => {
    console.log(data)
  }
})




function toFormField<TValue, TDefaultValue>(field: Field<TValue, TDefaultValue>): {
  'isTouched': boolean | undefined
  'errors': ZodFormattedError<TValue>
  'modelValue': TDefaultValue extends undefined ? TValue | null : TValue
  'onBlur': () => void
  'onUpdate:modelValue': (value: TValue | null) => void
} {
  return {
    'isTouched': field.isTouched.value,
    'errors': formatErrorsToZodFormattedError(field.errors.value),
    'modelValue': field.modelValue.value,
    'onBlur': field.onBlur,
    'onUpdate:modelValue': field['onUpdate:modelValue'],
  }
}

const test = computed(() => register('email').modelValue.value)
console.log(register('email').modelValue)

watch(() => register('email').modelValue.value, (newVal) => {
  console.log(newVal)
}, { immediate: true, deep: true })
</script>

<template>
<div>

<div class="text-white">
  {{ test }}dd
</div>
  <input v-bind="toFormField(register('email'))" true-value="네"
  false-value="아니오"/>
  <input v-bind="toFormField(register('password'))" true-value="네"
  false-value="아니오"/>
  <button @click="submit">Submit</button>
</div>
</template>

<style scoped>
.text-white {
  color: #fff;
}
</style>
