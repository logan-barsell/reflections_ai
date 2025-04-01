<template>
  <header class="w-full bg-background border-b border-border pb-4">
    <h1 class="text-h1 text-text text-center py-6">Reflections AI</h1>

    <!-- Dynamic Nav Layout -->
    <nav
      class="relative flex justify-between items-center max-w-3xl mx-auto px-4"
    >
      <!-- Left Nav Item -->
      <transition
        name="slide-fade-side"
        mode="out-in"
      >
        <div :key="flankingLeft?.to">
          <NavItem
            v-if="flankingLeft"
            :label="flankingLeft.label"
            :to="flankingLeft.to"
            :active="isActive(flankingLeft.to)"
          />
        </div>
      </transition>

      <!-- Center Item -->
      <transition
        name="slide-fade-center"
        mode="out-in"
      >
        <div
          class="absolute left-1/2 -translate-x-1/2"
          :key="centerItem.to"
        >
          <NavItem
            :label="centerItem.label"
            :to="centerItem.to"
            :active="true"
          />
        </div>
      </transition>

      <!-- Right Nav Item -->
      <transition
        name="slide-fade-side"
        mode="out-in"
      >
        <div :key="flankingRight?.to">
          <NavItem
            v-if="flankingRight"
            :label="flankingRight.label"
            :to="flankingRight.to"
            :active="isActive(flankingRight.to)"
          />
        </div>
      </transition>
    </nav>
  </header>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import NavItem from './NavItem.vue';

const route = useRoute();

const navItems = [
  { label: 'Reflect', to: '/reflect' },
  { label: 'Summary', to: '/summary' },
  { label: 'Insights', to: '/insights' },
];

const isActive = path => route.path === path;

const centerItem = computed(() => {
  return navItems.find(item => item.to === route.path) || navItems[0];
});

const flankingItems = computed(() => {
  return navItems.filter(item => item.to !== centerItem.value.to);
});

// Dynamically assign who flanks left/right
const flankingLeft = computed(() => flankingItems.value[0]);
const flankingRight = computed(() => flankingItems.value[1]);
</script>
