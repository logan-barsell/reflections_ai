<template>
  <div
    class="h-[50vh] flex flex-col justify-center items-center text-text bg-background px-4 text-center"
  >
    <h1 class="sm:text-h1 text-h2Bold mb-4">😕 Page Not Found</h1>
    <p class="text-bodyMed mb-8 max-w-[420px]">
      The page you’re looking for doesn’t exist. Maybe reflect and try again?
    </p>
    <router-link
      to="/"
      class="bg-primary text-background text-bodyBold px-6 py-3 rounded-[12px] hover:opacity-90 transition"
    >
      ← Go Back Home
    </router-link>
  </div>
</template>
