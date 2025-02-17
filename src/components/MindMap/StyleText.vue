<script lang="ts" setup>
  import { ref, watch, watchEffect } from 'vue';
  import type { ISvgNode } from './conf/type';
  import type { Svg } from '@svgdotjs/svg.js';
  import { HEIGHT_MULTIPLIER } from './conf/config';
  import { moveChildren } from './utils/moveNode';
  import { updatePath } from './utils/path';
  import {
    IconAdd,
    IconDelete,
    IconConfig,
    IconEdit,
  } from '@/components/icons/index';

  const props = defineProps<{
    curEditNode?: ISvgNode;
    draw: Svg;
    content: string;
  }>();

  const node = ref<ISvgNode>();
  const textColor = ref('#ff0066');
  const textSize = ref(20);

  watch(
    () => props.curEditNode,
    (val) => (node.value = val)
  );

  watchEffect(() => {
    if (node.value) {
      const { text } = node.value.svgInfo;
      textColor.value = text.color;
      textSize.value = text.size;
    }
  });

  const handleChangeTextColor = () => {
    if (!node.value) return;
    const { text } = node.value.svgInfo.text;
    text.fill(textColor.value);
  };

  const handleChangeTextSize = () => {
    if (!node.value) return;
    const { text, rect, group } = node.value.svgInfo;
    const { x, y } = group;
    const { size } = text;

    text.text.remove();

    const newText = props.draw.plain(props.content);
    newText.dx(x + textSize.value * 0.5);
    newText.dy(y + textSize.value * 1.25);
    newText.font({ fill: '#f06', family: 'Inconsolata', size: textSize.value });

    group.group.add(newText);
    text.text = newText;

    // 要改变布局了
    const len = props.content.getByteLen();
    const newWidth = (len + 1) * textSize.value;

    rect.rect.width(newWidth);
    rect.rect.height(textSize.value * HEIGHT_MULTIPLIER);

    const movementX = len * (textSize.value - size);
    const moved = {
      movementX,
      movementY: 0,
    };
    moveChildren({ moved, node: node.value });

    text.size = textSize.value;

    if (node.value) {
      updatePath(node.value);
    }
  };
</script>

<template>
  <section>
    <h1 class="font-semibold">文本相关</h1>
    <ul class="mt-1 mb-2">
      <li class="*hstack">
        <IconEdit class="w-4" />
        <span>文本颜色</span>
        <input
          type="color"
          class="rounded"
          v-model="textColor"
          @change="handleChangeTextColor"
        />
      </li>
      <li class="*hstack">
        <IconEdit class="w-4" />
        <span>文本大小</span>
        <input
          type="range"
          min="10"
          max="40"
          v-model="textSize"
          @change="handleChangeTextSize"
        />
      </li>
    </ul>
  </section>
</template>
