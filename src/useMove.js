import { useEventListener, useThrottleFn } from "@vueuse/core";

export function useMove(svgRef, x, y) {
  // 移动元素
  const handleMove = (event) => {
    event.stopPropagation();

    if (svgRef.value) {
      let initialX = x.value; // 初始坐标
      let initialY = y.value; // 初始坐标

      let startX = 0; // 鼠标按下时的坐标
      let startY = 0; // 鼠标按下时的坐标

      startX = event.clientX;
      startY = event.clientY;

      const onMouseMove = useThrottleFn((evt) => {
        evt.preventDefault();

        const { clientX, clientY } = evt;
        const movedX = clientX - startX;
        const movedY = clientY - startY;

        x.value = initialX - movedX;
        y.value = initialY - movedY;
      }, 10);

      const onMouseUp = () => {
        initialX = 0;
        initialY = 0;
        startX = 0;
        startY = 0;

        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    }
  };

  useEventListener(svgRef, "mousedown", handleMove);
}
