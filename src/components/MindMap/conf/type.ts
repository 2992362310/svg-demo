import { type Ref } from 'vue'
import type { EPathWay, ESvgNodeType } from './enum'
import type { Path, Rect, Text, G as Group } from '@svgdotjs/svg.js'
import type { Svg } from '@svgdotjs/svg.js'

export interface IGirdInfo {
  x: number
  y: number
  width: number
  height: number
}

export interface INodeInfo {
  nodeType: ESvgNodeType
  id: string
  x: number
  y: number
  content: string
}

export interface IUseSvg {
  draw: Ref<Svg>
  gridInfo: IGirdInfo
  gridZoom: Ref<number>
}

export interface ILineGap {
  xGap?: number // 贝塞尔曲线横向控制
  yGap?: number // 贝塞尔曲线纵向控制
}

// ---------分界线----------------
// 节点信息相关

export interface ISvgGroup {
  group: Group
  id: number | string
  x: number
  y: number
}

export interface ISvgRect {
  rect: Rect
  fillColor: string
  strokeColor: string
}

export interface ISvgText {
  text: Text
  content: string
  size: number
  color: string
}

export interface ISvgPath {
  path?: Path
  way?: EPathWay
  isCurve: boolean
  color: string
  width: number
  xGap?: number
  yGap?: number
}

export interface ISvgNode {
  id: string
  type: ESvgNodeType
  children: ISvgNode[]
  isExpand: boolean
  isMoveChildren: boolean
  isMoveParent: boolean
  svgInfo: {
    group: ISvgGroup
    rect: ISvgRect
    text: ISvgText
    path?: ISvgPath
  }
}

export interface DrawSvgNodeParams extends INodeInfo {
  draw: Svg
  root?: ISvgNode
  node?: ISvgNode
}

// 移动节点参数
export interface IMovedParams {
  moved: {
    movementX: number
    movementY: number
  }
  node: ISvgNode
  isSameGap?: boolean
  sameMove?: boolean
  isMoveParent?: boolean
}

// ---------分界线----------------

// SVG PATH 相关

interface IPathPoint {
  x: number
  y: number
}

export interface ICalculatePathParams extends ILineGap {
  start: IPathPoint
  end: IPathPoint
  way: EPathWay
}

export interface IGetCurvePathParams {
  start: IPathPoint // 父节点
  cStart: IPathPoint // 父节点控制点
  cEnd: IPathPoint // 子节点控制点
  end: IPathPoint // 子节点
}

export interface ICalcSvgPathParams {
  node: {
    pNode: ICalcPathNode
    cNode: ICalcPathNode
  }
  path: ISvgPath
}

export interface ICalcPathNode {
  group: ISvgGroup
  text: ISvgText
}
