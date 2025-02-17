<script lang="ts" setup>
  import { ref, watch, watchEffect } from 'vue';
  import type { ISvgNode } from './conf/type';
  import {
    IconAdd,
    IconDelete,
    IconConfig,
    IconEdit,
  } from '@/components/icons/index';

  const props = defineProps<{
    curEditNode?: ISvgNode;
  }>();

  const node = ref<ISvgNode>();

  // 样式相关
  const fillColor = ref('#ffc0cb');
  const strokeColor = ref('#f2cf9b');

  watch(
    () => props.curEditNode,
    (val) => (node.value = val)
  );

  watchEffect(() => {
    if (node.value) {
      const { rect } = node.value.svgInfo;
      strokeColor.value = rect.strokeColor;
      fillColor.value = rect.fillColor;
    }
  });

  const handleChangeStrokeColor = () => {
    if (!node.value) return;
    const { rect } = node.value.svgInfo;
    rect.rect.stroke(strokeColor.value);
  };

  const handleChangeFillColor = () => {
    if (!node.value) return;
    const { rect } = node.value.svgInfo;
    rect.rect.fill(fillColor.value);
    rect.fillColor = fillColor.value;
  };
</script>

<template>
  <section>
    <h1 class="font-semibold">样式相关</h1>
    <ul class="mt-1 mb-2">
      <li class="*hstack">
        <IconEdit class="w-4" />
        <span>边框颜色</span>
        <input
          class="rounded"
          type="color"
          v-model="strokeColor"
          @change="handleChangeStrokeColor"
        />
      </li>

      <li class="*hstack">
        <IconEdit class="w-4" />
        <span>填充颜色</span>
        <input
          class="rounded"
          type="color"
          v-model="fillColor"
          @change="handleChangeFillColor"
        />
      </li>
    </ul>
  </section>
</template>
