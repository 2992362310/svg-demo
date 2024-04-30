<script setup>
import { onMounted, ref } from "vue";
import { SVG } from "@svgdotjs/svg.js";
import "@svgdotjs/svg.panzoom.js";
import "@svgdotjs/svg.draggable.js";
import { useEventListener, useKeyModifier } from "@vueuse/core";
import { useMove } from "./useMove";

const controlState = useKeyModifier("Control", { events: ["mousewheel"] });

const editing = ref(false);
const editingText = defineModel();

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

  drawRect();
});

const drawRect = () => {
  const options = {
    x: width.value / 2 - 50,
    y: height.value / 2 - 50,
    width: 200,
    height: 100,
  };

  rect = draw.rect(options);
  rect.stroke("#E6A23C").fill("none");

  text = draw.plain("hello world");
  text
    .dx(options.x + fontSize / 2)
    .dy(options.y + fontSize * 1.5)
    .font({ fill: "#f06", family: "Inconsolata", size: fontSize });

  rect.width(text.length() + fontSize);
  rect.height(fontSize + fontSize);

  // setTimeout(() => {
  //   text.plain("hello world again");
  //   rect.width(text.length() + fontSize);
  // }, 3000);

  var group = draw.group().draggable();
  group.add(rect);
  group.add(text);

  text.on("click", () => {
    editingText.value = text.node.textContent;
    editing.value = true;
    text.plain("");
  });

  text.on("mouseover", (e) => {
    e.preventDefault();
    rect.stroke("#FFC300");
  });

  text.on("mouseout", (e) => {
    e.preventDefault();
    rect.stroke("#E6A23C");
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

  if (zoom > 0.5 && zoom < 3) {
    draw.zoom(zoom, { x: clientX, y: clientY });

    const viewBox = draw.viewbox();
    x.value = viewBox.x;
    y.value = viewBox.y;
    width.value = viewBox.width;
    height.value = viewBox.height;
  }
};

const handleEnter = () => {
  // console.log("handleEnter");
  text.plain(editingText.value);
  rect.width(text.length() + fontSize);
  editing.value = false;
};

useEventListener(window, "resize", updateViewBox);

useEventListener(svgRef, "mousewheel", onMouseWheel);

useMove(svgRef, x, y);
</script>

<template>
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

    <foreignObject
      x="500"
      y="500"
      overflow="visible"
      width="200"
      height="60"
      requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
      v-show="editing"
    >
      <input
        type="text"
        style="
          padding: 10px;
          border: 1px solid red;
          background-color: white;
          opacity: 0.5;
          font-family: Verdana;
          font-size: 20px;
          white-space: pre;
          word-wrap: normal;
          overflow: visible;
          overflow-y: visible;
          overflow-x: visible;
        "
        @keyup.enter="handleEnter"
        contentEditable="true"
        xmlns="http://www.w3.org/1999/xhtml"
        v-model="editingText"
      />
    </foreignObject>
  </svg>
</template>

<style scoped></style>
