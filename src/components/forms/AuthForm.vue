<template>
  <div class="w-full sm:max-w-[420px] mx-auto px-4 py-8 space-y-6">
    <h1 class="text-h2Light text-center">
      {{ isLogin ? 'Welcome Back' : 'Create Account' }}
    </h1>

    <form
      @submit.prevent="handleSubmit"
      class="space-y-4 flex flex-wrap justify-center"
    >
      <TextInput
        v-model="email"
        placeholder="Email"
        type="email"
      />
      <TextInput
        v-model="password"
        placeholder="Password"
        type="password"
      />

      <SubmitButton
        color="primary"
        :label="isLogin ? 'Login' : 'Sign Up'"
        :icon="isLogin ? '' : ''"
        :disabled="auth.loading"
        @click="handleSubmit"
      />
    </form>
    <ErrorMessage :error="auth.error || undefined" />

    <div class="text-center text-muted text-label">— or continue with —</div>

    <div class="flex justify-center gap-4 max-w-[200px] mx-auto">
      <GoogleSignInButton :mode="isLogin ? 'signin' : 'signup'" />
    </div>

    <p class="text-label text-center mt-4">
      <span>
        {{ isLogin ? "Don't have an account?" : 'Already have an account?' }}
      </span>
      <button
        class="text-primary font-bold underline ml-2"
        @click="toggleForm"
      >
        {{ isLogin ? 'Sign Up' : 'Login' }}
      </button>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {
  TextInput,
  SubmitButton,
  GoogleSignInButton,
  ErrorMessage,
} from '@components/ui/index';

import { useAuthStore } from '@stores/index';

const router = useRouter();
const auth = useAuthStore();
const isLogin = ref(true);
const email = ref('');
const password = ref('');

const toggleForm = () => {
  auth.error = '';
  isLogin.value = !isLogin.value;
};

const handleSubmit = async () => {
  const credentials = {
    email: email.value,
    password: password.value,
  };

  if (isLogin.value) {
    await auth.login(credentials);
  } else {
    await auth.signup(credentials);
  }
  if (!auth.error) {
    router.push('/reflect');
  }
};
</script>
