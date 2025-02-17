import { HEIGHT_MULTIPLIER } from '../conf/config'
import { EPathWay } from '../conf/enum'
import type { ICalcPathNode } from '../conf/type'

const getSMEXY = (calcNode: ICalcPathNode) => {
  const { group, text } = calcNode
  const { x, y } = group
  const { content, size } = text
  const startX = x
  const endX = x + size * (content.getByteLen() + 1)
  const midX = (x + endX) / 2
  const startY = y
  const endY = y + size * HEIGHT_MULTIPLIER
  const midY = (startY + endY) / 2

  return {
    startX,
    midX,
    endX,
    startY,
    midY,
    endY
  }
}

// pNode=父节点 cNode=子节点
export const calcSvgPathPoint = (pNode: ICalcPathNode, cNode: ICalcPathNode) => {
  const p = getSMEXY(pNode)
  const c = getSMEXY(cNode)

  const start = {
    x: p.endX,
    y: p.midY
  }

  const end = {
    x: c.startX,
    y: c.midY
  }

  // cNode的起点在 pNode的终点 的右边
  if (c.startX > p.endX) {
    start.x = p.endX
    end.x = c.startX

    return {
      start,
      end,
      way: EPathWay.RL
    }
  }

  // cNode的起点在 pNode的中线与终点之间
  if (c.startX > p.midX && c.startX < p.endX) {
    start.x = p.midX
    end.x = c.startX

    // cNode在 pNode 的中线上方
    if (c.endY < p.startY) {
      start.y = p.startY
      end.y = c.midY
    }

    // cNode在 pNode 的中线下方
    if (c.startY > p.endY) {
      start.y = p.endY
      end.y = c.midY
    }

    return {
      start,
      end,
      way: EPathWay.ML
    }
  }

  // cNode的起点 在 pNode 的起点与中线之间
  if (c.startX > p.startX && c.startX < p.midX) {
    start.x = p.midX
    end.x = c.midX

    // cNode在 pNode 的中线上方
    if (c.endY < p.startY) {
      start.y = p.startY
      end.y = c.endY
    }

    // cNode在 pNode 的中线下方
    if (c.startY > p.endY) {
      start.y = p.endY
      end.y = c.startY
    }

    let way = EPathWay.MM

    // cNode的终点 在 pNode的起点与中线之间
    if (c.endX < p.midX) {
      end.x = c.endX
      end.y = c.midY
      way = EPathWay.MR
    }

    return {
      start,
      end,
      way
    }
  }

  // cNode的起点 在 pNode 的起点左边
  if (c.startX < p.startX) {
    start.x = p.startX
    end.x = c.endX

    // cNode在 pNode 的中线上方
    if (c.endY < p.startY) {
      start.y = p.startY
      end.y = c.endY
    }

    // cNode在 pNode 的中线下方
    if (c.startY > p.endY) {
      start.y = p.endY
      end.y = c.startY
    }

    let way = EPathWay.LR

    // cNode的终点 在 pNode 的中线右边
    if (c.endX > p.endX) {
      start.x = p.midX
      end.x = c.midX
      way = EPathWay.MM
    }

    // cNode的终点 在 pNode 的中线与右边之间
    if (c.endX < p.endX && c.endX > p.midX) {
      start.x = p.midX
      end.x = c.midX
      way = EPathWay.MM
    }

    // cNode的终点 在 pNode 的中线与左边之间
    if (c.endX < p.midX && c.endX > p.startX) {
      start.x = p.midX
      end.x = c.endX
      end.y = c.midY
      way = EPathWay.MR
    }

    // cNode的终点 在 pNode 的起点左边
    if (c.endX < p.startX) {
      start.x = p.startX
      start.y = p.midY
      end.x = c.endX
      end.y = c.midY
      way = EPathWay.LR

      return {
        start,
        end,
        way
      }
    }

    return {
      start,
      end,
      way
    }
  }

  return {
    start,
    end,
    way: EPathWay.RL
  }
}
