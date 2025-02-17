import type { IMovedParams } from '../conf/type'
import { updatePath } from './path'
import { findParentNode } from './svgNode'

export const moveChildren = ({ moved, node }: IMovedParams) => {
  if (node.isMoveChildren) {
    node.children.forEach((child) => {
      const { group } = child.svgInfo
      const x = group.x + moved.movementX
      const y = group.y + moved.movementY
      group.x = x
      group.y = y
      group.group.move(x, y)

      moveChildren({ moved, node: child })
    })

    // updatePath(node)
  }
}

export const moveParent = ({ node, moved }: IMovedParams) => {
  if (node.isMoveParent) {
    const pNode = findParentNode(node)

    if (pNode) {
      const { group } = pNode.svgInfo
      const x = group.x + moved.movementX
      const y = group.y + moved.movementY
      group.x = x
      group.y = y
      group.group.move(x, y)

      const children = pNode.children

      children.forEach((child) => {
        if (child.id !== node.id) {
          updatePath(child)
        }
      })
    }
  }
}
