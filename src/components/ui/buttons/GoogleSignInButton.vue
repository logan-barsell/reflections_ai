<template>
  <div
    ref="googleButton"
    class="w-full"
  ></div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';

const props = defineProps<{
  mode?: 'signin' | 'signup';
}>();

const googleButton = ref<HTMLDivElement | null>(null);

function handleCredentialResponse(response: any) {
  // send `response.credential` to backend to verify JWT
  console.log('Google credential response:', response);
}

const renderGoogleButton = () => {
  if (window.google && googleButton.value) {
    window.google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleCredentialResponse,
    });

    window.google.accounts.id.renderButton(googleButton.value, {
      theme: 'filled_black',
      size: 'large',
      text: props.mode === 'signup' ? 'signup_with' : 'signin_with',
    });
  }
};

// Re-render if `mode` changes dynamically
watch(
  () => props.mode,
  () => {
    if (googleButton.value) {
      googleButton.value.innerHTML = ''; // clear previous button
      renderGoogleButton();
    }
  }
);

onMounted(() => {
  renderGoogleButton();
});
</script>
