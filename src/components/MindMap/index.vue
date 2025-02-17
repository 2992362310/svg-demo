<script setup lang="ts">
  import { ref, watchEffect, computed } from 'vue';
  import { watchDebounced } from '@vueuse/core';
  import { useInitGrid } from './hooks/useInitGrid';
  import { useSvg } from './hooks/useSvg';
  import { ESvgNodeType } from './conf/enum';

  import OprateNode from './OprateNode.vue';
  import LayoutNode from './LayoutNode.vue';
  import LayoutChild from './LayoutChild.vue';
  import StyleNode from './StyleNode.vue';
  import StyleText from './StyleText.vue';
  import StyleLine from './StyleLine.vue';

  const eagleEyeRef = ref<HTMLElement | null>(null);

  // 文本相关
  const content = ref('');

  const { gridRef, gridInfo, draw, gridZoom } = useInitGrid();

  const {
    curEditNode,
    addSubNode,
    addChildNode,
    addSameNode,
    centerToParent,
    deleteNode,
    updatePath,
    alignLeftEdges,
    alignCenterEdges,
    alignRightEdges,
    moveChildren,
    mirrorChildren,
    moveChildrenToRight,
    moveChildrenToLeft,
    toggleChildren,
  } = useSvg({
    draw,
    gridInfo,
    gridZoom,
  });

  watchEffect(() => {
    if (curEditNode.value) {
      content.value = curEditNode.value.svgInfo.text.content;
    } else {
      content.value = '';
    }
  });

  watchDebounced(
    () => curEditNode.value,
    () => {
      // console.log('防抖')
      if (eagleEyeRef.value && gridRef.value) {
        const newNode = gridRef.value.cloneNode(true);
        eagleEyeRef.value.replaceChildren(newNode as HTMLElement);

        // console.log('newNode', newNode)
      }
    },
    { debounce: 1000 * 3, maxWait: 1000 }
  );

  const isRoot = computed(() => curEditNode.value?.type === ESvgNodeType.ROOT);

  const handleEnter = () => {
    // console.log("handleEnter");
    if (!curEditNode.value) return;
    const { text, rect } = curEditNode.value.svgInfo;
    const { size, content: oContent } = text;
    const movementX =
      (content.value.getByteLen() - oContent.getByteLen()) * size;
    const moved = {
      movementX,
      movementY: 0,
    };
    moveChildren({ moved, node: curEditNode.value });

    // 先计算出变化
    text.content = content.value;
    text.text.plain(content.value);
    rect.rect.width((content.value.getByteLen() + 1) * size);

    if (curEditNode.value) {
      updatePath(curEditNode.value);
    }
  };
</script>

<template>
  <div class="relative w-full h-full overflow-hidden select-none">
    <svg
      ref="gridRef"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="Object.values(gridInfo).join(' ')"
    >
      <defs>
        <pattern
          id="gridPattern"
          patternUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="20"
          height="20"
        >
          <path d="M 0 0 L 0 20" stroke="#d1d5db" stroke-width="0.5" />
          <path d="M 0 0 L 20 0" stroke="#d1d5db" stroke-width="0.5" />
        </pattern>
      </defs>

      <rect
        :x="gridInfo.x"
        :y="gridInfo.y"
        :width="gridInfo.width"
        :height="gridInfo.height"
        fill="url(#gridPattern)"
      />
    </svg>

    <div
      class="absolute top-4 left-4 p-4 pb-2 max-h-[80vh] overflow-auto scrollbar-hide bg-gray-300/30"
      v-show="curEditNode"
    >
      <OprateNode
        @addSubNode="addSubNode"
        @addChildNode="addChildNode"
        @addSameNode="addSameNode"
        @deleteNode="deleteNode"
        @centerToParent="centerToParent"
        :isRoot="isRoot"
        :curEditNode="curEditNode"
      />

      <LayoutNode
        @alignLeftEdges="alignLeftEdges"
        @alignCenterEdges="alignCenterEdges"
        @alignRightEdges="alignRightEdges"
        :isRoot="isRoot"
      />

      <LayoutChild
        @mirrorChildren="mirrorChildren"
        @moveChildrenToRight="moveChildrenToRight"
        @moveChildrenToLeft="moveChildrenToLeft"
        @toggleChildren="toggleChildren"
        :curEditNode="curEditNode"
      />

      <StyleNode :curEditNode="curEditNode" />

      <StyleText :curEditNode="curEditNode" :draw="draw" :content="content" />

      <StyleLine :curEditNode="curEditNode" :isRoot="isRoot" />
    </div>

    <input
      type="text"
      placeholder="请输入..."
      class="absolute bottom-4 left-1/2 -translate-x-1/2 text-input"
      style="transform: translateX(-50%)"
      v-model.trim="content"
      v-show="curEditNode"
      @keyup.enter="handleEnter"
      @blur="handleEnter"
    />

    <div
      ref="eagleEyeRef"
      class="absolute bottom-4 right-4 w-[200px] h-[160px] border"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
  .text-input {
    width: 60%;
    font-size: 1.2rem;
    line-height: 2;
    border: 0;
    outline: 0;
    color: #ff0066;
    text-decoration: 4px solid underline;
    text-underline-offset: 10px;
    text-align: center;
    // background: linear-gradient(currentColor, currentColor) center bottom 6px no-repeat;
    // background-size: 10rem 4px;
    background: transparent;

    &:focus {
      text-decoration-color: #ff0066;
      // background-image: linear-gradient(dodgerblue, dodgerblue);
    }
  }
</style>

<style lang="scss">
  .group-class:hover {
    cursor: pointer;
  }
</style>
