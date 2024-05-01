<script setup>
  import { onMounted, ref } from 'vue';
  import { SVG } from '@svgdotjs/svg.js';
  import '@svgdotjs/svg.panzoom.js';
  import '@svgdotjs/svg.draggable.js';
  import { useEventListener, useKeyModifier } from '@vueuse/core';
  import { useMove } from './useMove';
  import IconCommunity from './components/icons/IconCommunity.vue';
  import IconTooling from './components/icons/IconTooling.vue';

  const controlState = useKeyModifier('Control', { events: ['mousewheel'] });

  const editing = ref(false);
  const editingText = defineModel();
  const editX = ref(0);
  const editY = ref(0);
  const inputRef = ref(null);

  const showBtn = ref(true);

  let isMoving = false;

  const svgRef = ref(null);
  let draw = null;
  let text = null;
  let rect = null;
  let zoom = 1;
  const fontSize = 40;

  const x = ref(0);
  const y = ref(0);
  const width = ref(window.innerWidth);
  const height = ref(window.innerHeight);

  onMounted(() => {
    draw = new SVG(svgRef.value);

    const startX = 100;
    const startY = height.value / 2 + 100;
    const endX = 800;
    const endY = 100;

    drawRect(startX, startY);

    drawRect(endX, endY);

    const start = {
      x: startX + 250,
      y: startY + 40,
    };

    const end = {
      x: endX,
      y: endY + 40,
    };

    const centerX = (start.x + end.x) / 2;

    // 曲线
    const svgPath2 = `
    M ${start.x} ${start.y}
    C ${start.x + centerX / 2} ${start.y}
    ${endX - centerX / 3} ${end.y}
    ${end.x} ${end.y}
    `;

    // 直角
    const svgPath1 = `M ${start.x} ${start.y} H ${(start.x + end.x) / 2} V ${
      end.y
    } L ${end.x} ${end.y}`;

    const path = draw.path(svgPath2).fill('none');
    path.stroke({
      color: '#f06',
      width: 4,
      linecap: 'round',
      linejoin: 'round',
    });
  });

  const drawRect = (pX, pY) => {
    const options = {
      x: pX,
      y: pY,
      width: 200,
      height: 100,
    };

    rect = draw.rect(options);
    rect.stroke('#E6A23C').fill('none');

    text = draw.plain('hello world');
    text
      .dx(options.x + fontSize / 2)
      .dy(options.y + fontSize * 1.5)
      .font({ fill: '#f06', family: 'Inconsolata', size: fontSize });

    rect.width(text.length() + fontSize);
    rect.height(fontSize + fontSize);

    // setTimeout(() => {
    //   text.plain("hello world again");
    //   rect.width(text.length() + fontSize);
    // }, 3000);

    var group = draw.group().draggable();
    group.add(rect);
    group.add(text);

    group.on('mousedown', (e) => {
      e.preventDefault();
      isMoving = false;
    });

    group.on('mousemove', (e) => {
      e.preventDefault();
      isMoving = true;
    });

    group.on('mouseup', (e) => {
      // e.preventDefault();
      // e.stopPropagation();

      if (isMoving) return;

      editingText.value = text.node.textContent;
      editing.value = true;
      // text.plain('');

      const { x, y } = text.node.getBoundingClientRect();
      editX.value = x;
      editY.value = y;

      console.log(x, y, zoom);

      setTimeout(() => {
        inputRef.value.focus();
      }, 0);
    });

    group.on('mouseover', (e) => {
      // e.preventDefault();
      // e.stopPropagation();

      rect.fill('#FFC300');
    });

    group.on('mouseout', (e) => {
      e.preventDefault();
      // e.stopPropagation();
      rect.fill('#E6A23C');
    });
  };

  const updateViewBox = () => {
    // console.log("updateViewBox");
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  };

  // 上下滚动
  const onMouseWheel = (event) => {
    event.preventDefault();

    if (controlState.value) {
      handleZoom(event);
    } else {
      const { deltaY } = event;
      y.value += deltaY;
    }
  };

  const handleZoom = (event) => {
    // 0.2 3
    const { deltaY, clientX, clientY } = event;
    zoom += +(-deltaY / 1000).toFixed(1);

    if (zoom > 0.3 && zoom < 3) {
      draw.zoom(zoom, { x: clientX, y: clientY });

      const viewBox = draw.viewbox();
      x.value = viewBox.x;
      y.value = viewBox.y;
      width.value = viewBox.width;
      height.value = viewBox.height;
    }

    zoom = zoom < 0.3 ? 0.3 : zoom > 3 ? 3 : zoom;
  };

  const handleEnter = () => {
    // console.log("handleEnter");
    text.plain(editingText.value);
    rect.width(text.length() + fontSize);
    editing.value = false;
  };

  useEventListener(window, 'resize', updateViewBox);

  useEventListener(svgRef, 'mousewheel', onMouseWheel);

  useMove(svgRef, x, y);
</script>

<template>
  <div class="svg-demo-wrap">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      ref="svgRef"
      class="svg-container"
      :viewBox="`${x} ${y} ${width} ${height}`"
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
        :x="x"
        :y="y"
        :width="width"
        :height="height"
        fill="url(#gridPattern)"
      />
    </svg>

    <label
      :style="{
        left: editX + 'px',
        top: editY + 'px',
        transform: `scale(${zoom})`,
      }"
      v-show="editing"
    >
      <input
        ref="inputRef"
        type="text"
        @keyup.enter="handleEnter"
        @blur="handleEnter"
        v-model="editingText"
      />
    </label>

    <ul class="btn-wrap" v-show="showBtn">
      <IconCommunity />
      <IconTooling />

      <li>配置项</li>

      <li>删除节点,所有子节点一起删除</li>
      <li>添加子节点</li>
      <li>添加同级节点</li>
    </ul>
  </div>
</template>

<style scoped>
  .svg-demo-wrap {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .svg-demo-wrap > label {
    position: absolute;
    transform-origin: 0 0;
  }

  .svg-demo-wrap > label > input {
    padding: 10px;
    border: 1px solid red;
    background-color: white;
    /* opacity: 0.5; */
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
    right: 20px;
    width: 100px;
    height: fit-content;
    background: pink;
  }
</style>
