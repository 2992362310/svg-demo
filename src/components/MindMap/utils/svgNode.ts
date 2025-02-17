import type { Svg } from '@svgdotjs/svg.js'
import { Rect } from '@svgdotjs/svg.js'
import {
  HEIGHT_MULTIPLIER,
  INITIAL_FILL_COLOR,
  INITIAL_FONT_SIZE,
  INITIAL_IS_CURVE,
  INITIAL_LINE_COLOR,
  INITIAL_LINE_WIDTH,
  INITIAL_STROKE_COLOR,
  INITIAL_TEXT_COLOR
} from '../conf/config'
import { ESvgNodeType } from '../conf/enum'
import type { DrawSvgNodeParams, INodeInfo, ISvgNode } from '../conf/type'
import { moveChildren, moveParent } from './moveNode'
import { drawPath, updatePath } from './path'
import { root } from '../hooks/useSvg'

interface ICreateMindNode {
  nodeInfo: INodeInfo
  draw: Svg
  node?: ISvgNode
}

export const createMindNode = (options: ICreateMindNode, callback?: (val: ISvgNode) => void) => {
  const { nodeInfo, draw, node } = options
  const { id, x, y, content, nodeType } = nodeInfo

  const params = {
    ...nodeInfo,
    draw,
    node
  }
  const svgNode = drawSvgNode(params, callback)

  const group = {
    group: svgNode.group,
    id,
    x,
    y
  }

  const rect = {
    rect: svgNode.rect,
    fillColor: INITIAL_FILL_COLOR,
    strokeColor: INITIAL_STROKE_COLOR
  }

  const text = {
    text: svgNode.text,
    content,
    size: INITIAL_FONT_SIZE,
    color: INITIAL_TEXT_COLOR
  }

  let path = undefined

  // 子节点，需要绘制连线
  if (nodeType !== ESvgNodeType.ROOT && node) {
    const { svgInfo } = node

    const pNode = {
      group: svgInfo.group,
      text: svgInfo.text
    }

    const cNode = {
      group,
      text
    }

    const svgPath = drawPath(pNode, cNode, draw)

    path = {
      path: svgPath.path,
      way: svgPath.way,
      isCurve: INITIAL_IS_CURVE,
      color: INITIAL_LINE_COLOR,
      width: INITIAL_LINE_WIDTH
    }
  }

  return {
    group,
    rect,
    text,
    path
  }
}

export const drawSvgNode = (params: DrawSvgNodeParams, callback?: (val: ISvgNode) => void) => {
  const { draw, id, x, y, content } = params

  const options = {
    x: x,
    y: y,
    width: INITIAL_FONT_SIZE * (content.getByteLen() + 1),
    height: INITIAL_FONT_SIZE * HEIGHT_MULTIPLIER,
    rx: 4,
    ry: 4
  }

  const rect = new Rect(options)
  rect.stroke(INITIAL_TEXT_COLOR).fill('none')

  const text = draw.plain(content)
  text.dx(options.x + INITIAL_FONT_SIZE * 0.5)
  text.dy(options.y + INITIAL_FONT_SIZE * 1.25)
  text.font({ fill: INITIAL_TEXT_COLOR, family: 'Inconsolata', size: INITIAL_FONT_SIZE })

  const group = draw.group()
  group.add(rect)
  group.add(text)
  group.id(id)
  // @ts-ignore
  group.draggable()

  // 为组添加类名
  group.addClass('group-class')

  group.on('dragmove', (e: any) => {
    const { handler, box, event } = e.detail
    e.preventDefault()
    handler.move(box.x, box.y)
    // Snap to grid
    // handler.move(box.x - (box.x % 50), box.y - (box.y % 50))

    const moved = {
      movementX: event.movementX,
      movementY: event.movementY
    }

    const fNode = findNodeById(group.id())

    if (fNode) {
      const { group: fGroup } = fNode.svgInfo
      fGroup.x = box.x
      fGroup.y = box.y

      updatePath(fNode)

      moveChildren({ moved, node: fNode })

      moveParent({ moved, node: fNode })
    }
  })

  group.on('mousedown', (e: any) => {
    e.preventDefault()

    const fNode = findNodeById(group.id())

    if (fNode) {
      const { rect } = fNode.svgInfo
      rect.rect.fill(rect.fillColor)

      // 鼠标选中，此处需用回调
      callback && callback(fNode)
    }
  })

  return { group, rect, text }
}

export const createRootNode = () => {}

export const findNodeById = (id: string) => {
  if (root.id === String(id)) {
    return root
  }

  let node = null
  function recursion(children: ISvgNode[]) {
    if (children.length) {
      for (let i = 0; i < children.length; i++) {
        if (children[i].id === String(id)) {
          node = children[i]
          return
        } else {
          // 深度遍历
          recursion(children[i].children)
        }
      }
    }
  }

  recursion(root.children)

  return node
}

export const findParentNode = (node: ISvgNode) => {
  if (node.type === ESvgNodeType.SUB) {
    return root
  }

  let pNode = null
  const id = node.id

  function recursion(children: ISvgNode[]) {
    for (let i = 0; i < children.length; i++) {
      const nodes = children[i].children
      for (let j = 0; j < nodes.length; j++) {
        if (nodes[j].id === id) {
          pNode = children[i]
          return
        } else {
          recursion(children[i].children)
        }
      }
    }
  }

  recursion(root.children)

  return pNode
}
