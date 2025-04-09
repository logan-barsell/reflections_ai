<template>
  <header class="w-full bg-background pb-4">
    <h1 class="sm:text-h1 text-h2Bold text-center py-6">Reflections AI</h1>

    <!-- Dynamic Nav Layout -->
    <nav class="relative flex justify-between items-center max-w-3xl mx-auto">
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

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import NavItem from './NavItem.vue';

interface NavItemType {
  label: string;
  to: string;
}

const route = useRoute();

const navItems: NavItemType[] = [
  { label: 'Reflect', to: '/reflect' },
  { label: 'Summary', to: '/summary' },
  { label: 'Insights', to: '/insights' },
];

const isActive = (path: string): boolean => route.path === path;

const centerItem = computed<NavItemType>(() => {
  return navItems.find(item => item.to === route.path) || navItems[0];
});

const flankingItems = computed<NavItemType[]>(() => {
  return navItems.filter(item => item.to !== centerItem.value.to);
});

const flankingLeft = computed<NavItemType | undefined>(
  () => flankingItems.value[0]
);
const flankingRight = computed<NavItemType | undefined>(
  () => flankingItems.value[1]
);
</script>
