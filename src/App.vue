<script setup>
  import { ref, watchEffect } from 'vue';

  import { IconCommunity, IconTooling } from './components/icons';

  import { useInitGrid } from './hooks/useInitGrid';
  import { useSvg } from './hooks/useSvg';

  const content = ref('');

  const { gridRef, gridInfo } = useInitGrid();

  const { curEditNode, addSubNode, addSameNode, removeNode, updatePath } =
    useSvg(gridRef, gridInfo);

  watchEffect(() => {
    if (curEditNode.value) {
      content.value = curEditNode.value.content;
    } else {
      content.value = '';
    }
  });

  const handleEnter = () => {
    // console.log("handleEnter");
    curEditNode.value.content = content.value;

    const text = curEditNode.value.group.text;
    const rect = curEditNode.value.group.rect;

    text.plain(content.value);
    rect.width((content.value.length + 1) * 40);

    updatePath();
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

    <ul class="config-wrap" v-show="curEditNode">
      <IconCommunity />
      <IconTooling />

      <li>配置项</li>

      <li>
        <input
          type="text"
          @keyup.enter="handleEnter"
          @blur="handleEnter"
          v-model="content"
        />
      </li>

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

  .svg-demo-wrap > .config-wrap {
    /* list-style: none; */
    padding: 10px 10px 10px 20px;
    position: absolute;
    top: 20px;
    left: 20px;
    width: 200px;
    height: fit-content;
    background: pink;
  }

  .svg-demo-wrap > .config-wrap input {
    padding: 4px;
    width: 160px;
    border: 1px solid red;
    background-color: white;
    font-family: Verdana;
    /* font-size: 20px; */
    white-space: pre;
  }

  .svg-demo-wrap > .config-wrap li {
    margin-bottom: 4px;
  }
</style>
