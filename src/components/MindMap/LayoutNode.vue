<script lang="ts" setup>
  import { ref } from 'vue';
  import { IconAdd, IconDelete, IconConfig } from '@/components/icons/index';

  defineProps<{
    isRoot: boolean;
  }>();

  const emits = defineEmits([
    'alignLeftEdges',
    'alignCenterEdges',
    'alignRightEdges',
  ]);

  const sameGap = ref(false);
</script>

<template>
  <section>
    <h1 class="font-semibold">同级节点布局相关</h1>
    <ul class="mt-1 mb-2">
      <li class="*hstack" v-show="!isRoot">
        <IconConfig class="w-4" />
        <button
          class="text-gray-500 border hover:text-gray-800"
          @click="emits('alignLeftEdges')"
        >
          同侧左对齐
        </button>
      </li>

      <li class="*hstack" v-show="!isRoot">
        <IconConfig class="w-4" />
        <button
          class="text-gray-500 border hover:text-gray-800"
          @click="emits('alignCenterEdges')"
        >
          同侧居中对齐
        </button>
      </li>

      <li class="*hstack" v-show="!isRoot">
        <IconConfig class="w-4" />
        <button
          class="text-gray-500 border hover:text-gray-800"
          @click="emits('alignRightEdges')"
        >
          同侧右对齐
        </button>
      </li>

      <li class="*hstack" v-show="!isRoot">
        <IconConfig class="w-4" />
        <span>是否等距调整</span>
        <input class="rounded" type="checkbox" v-model="sameGap" />
      </li>
    </ul>
  </section>
</template>
