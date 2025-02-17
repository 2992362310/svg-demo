import { ref, reactive, onMounted } from 'vue'
import { useEventListener, useKeyModifier } from '@vueuse/core'
import { Svg } from '@svgdotjs/svg.js'
import { useMove } from './useMove'
import { Point } from '@svgdotjs/svg.js'

export function useInitGrid() {
  const initialGridInfo = {
    x: 0,
    y: 0,
    width: window.innerWidth,
    height: window.innerHeight
  }

  const gridInfo = reactive(initialGridInfo)
  const gridRef = ref<HTMLElement>()
  const gridZoom = ref(1)

  const draw = ref<Svg>(new Svg())

  // @ts-ignore
  const controlState = useKeyModifier('Control', { events: ['mousewheel'] }) // ctrl + wheel 缩放

  onMounted(() => {
    initSvg()
  })

  const initSvg = () => {
    if (gridRef.value) {
      // console.log('initSvg--svg', Svg)

      // @ts-ignore
      draw.value = new Svg(gridRef.value)
    }
  }

  const updateViewBox = () => {
    // console.log("updateViewBox");
    gridInfo.width = window.innerWidth
    gridInfo.height = window.innerHeight
  }

  // 上下滚动
  const onMouseWheel = (event: WheelEvent) => {
    event.preventDefault()

    if (controlState.value) {
      handleZoom(event)
    } else {
      const { deltaY } = event
      gridInfo.y += deltaY
    }
  }

  const handleZoom = (event: WheelEvent) => {
    if (!draw.value) return

    const { deltaY, clientX, clientY } = event
    const zoom = gridZoom.value + +(-deltaY / 1000).toFixed(1)

    if (zoom > 0.3 && zoom < 3) {
      const point = new Point(clientX, clientY)
      draw.value.zoom(zoom, point)

      const { x, y, width, height } = draw.value.viewbox()
      gridInfo.x = x
      gridInfo.y = y
      gridInfo.width = width
      gridInfo.height = height
    }

    gridZoom.value = zoom < 0.3 ? 0.3 : zoom > 3 ? 3 : zoom
  }

  useEventListener(window, 'resize', updateViewBox) // 格网自适应

  useEventListener(gridRef, 'mousewheel', onMouseWheel) // 鼠标滚轮

  useMove(gridRef, gridInfo, gridZoom) // 鼠标拖动格网

  return {
    gridRef,
    gridInfo,
    gridZoom,
    draw
  }
}
