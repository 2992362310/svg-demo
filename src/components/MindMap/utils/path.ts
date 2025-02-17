import { INITIAL_IS_CURVE, INITIAL_LINE_COLOR, INITIAL_LINE_WIDTH } from '../conf/config'
import { EPathWay } from '../conf/enum'
import { calcSvgPathPoint } from './pathPoint'
import type {
  ICalcPathNode,
  ICalcSvgPathParams,
  ICalculatePathParams,
  IGetCurvePathParams,
  ISvgNode
} from '../conf/type'
import { findParentNode } from './svgNode'

// 贝塞尔曲线
const getCurvePath = ({ start, cStart, cEnd, end }: IGetCurvePathParams) => {
  // 第一行 起点
  // 第二行 起点控制点
  // 第三行 终点控制点
  // 第四行 终点
  const curvePath = `
      M ${start.x} ${start.y}
      C ${cStart.x} ${cStart.y}
      ${cEnd.x} ${cEnd.y}
      ${end.x} ${end.y}
  `

  return curvePath
}

// 曲线
const calcCurvePath = (params: ICalculatePathParams) => {
  const { start, end } = params
  let xGap = params.xGap || Math.abs(start.x - end.x)
  let yGap = params.yGap || Math.abs(start.y - end.y)

  // 小数点后面过多，会转成字符串
  xGap = Math.round(xGap)
  yGap = Math.round(yGap)

  const cStart = {
    x: start.x + xGap,
    y: start.y
  }

  const cEnd = {
    x: end.x - xGap,
    y: end.y
  }

  switch (params.way) {
    case EPathWay.RL:
      cStart.x = start.x + xGap
      cStart.y = start.y
      cEnd.x = end.x - xGap
      cEnd.y = end.y
      break

    case EPathWay.ML:
      cStart.x = start.x
      cStart.y = start.y > end.y ? start.y - yGap : start.y + yGap // 子节点是否在上
      cEnd.x = end.x - xGap
      cEnd.y = end.y
      break

    case EPathWay.MM:
      cStart.x = start.x
      cStart.y = start.y > end.y ? start.y - yGap : start.y + yGap // 子节点是否在上方
      cEnd.x = end.x
      cEnd.y = start.y > end.y ? end.y + yGap : end.y - yGap // 子节点是否在上方
      break

    case EPathWay.MR:
      cStart.x = start.x
      cStart.y = start.y > end.y ? start.y - yGap : start.y + yGap // 子节点是否在上方
      cEnd.x = end.x + xGap
      cEnd.y = end.y
      break

    case EPathWay.LR:
      cStart.x = start.x - xGap
      cStart.y = start.y
      cEnd.x = end.x + xGap
      cEnd.y = end.y
      break
  }

  return getCurvePath({ start, cStart, cEnd, end })
}

// 直角
const calcStraightPath = (params: ICalculatePathParams) => {
  const { start, end } = params

  // 第一行 起点
  // H 水平移到中点
  // V 垂直移到中点
  // 第四行 终点
  let svgPath = `
    M ${start.x} ${start.y} 
    H ${(start.x + end.x) / 2}
    V ${end.y} 
    L ${end.x} ${end.y}
  `
  switch (params.way) {
    case EPathWay.RL:
      svgPath = `
          M ${start.x} ${start.y} 
          H ${(start.x + end.x) / 2}
          V ${end.y} 
          L ${end.x} ${end.y}
      `
      break

    case EPathWay.ML:
      svgPath = `
          M ${start.x} ${start.y} 
            ${start.x} ${end.y} 
          L ${end.x} ${end.y}
      `
      break

    case EPathWay.MM:
      svgPath = `
          M ${start.x} ${start.y} 
          V ${(start.y + end.y) / 2} 
          H ${end.x}
          L ${end.x} ${end.y}
      `
      break

    case EPathWay.MR:
      svgPath = `
        M ${start.x} ${start.y} 
          ${start.x} ${end.y}
        L ${end.x} ${end.y}
      `
      break

    case EPathWay.LR:
      svgPath = `
          M ${start.x} ${start.y} 
          H ${(start.x + end.x) / 2}
          V ${end.y} 
          L ${end.x} ${end.y}
      `
      break
  }

  return svgPath
}

const calcSvgPath = ({ node, path }: ICalcSvgPathParams) => {
  const { pNode, cNode } = node
  const svgPathPt = calcSvgPathPoint(pNode, cNode)

  const { isCurve, xGap, yGap } = path

  if (isCurve) {
    const params = {
      xGap,
      yGap,
      ...svgPathPt
    }

    return {
      path: calcCurvePath(params),
      way: svgPathPt.way
    }
  }

  return {
    path: calcStraightPath(svgPathPt),
    way: svgPathPt.way
  }
}

export const drawPath = (pNode: ICalcPathNode, cNode: ICalcPathNode, draw: any) => {
  const node = { pNode, cNode }

  const path = {
    isCurve: INITIAL_IS_CURVE,
    color: INITIAL_LINE_COLOR,
    width: INITIAL_LINE_WIDTH
  }

  const svgPath = calcSvgPath({ node, path })
  const { color, width } = path

  const newPath = draw.path(svgPath.path).fill('none')
  newPath.stroke({
    color,
    width,
    linecap: 'round',
    linejoin: 'round'
  })

  return {
    path: newPath,
    way: svgPath.way
  }
}

export const reDrawPath = (pNode: ISvgNode, cNode: ISvgNode) => {
  const cPath = cNode.svgInfo.path
  if (!cPath) return

  const node = {
    pNode: {
      group: pNode.svgInfo.group,
      text: pNode.svgInfo.text
    },
    cNode: {
      group: cNode.svgInfo.group,
      text: cNode.svgInfo.text
    }
  }

  if (cPath.path) {
    const svgPath = calcSvgPath({ node, path: cPath })
    cPath.path.clear()
    cPath.path.plot(svgPath.path)
    cPath.way = svgPath.way
  }
}

// 拖动时，父节点和子节点的连线都要更新
export const updatePath = (node: ISvgNode) => {
  const pNode = findParentNode(node)

  if (pNode) {
    reDrawPath(pNode, node)
  }

  if (node.children.length) {
    node.children.forEach((child) => {
      reDrawPath(node, child)
    })
  }
}
