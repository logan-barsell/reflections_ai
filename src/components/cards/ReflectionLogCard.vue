<template>
  <div class="relative my-reflectionCardy max-w-reflection w-full mx-auto">
    <!-- Top Left: Time -->
    <p class="absolute -top-reflectionLabelOffset left-0 text-h3">
      {{ formatTime(reflection.timestamp) }}
    </p>

    <!-- Top Right: Mood Label (non-clickable) -->
    <div class="absolute -top-moodTagOffset right-0">
      <div
        class="flex items-center h-[38px] px-[10px] text-bodyMed bg-transparent cursor-default select-none"
      >
        <span class="mr-2 text-lg">{{ mood.emoji }}</span>
        <span>{{ mood.label }}</span>
      </div>
    </div>

    <!-- Card Body -->
    <div
      class="rounded-[12px] bg-primary p-reflectionPadding pt-reflectionPaddingTop"
    >
      <!-- Category Title -->
      <p class="text-bodyBold text-center">
        {{ capitalize(reflection.category) }}
      </p>

      <!-- Spacer -->
      <div class="mt-[4px]" />

      <!-- Reflection Text -->
      <p class="text-bodyReg whitespace-pre-line">
        {{ reflection.text }}
      </p>
    </div>

    <!-- Bottom Left: Edit / Remove -->
    <div class="absolute left-3 flex gap-[30px]">
      <TextButton
        label="Edit"
        @click="showEditModal = true"
      />
      <TextButton
        label="Remove"
        @click="showRemoveModal = true"
      />
    </div>

    <!-- Remove Modal -->
    <RemoveReflection
      v-if="showRemoveModal"
      :id="reflection.id"
      @close="showRemoveModal = false"
    />

    <!-- Edit Modal -->
    <EditReflection
      v-if="showEditModal"
      :reflection="reflection"
      @close="showEditModal = false"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { RemoveReflection, EditReflection } from '@components/modal/index';
import { TextButton } from '@components/ui/index';
import { moodMap, MoodValue } from '@constants/meta';
import { Reflection } from '@type/Reflection';
import { capitalize, formatTime } from '@utils/index';

const props = defineProps<{ reflection: Reflection }>();

const showRemoveModal = ref(false);
const showEditModal = ref(false);

const mood = computed(() => moodMap[props.reflection.mood as MoodValue]);
</script>
