import { useEventListener, useThrottleFn } from '@vueuse/core'
import type { Ref } from 'vue'
import type { IGirdInfo } from '../conf/type'

export function useMove(svgRef: Ref<any>, gridInfo: IGirdInfo, svgZoom: Ref<number>) {
  // 移动元素
  const handleMove = (event: MouseEvent) => {
    event.stopPropagation()

    if (svgRef.value) {
      let initialX = gridInfo.x // 初始坐标
      let initialY = gridInfo.y // 初始坐标

      let startX = 0 // 鼠标按下时的坐标
      let startY = 0 // 鼠标按下时的坐标

      startX = event.clientX
      startY = event.clientY

      const onMouseMove = useThrottleFn((evt) => {
        evt.preventDefault()

        const { clientX, clientY } = evt
        const movedX = clientX - startX
        const movedY = clientY - startY

        gridInfo.x = initialX - movedX / svgZoom.value
        gridInfo.y = initialY - movedY / svgZoom.value
      }, 10)

      const onMouseUp = () => {
        initialX = 0
        initialY = 0
        startX = 0
        startY = 0

        document.removeEventListener('mousemove', onMouseMove)
        document.removeEventListener('mouseup', onMouseUp)
      }

      document.addEventListener('mousemove', onMouseMove)
      document.addEventListener('mouseup', onMouseUp)
    }
  }

  useEventListener(svgRef, 'mousedown', handleMove)
}
