<script setup>
  import { ref } from 'vue';

  import { IconCommunity, IconTooling } from './components/icons';

  import { useInitGrid } from './hooks/useInitGrid';
  import { useSvg } from './hooks/useSvg';

  const { gridRef, gridInfo, gridZoom } = useInitGrid();

  const { curEditNode, addSubNode, addSameNode, removeNode } = useSvg(
    gridRef,
    gridInfo
  );

  const editing = ref(false);
  const editingText = defineModel();
  const editX = ref(0);
  const editY = ref(0);
  const inputRef = ref(null);

  const handleEnter = () => {
    // console.log("handleEnter");
    // text.plain(editingText.value);
    // rect.width(text.length() + fontSize);
    // editing.value = false;
  };
</script>

<template>
  <div class="svg-demo-wrap">
    <svg
      ref="gridRef"
      class="svg-container"
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
          <path d="M 0 0 L 0 20" stroke="gray" stroke-width="0.5" />
          <path d="M 0 0 L 20 0" stroke="gray" stroke-width="0.5" />
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

    <input
      ref="inputRef"
      type="text"
      :style="{
        left: editX + 'px',
        top: editY + 'px',
        transform: `scale(${gridZoom})`,
      }"
      v-show="editing"
      @keyup.enter="handleEnter"
      @blur="handleEnter"
      v-model="editingText"
    />

    <ul class="btn-wrap" v-show="curEditNode">
      <IconCommunity />
      <IconTooling />

      <li>配置项</li>

      <li>
        <button @click="addSubNode">添加子节点</button>
      </li>
      <li>
        <button @click="addSameNode" v-show="curEditNode?.type !== 'root'">
          添加同级节点
        </button>
      </li>
      <li title="所有子节点将会一起删除">
        <button @click="removeNode" v-show="curEditNode?.type !== 'root'">
          删除节点
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .svg-demo-wrap {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .svg-demo-wrap > input {
    position: absolute;
    transform-origin: 0 0;
    padding: 10px;
    border: 1px solid red;
    background-color: white;
    font-family: Verdana;
    font-size: 20px;
    white-space: pre;
    word-wrap: normal;
    overflow: visible;
    overflow-y: visible;
    overflow-x: visible;
  }

  .svg-demo-wrap > .btn-wrap {
    /* list-style: none; */
    padding: 10px 10px 10px 20px;
    position: absolute;
    top: 20px;
    left: 20px;
    width: 200px;
    height: fit-content;
    background: pink;
  }
</style>
