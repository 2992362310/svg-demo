import { ref, reactive, onMounted } from 'vue';
import { useEventListener, useKeyModifier } from '@vueuse/core';

import { useMove } from './useMove';

export function useInitGrid() {
  const initialGridInfo = {
    x: 0,
    y: 0,
    width: window.innerWidth,
    height: window.innerHeight,
  };

  const gridInfo = reactive(initialGridInfo);
  const gridRef = ref(null);
  const gridZoom = ref(1);

  const controlState = useKeyModifier('Control', { events: ['mousewheel'] }); // ctrl + wheel 缩放

  const updateViewBox = () => {
    // console.log("updateViewBox");
    gridInfo.width = window.innerWidth;
    gridInfo.height = window.innerHeight;
  };

  // 上下滚动
  const onMouseWheel = (event) => {
    event.preventDefault();

    if (controlState.value) {
      handleZoom(event);
    } else {
      const { deltaY } = event;
      gridInfo.y += deltaY;
    }
  };

  const handleZoom = (event) => {
    // 0.2 3
    const { deltaY, clientX, clientY } = event;
    let zoom = gridZoom.value + +(-deltaY / 1000).toFixed(1);

    if (zoom > 0.3 && zoom < 3) {
      draw.value.zoom(zoom, { x: clientX, y: clientY });

      const { x, y, width, height } = draw.value.viewbox();
      gridInfo.x = x;
      gridInfo.y = y;
      gridInfo.width = width;
      gridInfo.height = height;
    }

    gridZoom.value = zoom < 0.3 ? 0.3 : zoom > 3 ? 3 : zoom;
  };

  useEventListener(window, 'resize', updateViewBox); // 格网自适应

  useEventListener(gridRef, 'mousewheel', onMouseWheel); // 鼠标滚轮

  useMove(gridRef, gridInfo); // 鼠标拖动格网

  return {
    gridRef,
    gridInfo,
    gridZoom,
  };
}
