import { onMounted, ref, shallowRef } from 'vue'
import '@svgdotjs/svg.panzoom.js'
import '@svgdotjs/svg.draggable.js'
import { cloneDeep, uniqueId } from 'lodash-es'
import { watchDebounced } from '@vueuse/core'
import type { IUseSvg, ISvgNode, IMovedParams, ICalcPathNode } from '../conf/type'
import { HEIGHT_MULTIPLIER } from '../conf/config'
import { ESvgNodeType } from '../conf/enum'
import { drawPath, updatePath } from '../utils/path'
import { createMindNode, drawSvgNode, findParentNode } from '../utils/svgNode'

import localForage from 'localforage'
import { moveChildren } from '../utils/moveNode'

export let root: ISvgNode

export function useSvg({ draw, gridInfo, gridZoom }: IUseSvg) {
  // const root = shallowRef<ISvgNode>()

  const curEditNode = ref<ISvgNode>()

  // 移动相关--移动父节点
  const isMoveParent = ref(false)

  // 布局相关
  const sameGap = ref(false)

  // 移动相关--移动子节点
  const sameMove = ref(false)

  // 节点之间的横向间距
  const nodeXGap = (gridInfo.width / 20) * gridZoom.value

  onMounted(() => {
    addRootNode()
    // getMindMap()
  })

  watchDebounced(
    () => curEditNode.value,
    () => {
      // console.log('防抖')
      saveMindMap()
    },
    { debounce: 1000 * 3, maxWait: 1000 }
  )

  const addRootNode = () => {
    if (!draw.value) return

    const id = uniqueId()

    const params = {
      id,
      content: '根节点',
      x: Math.max(400, gridInfo.width / 5),
      y: Math.max(200, gridInfo.height / 4),
      nodeType: ESvgNodeType.ROOT
    }

    const svgInfo = createMindNode({ nodeInfo: params, draw: draw.value }, (val) => {
      if (curEditNode.value && curEditNode.value.id !== val.id) {
        const { rect } = curEditNode.value.svgInfo.rect
        rect.fill('none')
      }
      curEditNode.value = val
    })

    root = {
      id,
      type: ESvgNodeType.ROOT,
      children: [],
      isExpand: true,
      isMoveChildren: false,
      isMoveParent: false,
      svgInfo
    }
  }

  // 新建二级节点
  const addSubNode = (isRight = true) => {
    if (!curEditNode.value) return

    const { children, svgInfo } = curEditNode.value
    const { group, text } = svgInfo
    const { x, y } = group
    const { content, size } = text
    const cType = ESvgNodeType.SUB
    const cContent = '第二级节点'

    let cX
    if (isRight) {
      const pWidth = (content.getByteLen() + 1) * size + nodeXGap
      cX = x + pWidth
    } else {
      const cWidth = (cContent.getByteLen() + 1) * size + nodeXGap
      cX = x - cWidth
    }

    const pEndX = x + (content.getByteLen() + 1) * size
    // 区分是否是根节点，根节点没有 path
    const filterChildern = children.filter((child) => {
      if (isRight) {
        return child.svgInfo.group.x > pEndX
      } else {
        return child.svgInfo.group.x < x
      }
    })
    const sortedChildren = filterChildern.sort((a, b) => a.svgInfo.group.y - b.svgInfo.group.y)

    const sortedLen = sortedChildren.length
    const cY = sortedLen ? sortedChildren[sortedLen - 1].svgInfo.group.y + size * 3 : y

    const id = uniqueId()
    const params = {
      id,
      content: cContent,
      x: cX,
      y: cY,
      nodeType: cType
    }

    const cSvgInfo = createMindNode(
      { nodeInfo: params, draw: draw.value, node: curEditNode.value },
      (val) => {
        if (curEditNode.value && curEditNode.value.id !== val.id) {
          const { rect } = curEditNode.value.svgInfo.rect
          rect.fill('none')
        }
        curEditNode.value = val
      }
    )

    if (!cSvgInfo) return

    const cNode = {
      id,
      type: cType,
      children: [],
      isExpand: true,
      svgInfo: cSvgInfo,
      isMoveParent: false,
      isMoveChildren: false
    }

    curEditNode.value.children.push(cNode)
  }

  // 新建子节点
  const addChildNode = () => {
    if (!curEditNode.value) return

    const { children, svgInfo } = curEditNode.value
    const { group, text, path } = svgInfo
    const { x, y } = group
    const { content, size } = text
    const cType = ESvgNodeType.CHILD
    const cContent = content + '的子节点'

    // 根据连线的 way 判断子节点的位置
    const width = (content.getByteLen() + 1) * size + nodeXGap
    let cX = x + width
    // LR --- 只要与父节点连线在右侧
    const way = path?.way
    if (way && way[1] === 'R') {
      cX = x - width
    }

    // 区分是否是根节点，根节点没有 path
    const filterChildern = way
      ? children.filter((child) => child.svgInfo.path?.way === way)
      : children
    const sortedChildren = filterChildern.sort((a, b) => a.svgInfo.group.y - b.svgInfo.group.y)

    const sortedLen = sortedChildren.length
    const cY = sortedLen ? sortedChildren[sortedLen - 1].svgInfo.group.y + size * 3 : y

    const id = uniqueId()
    const params = {
      id,
      content: cContent,
      x: cX,
      y: cY,
      nodeType: cType
    }

    const cSvgInfo = createMindNode(
      { nodeInfo: params, node: curEditNode.value, draw: draw.value },
      (val) => {
        if (curEditNode.value && curEditNode.value.id !== val.id) {
          const { rect } = curEditNode.value.svgInfo.rect
          rect.fill('none')
        }
        curEditNode.value = val
      }
    )

    const cNode = {
      id,
      type: cType,
      children: [],
      isExpand: true,
      isMoveParent: false,
      isMoveChildren: false,
      svgInfo: cSvgInfo
    }

    curEditNode.value.children.push(cNode)
  }

  // 添加同级节点
  const addSameNode = () => {
    const node = curEditNode.value
    if (!node) return

    // 找父节点
    const pNode = findParentNode(node)

    if (!pNode) return

    const { svgInfo, type } = node
    const { group, text, path } = svgInfo
    const { content, size } = text

    const sContent = content + '的同级节点'

    let sX = group.x
    const way = path?.way
    // LR --- 只要与父节点连线在右侧
    if (way && way[1] === 'R') {
      sX = group.x + (content.getByteLen() - sContent.getByteLen()) * size
    }

    // 区分是否是根节点，根节点没有 path
    const filterChildern = pNode.children.filter((child) => child.svgInfo.path?.way === way)
    const sortedChildren = filterChildern.sort((a, b) => a.svgInfo.group.y - b.svgInfo.group.y)
    const lowestNode = sortedChildren[sortedChildren.length - 1]
    const sY = lowestNode.svgInfo.group.y + size * 3

    const id = uniqueId()
    const params = {
      id,
      content: sContent,
      x: sX,
      y: sY,
      nodeType: type
    }

    const sSvgInfo = createMindNode({ nodeInfo: params, node: pNode, draw: draw.value }, (val) => {
      if (curEditNode.value && curEditNode.value.id !== val.id) {
        const { rect } = curEditNode.value.svgInfo.rect
        rect.fill('none')
      }
      curEditNode.value = val
    })

    if (!sSvgInfo) return

    const cNode = {
      id,
      type: type,
      children: [],
      isExpand: true,
      svgInfo: sSvgInfo,
      isMoveParent: false,
      isMoveChildren: false
    }

    pNode.children.push(cNode)
  }

  // 删除节点及其子节点
  const deleteNode = () => {
    const node = curEditNode.value
    if (!node || !root) return

    node.children.forEach((child) => {
      const { group, path } = child.svgInfo
      path?.path?.remove()
      group.group.remove()
    })

    const pNode = findParentNode(node)
    if (!pNode) return
    const index = pNode.children.findIndex((child) => child.id === curEditNode.value?.id)
    pNode.children.splice(index, 1)

    const { group, path } = node.svgInfo
    group.group.remove()
    path?.path?.remove()

    curEditNode.value = undefined
  }

  // 同级节点左对齐
  const alignLeftEdges = (rootNode?: ISvgNode) => {
    const node = curEditNode.value
    if (!node) return

    // 找父节点
    const pNode = rootNode || findParentNode(node)
    if (!pNode) return

    const x = rootNode
      ? rootNode.svgInfo.group.x + (rootNode.svgInfo.text.content.getByteLen() + 1) * 20 + 80
      : node.svgInfo.group.x
    const way = node.svgInfo.path?.way || 'RL'

    const filterChildern = pNode.children.filter((child) => child.svgInfo.path?.way === way)
    const sortedChildren = filterChildern.sort((a, b) => a.svgInfo.group.y - b.svgInfo.group.y)

    let gap = 80
    let curIndex = -1

    // 高度等间距对齐
    // const len = sortedChildren.length
    // gap = sameGap.value
    //   ? (sortedChildren[len - 1].svgInfo.group.y - sortedChildren[0].svgInfo.group.y) / (len - 1)
    //   : 0
    curIndex = sortedChildren.findIndex((child) => child.id === curEditNode.value?.id)

    if (curIndex === -1) {
      curIndex = 0
    }

    sortedChildren.forEach((child, index) => {
      const cGroup = child.svgInfo.group
      let y = cGroup.y

      if (curEditNode.value) {
        // // 保证最小距离
        // const calcGapY = child.svgInfo.text.size * (HEIGHT_MULTIPLIER * 2)
        // gap = Math.max(calcGapY, gap)
        y = curEditNode.value.svgInfo.group.y - gap * (curIndex - index)
      }

      const moved = {
        movementX: x - cGroup.x,
        movementY: y - cGroup.y
      }
      moveChildren({ moved, node: child })

      cGroup.x = x
      cGroup.y = y
      cGroup.group.move(x, y)

      updatePath(child)
    })
  }

  // 同级节点居中对齐
  const alignCenterEdges = () => {
    const node = curEditNode.value
    if (!node) return

    // 找父节点
    const pNode = findParentNode(node)
    // console.log('pNode', pNode);

    if (!pNode) return

    const { group, text } = node.svgInfo
    const { content, size } = text
    const midX = group.x + ((content.getByteLen() + 1) * size) / 2

    const way = node.svgInfo.path?.way
    const filterChildern = pNode.children.filter((child) => child.svgInfo.path?.way === way)
    const sortedChildren = filterChildern.sort((a, b) => a.svgInfo.group.y - b.svgInfo.group.y)

    let gap = 0
    let curIndex = -1
    if (sameGap.value) {
      // 高度等间距对齐
      const len = sortedChildren.length
      gap = sameGap.value
        ? (sortedChildren[len - 1].svgInfo.group.y - sortedChildren[0].svgInfo.group.y) / (len - 1)
        : 0
      curIndex = sortedChildren.findIndex((child) => child.id === curEditNode.value?.id)
    }

    sortedChildren.forEach((child, index) => {
      const cGroup = child.svgInfo.group
      let y = cGroup.y

      if (curEditNode.value && sameGap.value) {
        // 保证最小距离
        const calcGapY = child.svgInfo.text.size * (HEIGHT_MULTIPLIER * 2)
        gap = Math.max(calcGapY, gap)
        y = curEditNode.value.svgInfo.group.y - gap * (curIndex - index)
      }

      const cContent = child.svgInfo.text.content
      const x = midX - ((cContent.getByteLen() + 1) * size) / 2

      const moved = {
        movementX: x - cGroup.x,
        movementY: y - cGroup.y
      }
      moveChildren({ moved, node: child })

      cGroup.x = x
      cGroup.y = y
      cGroup.group.move(x, y)

      updatePath(child)
    })
  }

  // 同级节点右对齐
  const alignRightEdges = (rootNode?: ISvgNode) => {
    const node = curEditNode.value
    if (!node) return

    // 找父节点
    const pNode = rootNode || findParentNode(node)
    // console.log('pNode', pNode);
    if (!pNode) return

    const { group, text } = node.svgInfo
    const { content, size } = text
    const endX = rootNode
      ? rootNode.svgInfo.group.x - 80
      : group.x + (content.getByteLen() + 1) * size

    const way = node.svgInfo.path?.way || 'LR'
    const filterChildern = pNode.children.filter((child) => child.svgInfo.path?.way === way)
    const sortedChildren = filterChildern.sort((a, b) => a.svgInfo.group.y - b.svgInfo.group.y)

    let gap = 80
    let curIndex = -1

    if (curIndex === -1) {
      curIndex = 0
    }

    // 高度等间距对齐
    // const len = sortedChildren.length
    // gap = sameGap.value
    //   ? (sortedChildren[len - 1].svgInfo.group.y - sortedChildren[0].svgInfo.group.y) / (len - 1)
    //   : 0
    curIndex = sortedChildren.findIndex((child) => child.id === curEditNode.value?.id)

    sortedChildren.forEach((child, index) => {
      const cGroup = child.svgInfo.group
      let y = cGroup.y

      if (curEditNode.value) {
        // 保证最小距离
        // const calcGapY = child.svgInfo.text.size * (HEIGHT_MULTIPLIER * 2)
        // gap = Math.max(calcGapY, gap)
        y = curEditNode.value.svgInfo.group.y - gap * (curIndex - index)
      }

      const cContent = child.svgInfo.text.content
      const x = endX - (cContent.getByteLen() + 1) * size

      const moved = {
        movementX: x - cGroup.x,
        movementY: y - cGroup.y
      }
      moveChildren({ moved, node: child })

      cGroup.x = x
      cGroup.y = y
      cGroup.group.move(x, y)

      updatePath(child)
    })
  }

  // 子节点镜像翻转
  const mirrorChildren = () => {
    if (!curEditNode.value) return

    const pSvgInfo = curEditNode.value.svgInfo
    const { content: pContent, size: pSize } = pSvgInfo.text
    const pWidth = (pContent.getByteLen() + 1) * pSize

    const children = curEditNode.value.children

    children.forEach((child) => {
      const { group, text } = child.svgInfo
      const { content, size } = text

      const cWidth = (content.getByteLen() + 1) * size
      const cX = pSvgInfo.group.x + pWidth + pSvgInfo.group.x - group.x - cWidth
      const cY = group.y

      group.group.move(cX, cY)
      group.x = cX

      updatePath(child)
    })
  }

  // 子节点移至右侧
  const moveChildrenToRight = (node: ISvgNode) => {
    if (!curEditNode.value) return

    const curRootNode = node || curEditNode.value

    const pSvgInfo = curRootNode.svgInfo
    const { content: pContent, size: pSize } = pSvgInfo.text
    const pWidth = (pContent.getByteLen() + 1) * pSize

    const children = curRootNode.children

    children.forEach((child) => {
      const way = child.svgInfo.path?.way

      if (way && way[1] !== 'L') {
        const { group, text } = child.svgInfo
        const { content, size } = text

        const cWidth = (content.getByteLen() + 1) * size
        const cX = pSvgInfo.group.x + pWidth + pSvgInfo.group.x - group.x - cWidth
        const cY = group.y

        group.group.move(cX, cY)
        group.x = cX

        updatePath(child)

        moveChildrenToRight(child)
      }
    })

    alignLeftEdges(curRootNode)
  }

  // 子节点移至左侧
  const moveChildrenToLeft = (node?: ISvgNode) => {
    if (!curEditNode.value) return

    const curRootNode = node || curEditNode.value

    const pSvgInfo = curRootNode.svgInfo
    const { content: pContent, size: pSize } = pSvgInfo.text
    const pWidth = (pContent.getByteLen() + 1) * pSize

    const children = curRootNode.children

    children.forEach((child) => {
      const way = child.svgInfo.path?.way

      if (way && way[1] !== 'R') {
        const { group, text } = child.svgInfo
        const { content, size } = text

        const cWidth = (content.getByteLen() + 1) * size
        const cX = pSvgInfo.group.x + pWidth + pSvgInfo.group.x - group.x - cWidth
        const cY = group.y

        group.group.move(cX, cY)
        group.x = cX

        updatePath(child)

        moveChildrenToLeft(child)
      }
    })

    alignRightEdges(curRootNode)
  }

  // 与父节点中线对齐
  const centerToParent = () => {
    const node = curEditNode.value
    if (!node) return

    const pNode = findParentNode(node)
    if (!pNode) return

    const pSvgInfo = pNode.svgInfo
    const pMidY = pSvgInfo.group.y + (pSvgInfo.text.size * HEIGHT_MULTIPLIER) / 2

    const cSvgInfo = node.svgInfo
    const cHeight = (cSvgInfo.text.size * HEIGHT_MULTIPLIER) / 2
    const cY = pMidY - cHeight

    const { group } = cSvgInfo
    group.y = cY
    group.group.move(group.x, cY)

    updatePath(node)
  }

  // 折叠/展开 子节点
  const toggleChildren = () => {
    if (!curEditNode.value) return

    const isExpand = !curEditNode.value.isExpand
    curEditNode.value.isExpand = isExpand

    function recursion(children: ISvgNode[]) {
      children.forEach((child) => {
        const { group, path } = child.svgInfo
        if (isExpand) {
          group.group.addTo(draw.value)
          path?.path?.addTo(draw.value)
        } else {
          group.group.remove()
          path?.path?.remove()
        }

        recursion(child.children)
      })
    }

    const children = curEditNode.value.children
    recursion(children)
  }

  const getNoSvgRoot = () => {
    if (!root) return

    const noSvgRoot: any = cloneDeep(root)
    noSvgRoot.svgInfo.group.group = undefined
    noSvgRoot.svgInfo.rect.rect = undefined
    noSvgRoot.svgInfo.text.text = undefined

    function recursion(children: any[]) {
      children.forEach((child) => {
        child.svgInfo.group.group = undefined
        child.svgInfo.path.path = undefined
        child.svgInfo.rect.rect = undefined
        child.svgInfo.text.text = undefined

        if (child.children) {
          recursion(child.children)
        }
      })
    }

    recursion(noSvgRoot.children)

    return noSvgRoot
  }

  const saveMindMap = () => {
    const noSvgNode = getNoSvgRoot()

    localForage
      .setItem('mindMap', noSvgNode)
      .then(function () {
        // Do other things once the value has been saved.
        // console.log(value)
      })
      .catch(function (err) {
        // This code runs if there were any errors
        console.error(err)
      })
  }

  const loadLocalMindMap = (noSvgRoot: ISvgNode) => {
    const params = {
      id: noSvgRoot.id,
      x: noSvgRoot.svgInfo.group.x,
      y: noSvgRoot.svgInfo.group.y,
      content: noSvgRoot.svgInfo.text.content,
      nodeType: noSvgRoot.type,
      draw: draw.value,
      node: noSvgRoot
    }

    const { group, rect, text } = drawSvgNode(params)
    noSvgRoot.svgInfo.group.group = group
    noSvgRoot.svgInfo.rect.rect = rect
    noSvgRoot.svgInfo.text.text = text

    function recursion(children: ISvgNode[], svgInfo: ICalcPathNode) {
      children.forEach((child) => {
        const params = {
          id: child.id,
          x: child.svgInfo.group.x,
          y: child.svgInfo.group.y,
          content: child.svgInfo.text.content,
          nodeType: child.type,
          draw: draw.value,
          node: child,
          root: noSvgRoot
        }

        const { group, rect, text } = drawSvgNode(params)
        child.svgInfo.group.group = group
        child.svgInfo.rect.rect = rect
        child.svgInfo.text.text = text

        const pNode = {
          group: svgInfo.group,
          text: svgInfo.text
        }

        const cNode = {
          group: child.svgInfo.group,
          text: child.svgInfo.text
        }

        if (child.svgInfo.path) {
          const svgPath = drawPath(pNode, cNode, draw.value)
          child.svgInfo.path.path = svgPath.path
        }
      })
    }
    const svgInfo = {
      group: noSvgRoot.svgInfo.group,
      text: noSvgRoot.svgInfo.text
    }

    recursion(noSvgRoot.children, svgInfo)
    root = noSvgRoot
  }

  const getMindMap = () => {
    localForage
      .getItem('mindMap')
      .then(function (value) {
        // console.log(value)
        if (value) {
          loadLocalMindMap(value as ISvgNode)
        } else {
          addRootNode()
        }
      })
      .catch(function (err) {
        // This code runs if there were any errors
        console.error(err)
        addRootNode()
      })
  }

  return {
    root,
    curEditNode,
    isMoveParent,
    sameGap,
    sameMove,
    getMindMap,
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
    toggleChildren
  }
}
